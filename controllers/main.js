const express = require('express');
const router = express();
// const axios = require('axios');

router.get('/work', (req, res) => {
	console.log('PAGE LOADING!');
  res.render('work');
})



module.exports = router;