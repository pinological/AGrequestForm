const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AGdataSch = new Schema({
    Name: {
        type: String,
        required: true
    },
    Municipality: {
        type: String,
        required: true
    },
    WardNo: {
        type: String,
        required: true
    },
    Tel: {
        type: String,
        required: true
    },
    SC: {
        type: String,
        required: false
    },
    DOTorTC: {
        type: String,
        required: false
    },
    DOT: {
        type: String,
        required: false
    },
    TC: {
        type: String,
        required: false
    },
    Machine: {
        type: String,
        required: true
    },
    DateRequest: {
        type: String,
        required: true
    },
    DurationDay: {
        type: String,
        required: true
    },
    DurationHours: {
        type: String,
        required: true
    },
    kisUser: {
        type: String,
        required: true
    },
    paid: {
        type: String,
        required: true
    },
    propose: {
        type: String,
        required: true
    },
    timenow: {
        type: String,
        required: true
    }

}, { timeseries: true });

const dbmodel = mongoose.model('dbmodel', AGdataSch);
module.exports = dbmodel;