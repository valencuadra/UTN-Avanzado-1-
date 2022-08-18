const { Router } = require('express');
const router = Router();
const { 
    loadHome,
} = require('../controllers/homeControllers')

router.get('/', loadHome);


// router.post('/login', logHome);


module.exports = router;