const express = require('express');
const app = express();
require('dotenv').config();
const mdl = require('./model');
const backup = require('./backup');

/**
 * Demo backup every minutes.
 * Remove the params you will get default timer at 2AM daily.
 */
backup('1 * * * * *').then(r=>{
    console.log(r);
}).catch(e=>{
    console.log(e);
})
// insert
app.get('/insert', (req, res) => {
    const article = new mdl({ title: req.query.title });
    article.save((err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("inserted");


    })
});
// List data
app.get('/', function (req, res) {
    mdl.find({}, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});