const Exame = require("../models/Exame");

class ExameController {
  async cadastrar(req, res, next) {
    try {
      const exame = await Exame(req.body).save();
      return res.json(exame);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        statusCode: 400,
        message: "Não foi possível cadastrar o exame",
        reason: e.message,
      });
    }
  }

  async atualizar(req, res, next) {
    try {
      const exame = await Exame.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!exame) {
        return res.status(404).send();
      }

      res.send(exame);
    } catch (e) {
      return res.status(400).json({
        statusCode: 400,
        message: "Não foi possível atualizar o exame",
        reason: e.message,
      });
    }
  }

  async buscarPorNome(req, res, next) {
    try {
      const nomeExame = req.params.nome;
      const exames = await Exame.find({
        status: "ativo",
        nome: nomeExame,
      }).populate("laboratorios", "-exames -__v -createdAt -updatedAt");
      return res.send(exames);
    } catch (e) {
      return res.status(400).json({
        statusCode: 400,
        message: "Não foi possível realizar a busca",
        reason: e.message,
      });
    }
  }

  async listarAtivos(req, res, next) {
    try {
      const exames = await Exame.find({ status: "ativo" });
      return res.json({ exames });
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
      const exame = {};
      exame.status = "inativo";
      const result = await Exame.findByIdAndUpdate(req.params.id, exame, {
        new: true,
      });

      if (!result) {
        return res.status(404).send();
      }

      res.status(200).send();
    } catch (e) {
      return res.status(400).json({
        statusCode: 400,
        message: "Não foi possível remover o exame",
        reason: e.message,
      });
    }
  }

  //Lotes
  async cadastrarLote(req, res, next) {
    try {
      
      const exames = await req.body;
      exames.map(async (e,i) => {
        await Exame(e).save();
      });

      return res.status(200).send();

    } catch (e) {
      
      return res.status(400).json({
        statusCode: 400,
        message: "Não foi possível cadastrar o lote de exames",
        reason: e.message,
      });
    }
  }

  async atualizarLote(req, res, next) {
    try {
      const exames = await req.body;
      
      exames.map(async (e,i) => {
        
        const exame = await Exame.findByIdAndUpdate(e._id, e, {
          new: true,
          runValidators: true,
        });

      if (!exame) {
        return res.status(404).send();
      }
        
      });
      return res.status(200).send();

    } catch (e) {
      return res.status(400).json({
        statusCode: 400,
        message: "Não foi possível atualizar o exame",
        reason: e.message,
      });
    }
  }

  async removerLote(req, res, next) {

    try {
  
      const items = await req.body;
      items.map(async (e) => {
       
        const exame = await Exame.findByIdAndUpdate(e, {status:'inativo'}, {
          new: true,
        });

      if (!exame) {
        return res.status(404).send();
      }
        
      });
      return res.status(200).send();

    } catch (e) {
      return res.status(400).json({
        statusCode: 400,
        message: "Não foi possível remover o exame",
        reason: e.message,
      });
    }
  
  }

}



module.exports = new ExameController();
