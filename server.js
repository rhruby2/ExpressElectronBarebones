/**
 * Server using Express
 */

const express = require("express");
const app = express();

const indexRoute = require('./routes/index.js');

module.exports = function (port){

//to serve static files
app.use('/public', express.static(process.cwd() + '/public'));
//to recieve HTML form encoded data
app.use(express.urlencoded({extended:true}));

indexRoute(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

}