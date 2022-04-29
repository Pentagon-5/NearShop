const Comment = require("../database-mongo/Comment.model.js");

var addComment = function (req, res) {
  var { description, product_id, user_id } = req.body;
  console.log(description);
  Comment.insertMany({ description, product_id, user_id })
    .then(() => {
      res.send("added");
    })
    .catch(() => {
      res.send("err");
    });
};

var deleteComment = function (req, res) {
  var id = req.params.id;
  Comment.findByIdAndRemove(id)
    .then(() => {
      res.send("deleted");
    })
    .catch(() => {
      res.send("error");
    });
};
var getCommentByProductId = function (req, res) {
  let { product_id } = req.params;
  Comment.find({ product_id })
    .then((comments) => {
      res.json(comments);
    })
}
var updateComment=function(req,res){
    var up=req.body 
    var id=req.params.id
    Comment.findByIdAndUpdate(id,up).then(()=>{
        res.send('update')
    }).catch(()=>{
        res.send('err')
    })
}
module.exports = {
     addComment,
     deleteComment,
     getCommentByProductId, 
     updateComment
    };