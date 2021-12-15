const mongoose = require('mongoose');

candidateSchema = mongoose.Schema({
    name:String,
    title:String,
    skills:[String]  
})

const Candidate = mongoose.model("Candidate",candidateSchema);
module.exports = Candidate;