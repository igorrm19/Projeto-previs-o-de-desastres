import express from 'express';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import Routes from './routes.js';


const app = express();
const port = 3000;
Routes(app);

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '1.0.0',
        info: {
            title: 'back-end',
            version: '1.0.0',
            description: 'api back-end',
        },
        servers: [
            {
                url: `http://localhost:${port}`
            }
        ]
    },
    apis: ['./routes/*.js'] 
}

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors(
    {origin: '*'}
))

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello wordl");
   
})


app.listen(port, () => console.log("Servidor rodando na porta ", port));