const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql2'),
    myConnection = require('express-myconnection');
const { redirect } = require('express/lib/response');


// const nodeHtmlToImage = require('node-html-to-image')
// var proxy = require('html2canvas-proxy');
// const puppeteer = require('puppeteer');



const app = express();


// static files
app.use('/public', express.static('public'));

// importing routes
const customerRoutes = require('./routes/customer');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'nodejs2'
}, 'single'));
app.use(express.urlencoded({extended: false}));




// routes
app.use('/', customerRoutes);


// static files
app.use('/public', express.static('public'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

 

app.use('/generate2',( req, res, next) => {
  res.writeHead(404, { 'content-type': 'text/html' })
  res.write('<h1> Please select an Employee first</h1>')
  res.write('<a href="../">Go back</a>')
  res.end()

})


  app.use('/generate3',( req, res, next) => {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1> Please select an Employee first</h1>')
    res.write('<a href="../">Go back</a>')
    res.end()
   });

  app.use('/generate4',( req, res, next) => {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1> Please select an Employee first</h1>')
    res.write('<a href="../">Go back</a>')
    res.end()
  });

  
const puppeteer = require('puppeteer')



