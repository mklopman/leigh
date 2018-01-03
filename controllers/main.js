const express = require('express');
const router = express();
// const axios = require('axios');

router.get('/work', (req, res) => {
	console.log('PAGE LOADING!');
  res.render('work');
})

router.get('/about', (req, res) => {
	console.log('PAGE LOADING!');
  res.render('about');
})



module.exports = router;