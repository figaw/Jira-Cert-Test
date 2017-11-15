var Promise = require("bluebird");

var request = require("superagent");

var handleError = require("./handleError");

function connect(config) {

    return Promise.coroutine(function* () {

        // test connection

        var res = yield request
        .get(config.url + "rest/gadget/1.0/currentUser")
        .auth(config.username, config.password)
        .set('Accept', 'application/json');

        if (!res.ok) {
            return handleError(res);
        }

        console.log("Authenticated as " + res.body.fullName);

        return config;

    })().catch(function(err) {
        return handleError(err);
    });
}

module.exports = connect;
