import express from 'express';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import Routes from './routes.js';
import swaggerOptions from './swagger.js';


const app = express();
Routes(app);


const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors(
    {origin: '*'}
))

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello wordl");
   
})



app.listen(3000, () => console.log("Servidor rodando na porta ", 3000));

