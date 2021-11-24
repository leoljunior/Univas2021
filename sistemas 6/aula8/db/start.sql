create table customer(
    id serial primary key,
    cpf varchar(15) not null,
    nome varchar(100) not null,
    email varchar(100) not null
);

-- docker-compose up  *sobe o container
--docker ps -a *ve se tem container rodando
--docker exec -it ID /bin/bash *executa /bin/bash de forma interativa no container
--psql -U admin *conecta com user admin
--\c *mostra inde esta conectado
--\l mostra o bancos
--\dt *mostra tabelas
--\d+ nometabela *mostra estrutura da tabela
--exit *sai do banco
--docker-compose down *fecha o container

--npm i sequelize pg pg-hstore *instalar o sequelize para o postgres