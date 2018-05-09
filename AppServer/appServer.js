var express = require('express');
//var session = require('express-session');

var app = express();
var bodyParser = require('body-parser');
// app.use(session({
//     secret: 'work hard',
//     resave: true,
//     saveUninitialized: false
//  }));

var usersRouter = require('./Router/users.js');
//var authRouter = require('./Router/authentication.js');
var textRouter = require('./Router/textapp.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.all( '/createuser.html', function(req,res, next){
//     console.log("checking welcome");
//     if (req.session && req.session.check){
//         next();
//     }
//     else{
//         res.redirect('/login.html');
//     }
// });

// app.all( '/admintables.html', function(req,res, next){
//     console.log("checking welcome");
//     if (req.session && req.session.check){
//         next();
//     }
//     else{
//         res.redirect('/login.html');
//     }
// });
//
// app.all( '/contactus.html', function(req,res, next){
//     console.log("checking welcome");
//     if (req.session && req.session.check){
//         next();
//     }
//     else{
//         res.redirect('/login.html');
//     }
// });
//
// app.all( '/thetextapp.html', function(req,res, next){
//     console.log("checking welcome");
//     if (req.session && req.session.check){
//         next();
//     }
//     else{
//         res.redirect('/login.html');
//     }
// });

app.use(express.static('../Public/'));
app.use("/users", usersRouter);
// app.use("/authentication", authRouter);
app.use("/textapp", textRouter);


var server = app.listen(3003, function () {
    var port = server.address().port;

    console.log("Example app listening at :%s",  port)
});