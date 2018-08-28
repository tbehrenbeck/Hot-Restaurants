// DEPENDENCIES 
//=============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//SET UP EXPRESS APP
//============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [
    {
        name: "tom tom",
        email:"tom@tom.com",
        phone: 123-456-789 ,
        uniqueID:123
    },
    {
        name: "test2",
        email:"tom@tom.com",
        phone: 123-456-789 ,
        uniqueID:123
    },
    {
        name: "test3",
        email:"tom@tom.com",
        phone: 123-456-789 ,
        uniqueID:123
    },
    {
        name: "test4",
        email:"tom@tom.com",
        phone: 123-456-789 ,
        uniqueID:123
    }
];
var waitlist = [];

//ROUTES 
//===============================================================

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"view.html"));
})

app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/api/reservations", function(req, res) {
    res.json([reservations,waitlist]);
});

app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    //Need to create routename 
  
    console.log(newReservation);
    if (reservations.length < 5){
        reservations.push(newReservation);
    }
    else {
        waitlist.push(newReservation);
    }
  
    
  
    res.json(newReservation);
    console.log(reservations);
    console.log(waitlist);
  });


//START SERVER
// ====================================================================
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});