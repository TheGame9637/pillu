var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();


app.set('view engine', 'pug');
app.set('views','./views');

app.use('/static', express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array()); 

app.get('/', function(req, res){
    res.render('view', { message: null });
 });

app.post('/', function(request, response) {
    let inp_date = String(request.body.date);
    if(inp_date === '2024-01-07') {
        response.render('story');
    } else {
        response.render('view', { message: "You dont love me 😭" });
    }
})

app.listen(3000, (req, res)=> {
    console.log('server is running ... ');
});


