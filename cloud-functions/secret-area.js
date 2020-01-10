exports.handler = function(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: "To jest sekretna strefa!"
    })

}