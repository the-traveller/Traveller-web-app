var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
/*exports.index = function(req, res){
    res.redirect('index', { title: 'Traveller tut' });
};*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Traveller' });
});

/* GET signup page. */
router.get('/singup', function(req, res, next) {
  res.render('singup', { title: 'Sing-up' });
});

/*exports.signup = function(req, res) {
  res.render('singup');
};*/

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/*exports.login = function(req, res) {
  res.render('login');
};*/


// GET Login info and long user in.
router.get('/getAccount', function(req,res,next){
    console.log("GetAccount openend");
    res.render('index', { title: 'Gebruiker' });
 /* connectionpool.getConnection(function(err, connection) {
    if (!err) {
      connection.query('SELECT * FROM LOGIN WHERE USERNAME ='   + connection.escape(req.body.userName),
          function (err, rows, fields) {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.send({
            result: 'error',
            err: err.code
          });
        }
        res.send({
          result: 'success',
          err: '',
          fields: fields,
          json: rows,
          length: rows.length

        });
            connection.release();
            res.render('index', { title: 'User is oké' });

      });
    } else {
      console.error('CONNECTION error: ', err);
      res.statusCode = 503;
      res.send({
        result: 'error',
        err: err.code
      });
    }
  });*/

});


// GET account info and create new account.
router.get('/ceateAccount', function(req,res,next) {

});

module.exports = router;
