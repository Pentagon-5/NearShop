const mongoose = require("mongoose");
const db = require("./index.js");
const CartSchema = new mongoose.Schema({
    user_id: String ,
    listProduct: {type:Array, default:[]},
    total: Number,
    status: String,
    
  });
  
  const Cart = mongoose.model("Cart", CartSchema);
  
  module.exports = Cart;