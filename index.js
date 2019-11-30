const express = require('express');
const app = express();
const path = require('path');

// Set app's root folder to static
app.use(express.static("static"));

// Set handlebars:
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');

app.get("/", (req, res) => {
	res.render("index"); 
});


app.get("/leaderboard", (req, res) => {
	res.render("lb"); 
});

// Listen @ Port 3000
app.listen(3000, () => {
    console.log("Server Up @ port 3k"); 
});

