const mongoose = require("mongoose");

const productSchema = mongoose.Schema({

  categoryId:{
    type:String,
    required:[true]

  },
  title: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  availability: {
    type: Number,
    required: [true, "Please Enter product availability"],
    
  }
  
});

module.exports = mongoose.model("Product", productSchema);
