const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var listItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    var today = new Date();
    var options = {
        weekday: 'long',
        month: 'long',
        day:'numeric'
    }
    var date_i = today.toLocaleDateString("en-US", options);
    res.render('list', {listTitle: date_i, list_items: listItems});
});

app.post("/", function(req, res){
    var item = req.body.inp;
    listItems.push(item);
    res.redirect("/");
    

});

app.listen(3000, function(){
    console.log("Server is running on 3000");
});