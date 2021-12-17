const   express = require('express'),
        http = require('http'),
        path = require('path');

const   router = express(),
        server = http.createServer(router);

let     greeting = "World";

router.use(express.static(path.resolve(__dirname,'views')));
router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.get('/get', function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    let hello = "<h1>Hello, " + greeting + "!</h1>"

    let date_time = new Date();
    console.log(date_time);

    res.end(hello.toString() + date_time.toString());

});

router.post('/post', function(req, res) {

    console.log(req.body);
    
    greeting = req.body.value;

    console.log(greeting);

    res.redirect('back');

});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    let addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port);
});