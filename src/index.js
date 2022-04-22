const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const multer = require("multer")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())


mongoose.connect("mongodb+srv://rohankesarkar:rohan123@cluster0.sgev7.mongodb.net/group32Database", {
    useNewUrlParser: true
})
    .then((path) => console.log(`MongoDb is connected, Database Name ${path.connections[0].name}`))
    .catch(err => console.log(err.message))


app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});