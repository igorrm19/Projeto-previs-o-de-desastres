import express from 'express';

const app = express();

app.get('/login', (req, res) => {  
  res.send('Auth Service is healthy');
});

app.listen(3001, () => {
  console.log('Auth Service is running on port 3001');
});