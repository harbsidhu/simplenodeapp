# index.js
# create index.js and paste the following
const http = require('http');

# creates a server object in a variable named server
# takes in a request and response function
# outputs a response to the browser
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Hello, World</h1>');
    }
});
# checks for the environment variable 'process.env.PORT`, or 5000 if not available
const PORT = process.env.PORT || 5000;

# then just output this string to the console
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));