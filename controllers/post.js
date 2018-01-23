const express = require('express');
const router = express();
const Post = require('../models/blog');



router.get('/:id/', (req, res) => {
    console.log(req.params);
    Post
        .showPost(req.params.id)
        .then(data => {
            res.render('posts/show', {data} );
        }).catch(err=>console.log(err));
});



module.exports = router;