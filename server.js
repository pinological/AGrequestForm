const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbmodel = require('./model/dbmodel');
require('dotenv').config()

app = express();
const port = process.env.PORT || 5000;

//mondoDB
const dbURL = process.env.MONGOAPI;
mongoose.connect(dbURL)
    .then((result) => {
        app.listen(port, () => {
            console.log('The location "localhost:' + port + '"');
        });
        console.log("Database Connected")
    })
    .catch((err) => console.log(err));

//middel ware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));


app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render("index", { title: "Portel" });
});

app.get('/login', (req, res) => {
    res.render("login", { log: "" });
})

app.post('/logindata', (req, res) => {
    if (req.body.username == 'KIS' && req.body.password == 'wua') {
        dbmodel.find()
            .then((result) => {
                const entries = Object.entries(result);
                res.render('data', { data: entries, jsonDat: entries });

            }).
        catch((err) => {
            console.log(err);
        })
    } else {
        res.render("login", { log: "Worng Username And Password" })
    }
})

app.get('/form', (req, res) => {
    res.render("dataSubmit", { title: "Form" })
});

app.post('/fromData', (req, res) => {
    console.log(req.body);
    const DBmodel = new dbmodel({
        Name: req.body.Name,
        Municipality: req.body.Municipality,
        WardNo: req.body.wa,
        Tel: req.body.Tel,
        SC: req.body.SC,
        DOTorTC: req.body.DOTorTC,
        DOT: req.body.DOT,
        TC: req.body.TC,
        Machine: req.body.MachineRe,
        DateRequest: req.body.DateR,
        DurationDay: req.body.DurationDay,
        DurationHours: req.body.DurationHours,
        kisUser: req.body.kisUser,
        paid: req.body.paid,
        propose: req.body.propose,
        timenow: req.body.timenow
    });

    DBmodel.save().then((result) => {
        codeNum = req.body.c0 + req.body.wardNo + req.body.SC;
        res.render("success", { title: "Sucess", Result: result, codeNumber: codeNum });
    }).catch((err) => {
        console.log(err);
    });
})



//database

//get and Set database

//codeand Set database

//code