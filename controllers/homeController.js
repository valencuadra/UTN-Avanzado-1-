
const bienvenidaHome = (req, res) => {
    res.send(`Buenas noches, bienvenido al Home`)
}


const quienesomosHome = (req, res) => {
    res.send(`este es el Home`)
}


const loginHome = (req, res) => {

    const {loginUsuario, loginPassword } = req.body;

    console.log(`Los socios son ${loginUsuario} y tu pass es ${loginPassword}`);

    res.send(`Tus datos han sido guardados`);
}

module.exports = {
    bienvenidaHome,
    quienesomosHome,
    loginHome
}