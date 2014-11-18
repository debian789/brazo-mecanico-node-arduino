var express = require('express.io')();
var router = express.http().io();

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;







//var router = express.Router();

/* GET home page. */

// router.io.route('/ready', function(req) {
//     req.io.emit('talk', {
//         message: 'io event from an io route on the server'
//     });
// });

