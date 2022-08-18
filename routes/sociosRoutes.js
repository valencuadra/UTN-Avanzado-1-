const { Router } = require('express');
const router = Router();
const { 
    loadSocios,
    addSocio
} = require('../controllers/sociosControllers')

router.get('/', loadSocios);
router.post('/', addSocio)

// router.post('/login', logHome);


module.exports = router;