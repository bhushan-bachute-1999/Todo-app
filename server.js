const express = require('express');// Require library express
const port = 8000;// Define port 

const app = express(); // Define app

//Middelware
app.use(express.static('./assets'));//Include static file folder
app.use('/', require('./routes/home'));//Go to routes folder for any routes coming

app.set('view engine', 'ejs');
app.set('views', './views');

//Listen on port 
app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Server is up and running on port ${port}`);
});

