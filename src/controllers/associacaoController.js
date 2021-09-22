const Exame = require("../models/Exame");
const Laboratorio = require("../models/Laboratorio");

class AssociacaoController{


    async vincularLaboratorioExame(req, res, next) {
        try {
          
          const {laboratorioId, exameId} = req.body;
    
          const exame = await Exame.findOne({ _id:exameId, status: "ativo"});
          const laboratorio = await Laboratorio.findOne({ _id:laboratorioId, ativo: true});
          
          if(!exame || !laboratorio){
            return res.status(404).json({
              statusCode: 404,
              message: "Não é possível efetivar oa associação entre exame e laboratório",
              reason: "Laboratório ou exame informados não são válidos"
            });
          }
          const result = await new AssociacaoController().associar(laboratorioId, exameId);
    
          return res.status(200).send();
    
        } catch (e) {
          console.log(e);
          return res.status(400).json({
            statusCode: 400,
            message: "Não foi possível vincular este exame ao laboratório",
            reason: e.message,
          });
        }
      }
    
      async desvincularLaboratorioExame(req, res, next) {
        try {
          
          const {laboratorioId, exameId} = req.body;
    
          const exame = await Exame.find({ _id:exameId, status: "ativo"});
          const laboratorio = Laboratorio.find({ _id:laboratorioId, ativo: true});
    
          if(!exame || !laboratorio){
            return res.status(404).json({
              statusCode: 404,
              message: "Não é possível efetivar oa associação entre exame e laboratório",
              reason: "Laboratório ou exame informados não são válidos"
            });
          }
          const result = await new AssociacaoController().desvincular(laboratorioId, exameId);
    
          return res.status(200).send();
    
        } catch (e) {
          
          return res.status(400).json({
            statusCode: 400,
            message: "Não foi possível vincular este exame ao laboratório",
            reason: e.message,
          });
        }
      }

      async associar(laboratorioId, exameId){
    
        const session = await Laboratorio.startSession();
          
          try{
            //início da transação
            session.startTransaction();
            const laboratorioContemExame = await Laboratorio.findByIdAndUpdate(laboratorioId,
            
              { $push: { exames: exameId } },
              { new: true, useFindAndModify: false }
            );
  
            const exameContemLaboratorio = await Exame.findByIdAndUpdate(exameId,
              { $push: { laboratorios: laboratorioId} },
              { new: true, useFindAndModify: false }
            )
            
            //fim da transação
            await session.commitTransaction();
            session.endSession();
            return true;
    
          }catch(e){
          
            await session.abortTransaction();
            session.endSession();
            throw e; 
          }
      }

      async desvincular(laboratorioId, exameId){
    
        const session = await Laboratorio.startSession();
        const laboratorios = [];
        const exames = [];
        laboratorios.push(laboratorioId);
        exames.push(exameId)
          try{
            //início da transação
            session.startTransaction();
            const laboratorioContemExame = await Laboratorio.findByIdAndUpdate(laboratorioId,
            
              { $pullAll: { exames: exames } },
              { new: true, useFindAndModify: false }
            );
  
            const exameContemLaboratorio = await Exame.findByIdAndUpdate(exameId,
              { $pullAll: { laboratorios: laboratorios} },
              { new: true, useFindAndModify: false }
            )
            
            //fim da transação
            await session.commitTransaction();
            session.endSession();
            return true;
    
          }catch(e){
          
            await session.abortTransaction();
            session.endSession();
            throw e; 
          }
      }
}

module.exports = new AssociacaoController();