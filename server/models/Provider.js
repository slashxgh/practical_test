var mongoose = require('mongoose');

var schemaOptions = {
    timestamps: true,
    strict:false,
    toJSON: {
        virtuals: true
    }
};


var providerSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true,
        unique: true,
        trim: true
    }
}, schemaOptions);


var Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;
