//  OpenShift sample Node application
var express = require('express'),
    app     = express(),
    morgan  = require('morgan');
    
Object.assign=require('object-assign')
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8000,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function (req, res) {

		res.render('index.html');
});
/*
app.get('/favicon.ico', function (req, res) {

		res.render('favicon.ico');
});

app.get('/inline.bundle.js', function (req, res) {

		res.render('inline.bundle.js');
});

app.get('/inline.bundle.js.map', function (req, res) {

		res.render('inline.bundle.js.map');
});

app.get('/main.bundle.js', function (req, res) {

		res.render('main.bundle.js');
});

app.get('/main.bundle.js.map', function (req, res) {

		res.render('main.bundle.js.map');
});

app.get('/polyfills.bundle.js', function (req, res) {

		res.render('polyfills.bundle.js');
});

app.get('/polyfills.bundle.js.map', function (req, res) {

		res.render('polyfills.bundle.js.map');
});

app.get('/styles.bundle.js', function (req, res) {

		res.render('styles.bundle.js');
});

app.get('/styles.bundle.js.map', function (req, res) {

		res.render('styles.bundle.js.map');
});

app.get('/vendor.bundle.js', function (req, res) {

		res.render('vendor.bundle.js');
});
app.get('/vendor.bundle.js.map', function (req, res) {

		res.render('vendor.bundle.js.map');
});
*/
// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
