
const Category = require('../model/category');
const products = require('../model/product');



exports.categories = async (req,res)=>{
    try {
        const categories = await Category.find({});
        // const product = await products.find({})

       res.send(categories);
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }
}
exports.products = async (req,res)=>{
    try {
        let categoryByName = req.params.categoryName;
        let n = req.query.top;
        let categories = await products.find({"category": categoryByName}).limit(n);
        
       
        res.send(categories);
    }catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }
}