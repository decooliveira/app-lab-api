const mongoose = require('mongoose');

const Tipo = Object.freeze({
    ANALISE: 'Análise Clínica',
    IMAGEM: 'Imagem'
    
});

const Status = Object.freeze({
    ATIVO: 'ativo',
    INATIVO: 'inativo'
    
});

const ExameSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
        trim: true
        
    },
    tipo: {
        type: String,
        default: Tipo.ANALISE,
        enum: Object.values(Tipo)
    },
    status: {
        type: String,
        required: true,
        default: Status.ATIVO,
        enum: Object.values(Status)
    },
    laboratorios:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Laboratorio'
        }
    ]
    
},
{
    timestamps: true
});

const Exame = mongoose.model('Exame', ExameSchema);
module.exports = Exame;

