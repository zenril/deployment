const fs = require('fs');

var out = '';

out += new Date().toString() + '\r\n\r\n';
out += new Date().toString() + '\r\n';

var thing = process.env.GOOGLE_APPLICATION_CREDENTIALS;


const server = require('server');
const { get, post } = server.router;

// Handle requests to the url "/" ( http://localhost:3000/ )
server([
    get('/', ctx => {
        return JSON.stringify(process.env);
    })
]);

fs.writeFile('/Users/aaronmeredith/Documents/Projects/forever/test.log', out, function (err) {
    if (err) throw err;
    console.log('loaded!', err);
});