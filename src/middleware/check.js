const TAMANHO_MAXIMO_LOTE = process.env.TAMANHO_MAXIMO_LOTE || 10;

const check = async (req, res, next) => {

    try {
        console.log(req.path +' '+req.method);

        const items = await req.body;

        if(items.length >TAMANHO_MAXIMO_LOTE || items.length === undefined){
            return res.status(400).json({
                statusCode: 400,
                message: "Não foi possível processar o lote",
                reason: "O lote está vazio ou excedeu o número máximo de items: "+ TAMANHO_MAXIMO_LOTE
            });
          }

        next();

    } catch (e) {
        console.log(e);
        res.status(400).json({ message: 'Houve uma falha. Tente mais tarde!' });
    }
}

module.exports = check;