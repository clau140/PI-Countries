const express = require('express');
const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countriesRouter = require('./countries')
const activitiesRouter = require('./activities');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use(express.json());
router.use('/countries', countriesRouter);
router.use('/activities', activitiesRouter);

module.exports = router;
