const express = require('express');
const app = express();
const path = require('path');

const port = 8080 ;

const mongoose = require('mongoose');

main().then(()=>{
        console.log("Connection Successful");
    }).catch((err) => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ECOMProducts');
}

// let categories = require("./model/category.js");
// let cate = new categories({
//   name: "Laptop"
// });
// cate.save();


app.use(express.urlencoded({extended: true}));
app.use(express.json());



const routes = require('./server/router/route.js');
app.use('/', routes);

app.listen(port, ()=>{
    console.log(`server is listening to port: ${port}`);
});











// const initdata = require("./initData.js");

// const initDB = async ()=>{
//     await products.deleteMany({});
//     await products.insertMany(initdata.data);
//     console.log("Data was initialized!");
// }

// initDB();