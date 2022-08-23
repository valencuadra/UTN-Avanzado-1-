const { Router } = require('express');
const router = Router();



const { 
    subscribeSocio,
    selectSocio,
    crearSocio
} = require('../controllers/subscribeController')




router.get('/', subscribeSocio); 
router.get('/', selectSocio);
router.post('/', crearSocio);



module.exports = router;
