/**
 * Created by michaelbarnes on 10/13/15.
 */
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

app.set('port', (process.env.PORT || 4567));
app.use(express.static(__dirname + '/app')); 	// set the static files location
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 					// simulate DELETE and PUT

app.listen(app.get('port'), function(){
    console.log('Simple static server listening on port ', app.get('port'));
});