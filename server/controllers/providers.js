var Provider = require('../models/Provider');


exports.getProviders = function(request, response){
    Provider.find({}).exec(function(err, providers){
       if (err) throw err;
       response.status(200).send({
        data: providers,
        message: "success"
       });
   }) 
}

exports.getProvider = function (request, response) {
    var id = request.params.providerId;
    Provider.findOne({
        _id: id
    }).exec(function (err, provider) {
        if(err) throw err;
        response.status(200).send({
            data: provider,
            message: "success"
           });
    })
};

exports.addProvider = function(request, response){
    console.log(request.body);
    Provider.create(request.body, function (err, provider) {
        if (err) {
            if (err.toString().indexOf('E11000') > -1) {
                response.status(400).send({
                    message: err.toString()
                   });
            }
            return response.status(400).send({
                message: err.toString()
               });
        }

        provider.save(function (err) {
            if (err) {
                console.log("failed save");
            } else {
                response.status(200).send({
                    data: provider,
                    msg: "success"
                });
            }
        })
    })
}

exports.editProvider = function(request, response){
    var providerData = request.body;
    Provider.findOneAndUpdate({
        _id: providerData.id
    }, providerData, {
        new: true
    }).exec(function (err, provider) {
        if (err) {
            console.log(err);
        } else {
            response.status(200).send({
                msg: "success",
                data: provider
            });
        }
    })
}

exports.deleteProvider = function (request, response){
    Provider.findOneAndRemove({_id:request.params.providerId}).exec(function(err, result){
            if (err) throw err;
            response.status(200).send({msg:"success", data:result});
        })
}
