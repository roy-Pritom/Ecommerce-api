const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const Category=require("../models/category.js");
const ErrorHandler = require("../utils/errorhander");


exports.createCategory = catchAsyncErrors(async(req,res,next)=>{
  
        const newCategory=new Category(req.body)
        try{
        const savedCity=await newCategory.save();
        res.status(200).json(savedCity)
        }
        catch(err){
        res.status(500).json(err)
        }
});

exports.getAllCategory = catchAsyncErrors(async(req,res,next)=>{
   

    try{
        const allCategory=await Category.find()
          res.status(200).json(allCategory)
          }
          catch(err){
          res.status(500).json(err)
      
      
          }
})