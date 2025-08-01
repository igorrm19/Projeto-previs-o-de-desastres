import express from 'express';

const app = express();
app.use(express.json());

interface User {
  email: string;
  senha: string;
}


const user: User[] = [
  { email: 'igor@gmail.com', senha: '123' },
  { email: 'jane@gmail.com', senha: '456' }
]


app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  const userFound = user.find(u => u.email === email && u.senha === senha);

  if (userFound) {
    res.status(200).json({ message: 'Login bem-sucedido' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});


app.listen(3001, () => {
  console.log('server rodando na port 3001')
})