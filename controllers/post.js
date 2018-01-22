const express = require('express');
const router = express();
const Post = require('../models/blog.js');



// router.get('/posts/:id', (req, res) => {
// 	console.log("HELLO FROM POST CONTROLLER");
// 	let result = {};
// 	Post
// 	.showPost(req.params.id)
// 	.then(post )
// 	res.render('posts', {id: id});
// });




module.exports = router;