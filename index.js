#!/usr/bin/env node

var Promise = require("bluebird");

var getConfig = require("./lib/config");

Promise.coroutine(function* () {

    var config = {}

    // uncomment the line below, and insert a url to the jira instance, to skip typing it while testing
    //config.url = "https://jira.atlassian.com/"

    yield getConfig(config);
})();

