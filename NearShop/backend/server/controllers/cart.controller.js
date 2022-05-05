const Cart = require("../database-mongo/Cart.model.js");

var addCart = function (req, res) {
  var { user_id, listProduct, total, status } = req.body;
  Cart.insertMany({ user_id, listProduct, total, status })
    .then(() => {
      res.send("success");
    })
    .catch(() => {
      res.send("err");
    });
};
var addToCart = function (req, res) {
  var up = req.body;
  var id = req.params.id;
  Cart.updateOne({_id:id},{})
    .then(() => {
      res.send("update");
    })
    .catch(() => {
      res.send("err");
    });
};

let getCartByUserId = (req,res) =>{
  let {user_id} = req.params
  Cart.find({user_id}).then(cart =>{
    res.json(cart)
  }).catch(err=>res.send(err))
}

// let addToCart = ()

module.exports = { addCart, getCartByUserId };
