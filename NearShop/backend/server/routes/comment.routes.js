const router = require('express').Router();
const commentController = require("../controllers/comment.controller");

router.post('/addComment',commentController.addComment)
router.delete('/deleteComment/:id',commentController.deleteComment)
router.get('/:product_id',commentController.getCommentByProductId)
router.put('/updateComment/:id',commentController.updateComment)
module.exports = router;