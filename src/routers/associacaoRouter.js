const express = require('express');
const associacaoController = require('../controllers/associacaoController');
const router = express.Router();

router.post('/api/v1/associacoes', associacaoController.vincularLaboratorioExame);
router.delete('/api/v1/associacoes', associacaoController.desvincularLaboratorioExame);


module.exports = router;