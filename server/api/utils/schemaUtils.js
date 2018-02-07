'use strict';

var mongoose = require('mongoose'),
    Users = mongoose.model('Users');

exports.dropSchema = function () {
    Users.remove({}, function (err) {
        console.log('Collection succesfully cleaned on start')
    });
}

exports.buildDebugUsers = function () {
    var debug_user_1 = new Users({ name: 'Adam Nelsot', age: 18 });
    var debug_user_2 = new Users({ name: 'Jurij Kaf', age: 46 });
    var debug_user_3 = new Users({ name: 'Filip Torso', age: 25 });
    var debug_user_4 = new Users({ name: 'Tom Grols', age: 37 });
    var debug_user_5 = new Users({ name: 'Mike Maso', age: 21 });
    debug_user_1.save();
    debug_user_2.save();
    debug_user_3.save();
    debug_user_4.save();
    debug_user_5.save();
}
