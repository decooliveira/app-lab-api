const mongoose = require("mongoose");
const Exame = require("./Exame");

const LaboratorioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  ativo: {
    type: Boolean,
    default: true,
  },
  exames:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Exame'
    }
  ]
}, 
{
    timestamps: true
});

const Laboratorio = mongoose.model("Laboratorio", LaboratorioSchema);
module.exports = Laboratorio;
