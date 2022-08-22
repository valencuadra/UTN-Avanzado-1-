
const { Router } = require('express');
const router = Router();

router.get('./homeRouter.js', (req, res) => {
    res.send(`Buenas noches, bienvenido a nuestro club`)
});


router.get('./subscribeRouter.js', (req, res) => {
    res.send(`Somos papafrito!`)
});


module.exports = router;



