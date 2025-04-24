console.time("Tempo de execução");

import express from 'express';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import Routes from './routes.js';
import swaggerOptions from './swagger.js';
import bodyParser from 'body-parser';
import bancodeDados from './bancodeDados.js';


const app = express();
Routes(app);

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors(
    {origin: '*'}
));


app.use(bodyParser.json());
app.use(bancodeDados)


const user = [
    {id:1, nome: "Igor", idade: 22},
    {id:2, nome: "Briza", idade: 19},
    {id:3, nome: "Tierre", idade: 26},
]

app.use(express.json());

app.get('/user', (req, res) => {
    res.json(user);
   
});


app.get('/user/:id', (req, res) => {
    const Usuarios = user.filter(value => value.id == req.params.id);

    if(Usuarios.length == 0){

        return res.status(404).send("Usuario não encontrado");

    }else{

        return res.status(201).json(Usuarios);
    }

   
});


app.post('/user', (req, res) => {

    const client = req.body
    user.push(client);
    res.json(client);
});



app.put("/user/:id", (req, res) => {
    const id = req.params.id;
    const { nome, idade } = req.body;

    let userClient = user.findIndex(user => user.id == id);

    userClient[0].nome = nome;
    userClient[0].idade = idade;
     
    res.json(userClient[0]);
    
});


app.delete('/user/:id', (req, res) => {

    const id = req.params.id;
    let userClient = user.findIndex(user => user.id != id);

    res.json(userClient);
    
});



app.listen(3000, () => console.log("Servidor rodando na porta ", 3000));
console.timeEnd("Tempo de execução");

