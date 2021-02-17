const express           = require('express');
const path              = require('path')
const expressLayouts    = require('express-ejs-layouts')
const Request           = require('request')
const bodyParser        = require('body-parser')
const mysql 			= require('mysql')
const myConnection		= require('express-myconnection')

const app = express();

app.set('port',process.env.PORT || 3000)
app.set('views', ['src/views']);
app.set('view engine', 'ejs')
app.use(expressLayouts);
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));


//Connection MySQL
app.use(myConnection(mysql,{
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'nodemysql'
}, 'single'));


const jobs = require('./routes/jobs.route');
app.use('/jobs', jobs);

const genders = require('./routes/genders.route');
app.use('/genders', genders);


const employees = require('./routes/employees.route');
app.use('/employees', employees);


app.get('/test', function(req, res) {
    res.status(200).send({status:"success",message:"Welcome To Testing API"})
});

app.listen(app.get('port'), () => {
	console.log('server on port 3000')
});