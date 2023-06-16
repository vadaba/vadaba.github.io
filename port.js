const express = require("express");
const path = require('path');

/*const bodyParser = require("body-parser");*/

const app = express();

/*app.use(bodyParser.urlencoded({ entended: true }));*/





app.use(express.static(path.join(__dirname, 'public',)));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/port.html");
});


/*app.post("/", function (req, res) {

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2

    res.send('The result of the calculation is ' + result);
});*/



/*app.post('/Bmicalculator', function (req, res) {

    var weights = parseFloat(req.body.weights);
    var heights = parseFloat(req.body.heights);

    var bmi = weights / (heights * heights);

    res.send('Your BMI is ' + bmi);
});*/




app.listen(8000, function () {
    console.log('Server is running on port 8000');
});


