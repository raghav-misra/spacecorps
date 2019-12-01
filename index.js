const express = require('express');
const app = express();
const path = require('path');

// Set app's root folder to static
app.use(express.static("static"));

// Set handlebars:
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'hbs');

// GG LANDING PAGE
app.get("/", (req, res) => {
	res.render("index"); 
});

// YOU CAN PLAY BUT NEVER AS GOOD AS ME
app.get("/play-now", (req, res) => {
	res.render("play-now"); 
});

// OP LEADERBOARD IMA BE #1 EVERY TIME
app.get("/leaderboard", (req, res) => {
	res.render("leaderboard"); 
});

// MY COLONY IS THE BEST (colony searcher)
app.get("/colony", (req, res) => {
	res.render("play-now"); 
});

// Listen @ Port 3000
app.listen(3000, () => {
    console.log("Server Up @ port 3k"); 
});

