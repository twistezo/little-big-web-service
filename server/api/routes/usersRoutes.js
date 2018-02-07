'use strict';

module.exports = function (app) {
    var users = require('../controllers/usersController');

    app.route('/users')
        .get(users.read_users)
        .post(users.create_user);

    app.route('/users/:userId')
        .get(users.read_user)
        .put(users.update_user)
        .delete(users.delete_user);
};
