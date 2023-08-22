const express = require("express");
const app = express();
const port = 3000;
const testRoute = require('./routes/myTestRoutes');
const calculatorRoute = require('./routes/calculatorRoutes');
const friendRoute = require('./routes/friendRoutes');

app.use('/', express.static('public'))
app.use('/mytest', testRoute);
app.use('/calculator', calculatorRoute);
app.use('/friendRoutes', friendRoute)


app.listen(port, () => {
    console.log (`example app listening at http://localhost:${port}`);
});