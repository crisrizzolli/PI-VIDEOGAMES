const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genresRoute = require("./genresRoute");
const platformsRoute = require("./platformsRoute");
const videogamesRoute = require("./videogamesRoute");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/genres", genresRoute);
router.use("/platforms", platformsRoute);
router.use("/videogames", videogamesRoute);

module.exports = router;
