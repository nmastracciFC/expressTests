var express = require('express');
var router = express.Router();

const templateTypes = [
	{name: "Jade", usefulness: "sucky"},
	{name: "EJS", usefulness: "better"},
	{name: "Handlebars", usefulness: "Awesome"}
];

/* GET home page. with EJS */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express', description: "better!!", templates: templateTypes });
// });

/* GET home page. with HANDLEBARS */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Handlebars', description: "better!!", templates: templateTypes });
});

module.exports = router;
