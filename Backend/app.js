const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');
const matchRouter = require('./routes/match-route');
const app = express();
app.use(bodyParser.json());
app.use(cors())

// mongoose.connect('mongodb://ranfa:232003@cluster0.d2yn9.mongodb.net/movieApp?retryWrites=true&w=majority');
mongoose.connect
('mongodb+srv://ranfa:232003@cluster0.d2yn9.mongodb.net/matchApp?retryWrites=true&w=majority');

app.use("/api/match",matchRouter);

app.use((req,res,next,err)=>{
    const code = err.code||500;
    const message = err.message||"somthing went wrong";
    res.status(code);
    res.json({message:message});
})
app.listen(5000, () => {
    console.log('Example app is listening on port 5000.')
    //console.log(dummy);
}
);