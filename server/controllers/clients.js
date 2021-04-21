var Client = require('../models/Client');


exports.getClients = function(request, response){
   Client.find({}).sort({
    createdAt: 1
}).populate('providers').exec(function(err, clients){
       if (err) throw err;
       response.status(200).send({
        data: clients,
        message: "success"
       });
   }) 
}

exports.getClient = function (request, response) {
    var id = request.params.clientId;
    Client.findOne({
        _id: id
    }).populate('providers').exec(function (err, client) {
        if(err) throw err;
        response.status(200).send({
            data: client,
            message: "success"
           });
    })
};

exports.addClient = function(request, response){
    console.log(request.body);
    Client.create(request.body, function (err, client) {
        if (err) {
            if (err.toString().indexOf('E11000') > -1) {
                response.status(400).send({
                    message: err.toString()
                   });

            }
            return response.status(400).send({   
                    message: err.toString()
            })
        }

        client.save(function (err) {
            if (err) {
                console.log("failed save");
            } else {
                response.status(200).send({
                    msg: "success"
                });
            }
        })
    })
}

exports.editClient = function(request, response){
    var clientData = request.body;
    Client.findOneAndUpdate({
        _id: clientData.id
    }, clientData, {
        new: true
    }).exec(function (err, client) {
        if (err) {
            console.log(err);
        } else {
            response.status(200).send({
                msg: "success",
                data: client
            });
        }
    })
}

exports.deleteClient = function (request, response){
    console.log(request.params);
    Client.findOneAndRemove({_id:request.params.clientId}).exec(function(err, result){
            if (err) throw err;
            response.status(200).send({msg:"success", data: result});
        })
}
