const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require("express-ejs-layouts");

const port = 8080 

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(expressLayouts);



app.listen(port, ()=>{
    console.log(`server is listening to port: ${port}`);
});