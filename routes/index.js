var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // index là tên file index.ejs nằm trong thư mục views
  // title : là biến đưa vào file index để sử dụng
  res.render('index', { title: 'Express' });
});

router.get('/lien-ket',function (req,res) {
  res.render('lienKet');
})

module.exports = router;
