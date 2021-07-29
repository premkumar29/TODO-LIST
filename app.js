const express = require("express")
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js");           //to require a module from date.js to app.js **in this file is assigned to todolist not views folder

console.log(date);                                   //we are printing function from date.js file.
const app = express();     
let items = ["buy food", "cook food", "eat food"]; 
let workItems=[];                               //creating array to store more list of items
app.set('view engine', 'ejs');    

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));          //this is used to style our webpage we are connecting styles.css to js.
                                          

app.get("/", function(req, res) {  
   
let day = date.getDate();                       //will output the result from date.js getDay or getDate.
    res.render("list", { listTitle: day, newListItems: items});          
    // newitem is defined here because variable should not be declared separately
    // list is our ejs file name 
    // all the ejs tags used in html should be used in render function so that it will render back to html
});

app.post("/",function(req,res){
    let item = req.body.newItem;           // user input will get added in the list in newitem variable.
    if (req.body.list === "Work List"){     // camelcasing is veryimportant work is not same as Work
        workItems.push(item);           //this method will add input entered in work page like same as newitem page
        res.redirect("/work");           //this will render to app.get work
    } else {
        items.push(item);                 // data stored in a item variable will get pushed to a items variable created at the top
        res.redirect("/");                          //will redirect our post request to our root that is html file  and app.get

    }
    
});

app.get("/work", function(req, res){
    res.render("list", {listTitle:"Work List",newListItems:workItems});
})
// app.get is to create a new page called worklist same like newitem list

app.post("/work",function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
})

app.get("/about",function(req, res){
    res.render("about");                 //this will display what i in the about page
})
// here we are storing the items entered in a variable called workitems declared at the top and the we are redirecting to app.get and then which will render to html in ejs.
 app.listen(3005, function () {
     console.log("server started at 3005");
 });


//  long means to use full names of weekdays and months.