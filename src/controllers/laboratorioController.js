const Exame = require("../models/Exame");
const Laboratorio = require("../models/Laboratorio");

class LaboratorioController {

  async cadastrar(req, res, next) {
    try {
      const laboratorio = await Laboratorio(req.body).save();
      return res.json(laboratorio);
    } catch (e) {
      return res.status(400).json({
        statusCode: 400,
        message: "Não foi possível cadastrar o laboratório",
        reason: e.message,
      });
    }
  }

  async atualizar(req, res, next) {
    try {
      const laboratorio = await Laboratorio.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

      if (!laboratorio) {
        return res.status(404).send();
      }

      res.send(laboratorio);
    } catch (e) {
      return res.status(400).json({
        statusCode: 400,
        message: "Não foi possível atualizar os dados do laboratório",
        reason: e.message,
      });
    }
  }

  async listarAtivos(req, res, next) {
    try {
      const laboratorios = await Laboratorio.find({ ativo: true }).populate("exames", "-exames -__v -createdAt -updatedAt");;
      return res.json({ laboratorios });
    } catch (e) {
      return res.status(400).json({
        statusCode: 400,
        message: "Não foi possível realizar a busca",
        reason: e.message,
      });
    }
  }

  async remover(req, res, next) {
    try {
      const laboratorio = req.body;
      laboratorio.ativo = false;
      const result = await Laboratorio.findByIdAndUpdate(
        req.params.id,
        laboratorio,
        {
          new: true,
        }
      );

      if (!result) {
        return res.status(404).send();
      }

      res.status(200).send();
    } catch (e) {
      return res.status(400).json({
        statusCode: 400,
        message: "Não foi possível remover o laboratório",
        reason: e.message,
      });
    }
  }

  //Lotes

  async cadastrarLote(req, res, next) {
    
    try {
      
      const laboratorios = req.body;

      laboratorios.map(async (e) => {
        await Laboratorio(e).save();
      });

      return res.status(200).send();
    } catch (e) {
      return res.status(400).json({
        statusCode: 400,
        message: "Não foi possível cadastrar o laboratório",
        reason: e.message,
      });
    }
  }

  async atualizarLote(req, res, next) {
    try {

      const laboratorios = await req.body;

      laboratorios.map(async (e) => {
        const laboratorio = await Laboratorio.findByIdAndUpdate(e._id, e, {
          new: true,
          runValidators: true,
        });

        if (!laboratorio) {
          return res.status(404).send();
        }
      });

      return res.status(200).send();
    } catch (e) {
      return res.status(400).json({
        statusCode: 400,
        message: "Não foi possível atualizar os dados do laboratório",
        reason: e.message,
      });
    }
  }

  async removerLote(req, res, next) {
    try {
      const laboratorios = req.body;
      
      if(laboratorios.length >TAMANHO_MAXIMO_LOTE || laboratorios.length === undefined){
        return res.status(400).json({
          statusCode: 400,
          message: "Não foi possível remover o lote de exames",
          reason: "O lote está vazio ou excedeu o número máximo de items: "+ TAMANHO_MAXIMO_LOTE
        });
      }

      laboratorios.map(async (e) => {
        const laboratorio = {};
        laboratorio.ativo = false;

        const result = await Laboratorio.findByIdAndUpdate(e, laboratorio, {
          new: true,
        });

        if (!result) {
          return res.status(404).send();
        }
      });

      res.status(200).send();
    } catch (e) {
      return res.status(400).json({
        statusCode: 400,
        message: "Não foi possível remover o laboratório",
        reason: e.message,
      });
    }
  }
}

module.exports = new LaboratorioController();
