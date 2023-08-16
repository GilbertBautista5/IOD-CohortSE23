const express = require("express");
const app = express();
const port = 3000;
const testRoute = require('./routes/myTestRoute');
const calculatorRoute = require('./routes/calclulatorRoutes');

app.use('/', express.static('public'))
app.use('/mytest', testRoute);
app.use('/calculator', calculatorRoute);


app.listen(port, () => {
    console.log (`example app listening at http://localhost:${port}`);
});