const { Router } = require('express');
const router = Router();
const { 
    loadHome,
} = require('../controllers/homeController')

router.get('/', loadHome);


// router.post('/login', logHome);


module.exports = router;