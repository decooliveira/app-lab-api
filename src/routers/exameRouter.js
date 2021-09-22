const express = require('express');
const exameController = require('../controllers/exameController');
const router = express.Router();

router.post('/api/v1/exames', exameController.cadastrar);
router.get('/api/v1/exames', exameController.listarAtivos);
router.get('/api/v1/exames/:nome', exameController.buscarPorNome);
router.patch('/api/v1/exames/:id', exameController.atualizar);
router.delete('/api/v1/exames/:id', exameController.remover);

//lotes
router.post('/api/v1/lote/exames', exameController.cadastrarLote);
router.patch('/api/v1/lote/exames', exameController.atualizarLote);
router.delete('/api/v1/lote/exames', exameController.removerLote);

module.exports = router;