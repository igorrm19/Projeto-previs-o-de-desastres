import express from 'express';

const app = express();
app.use(express.json());

const dados: any[] = [];  

app.get('/login', (req, res) => {  
  res.send('Auth Service is healthy');
});

app.post("/login", (req, res) => {
  const body = req.body;

  dados.push(body);
  res.status(201).send({ message: 'Login successful', data: body });
  console.log(body);
})

app.listen(3001, () => {
  console.log('Auth Service is running on port 3001');
});