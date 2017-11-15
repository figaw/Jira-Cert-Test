var Promise = require("bluebird");
var prompt = require("inquirer").createPromptModule();
var _ = require("lodash");

var handleError = require("./handleError");
var connect = require("./connector");

function getConfig(config) {

    return Promise.coroutine(function* () {

        var questions = [];


        if (!config.url) {
            questions.push({
                type: "input",
                name: "url",
                message: "JIRA URL (e.g. https://jira.atlassian.com/):",
                validate: function(url) {
                    if (url && url.indexOf("http") === 0) {
                        return true;
                    }
                    return "Please enter a URL starting with http(s)://"
                },
                filter: function(url) {
                    url = url.trim();
                    url = url.charAt(url.length - 1) === "/" ? url : url + "/";
                    return url;
                }
            });
        }

        questions.push({
            type: "input",
            name: "username",
            message: "Username:",
            validate: function(username) {
                return (username && username.trim().length > 0) || "Please enter your JIRA username"
            },
            filter: function(username) {
                return username.trim();
            }
        });
        questions.push({
            type: "password",
            name: "password",
            message: "Password:",
            validate: function(password) {
                return (password && password.trim().length > 0) || "Please enter your JIRA password"
            },
            filter: function(password) {
                return password.trim();
            }
        });

        config = _.extend(config, yield prompt(questions));

        return yield connect(config);

    })().catch(function(err) {
        return handleError(err);
    });
}

module.exports = getConfig;
