const db = require('./setup.js');

function allPosts(){
	const queryPromise = db.manyOrNone("SELECT * FROM blog_posts");
	return queryPromise;
}

function showPost(id) {
 return db.query("SELECT * FROM blog_posts WHERE id = $1", [id])
}


module.exports = { allPosts, showPost };