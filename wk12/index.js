const   http = require('http'),
        express = require('express'),
        path = require('path');

const   router = express(),
        server = http.createServer(router);

router.use(express.static(path.resolve(__dirname,'views')));



server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    let addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port);
})