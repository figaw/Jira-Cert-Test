var chalk = require("chalk");

// catch-all duck-typing error handler
function handleError(err) {
    if (err.body) {
        handleErrorResponse(err, err);
    } else if (err.response && err.response.body) {
        handleErrorResponse(err.response, err);
    } else {
        console.error(chalk.red(err.toString()));
    }
    process.exit(1);
}

function handleErrorResponse(response, err) {
    if (response.body.errorMessages) {
        response.body.errorMessages.forEach(function(message) {
            console.error(chalk.red(message));
        });
    } else {
        console.error(chalk.red(err.toString()));
    }
}

module.exports = handleError;
