var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;

var schemaOptions = {
    timestamps: true,
    strict:false,
    toJSON: {
        virtuals: true
    }
};


var clientSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone: {type: String},
    providers: [{type: Schema.Types.ObjectId, ref:'Provider'}],
}, schemaOptions);


var Client = mongoose.model('Client', clientSchema);

module.exports = Client;
