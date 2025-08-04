create table users (
  id serial PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

insert into users (nome, email, senha) values
('João da Silva', 'joao@example.com', 'senha123'),
('Maria Oliveira', 'maria@example.com', 'senha456'),
('Pedro Santos', 'pedro@example.com', 'senha789');

select * from users;