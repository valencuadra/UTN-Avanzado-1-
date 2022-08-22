
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send(`Buenas noches, bienvenido a nuestro club`)
});


router.get('/nosotros', (req, res) => {
    res.send(`Somos papafrito!`)
});


module.exports = router;



