// REST API Example
const express = require("express");
const https = require('https');
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("Server is running"));
app.route("/directory")
.get(function(req,res){
  res.send("<h1>Your in Directory</h1>");
})
app.route("/directory/:name")
.get(function(req,res){
  const name = req.params.name;
  url="https://api.genderize.io/?name="+name
  https.get(url, function(response){
  response.on('data',function(data){
    const pre=JSON.parse(data).gender;
    res.send("Your Name "+name+" is predicted as "+pre+"gender");//gender api is used to predict gender based on name
  })
})
});
app.listen(3000,function(){
  console.log("server is running");
})
