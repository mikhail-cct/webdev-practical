const   http = require('http'),
        express = require('express'),
        path = require('path');

const   router = express(),
        server = http.createServer(router);

router.use(express.static(path.resolve(__dirname,'views')));