var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!' });
});

/* userlist htmlページを作成 */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var users = db.get('usercollection');
  users.find({},{},function(e, docs) {
      console.log(docs);
      res.render('userlist', {
          "userlist" : docs
      });
  });
});

/* POST user adding. */
router.post('/userlist', function(req, res, next) {

  console.log("POST");

  var user_name = req.body.user_name;
  var user_email = req.body.user_email;
  console.log('user_name=' + user_name + ' / user_email=' + user_email);

  var db = req.db;
  var users = db.get('usercollection');

  users.count({name: user_name}, function (error, count) {
    if(error !== undefined && error !== null){
      console.log('error=' + error);
    }
    console.log(count);
    if(count > 0) {
      users.update({ name: user_name }, { $set: { email: user_email } });
    } 
    else {
      users.insert([{ name: user_name, email: user_email }]);
    } 

    users.find({},{},function(e, docs) {
      console.log(docs);
      res.render('userlist', {
          "userlist" : docs
      });
    });
  });

});

module.exports = router;
