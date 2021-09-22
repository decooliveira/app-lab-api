const express = require('express');
const laboratorioController = require('../controllers/laboratorioController');
const check = require('../middleware/check');
const router = express.Router();

router.post('/api/v1/laboratorios', laboratorioController.cadastrar);
router.get('/api/v1/laboratorios', laboratorioController.listarAtivos);
router.patch('/api/v1/laboratorios/:id', laboratorioController.atualizar);
router.delete('/api/v1/laboratorios/:id', laboratorioController.remover);

router.post('/api/v1/lote/laboratorios', check, laboratorioController.cadastrarLote);
router.patch('/api/v1/lote/laboratorios', check, laboratorioController.atualizarLote);
router.delete('/api/v1/lote/laboratorios', check, laboratorioController.removerLote);

module.exports = router;