const http = require('http');
const express = require('express');
const cors = require('cors');

require('./db/mongoose');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const env = process.env.ENV;

app.use(express.json());
app.use(cors());

if (env !=='PROD') {
    const swaggerUi = require('swagger-ui-express');
    const swaggerDocument = require('../swagger.js');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}


const laboratorioRouter = require('./routers/laboratorioRouter');
const exameRouter = require('./routers/exameRouter');
const associacaoRouter = require('./routers/associacaoRouter');

app.use(laboratorioRouter);
app.use(exameRouter);
app.use(associacaoRouter);


server.listen(port, () => {
    console.log(`server started up on port ${port}`);
});