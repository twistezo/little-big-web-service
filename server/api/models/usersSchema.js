'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    name: String,
    age: Number,
    created_date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Users', UsersSchema);
