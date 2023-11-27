# API Stop 🚦

Bem-vindo ao repositório Backend do projeto Stop

## Inicialização 🚀

Para começar, clone este repositório em sua máquina local:

```bash
git clone https://github.com/btules/api-stop-node.git
```

## Configurações ⚙️

Em seguida, navegue até o diretório do projeto e execute o comando abaixo para instalar as dependências:

```bash
npm install
```

### Sequelize 🛠️
Será necesserário instalar a dependência do [Sequelize](https://sequelize.org/docs/v6/).

```bash
npm install --save sequelize
```

### MySQL Driver 🗃️
Instale o driver do MySQL usando o comando abaixo:
```bash
npm install --save mysql2
```

## Express e Socket.io Drivers
```bach
npm install express socket.io
```

## Executando o projeto 🔥
Tudo certo até aqui? Chegou a hora de executar o projeto. Rode o comando a seguir:

```bash
git clone https://github.com/mysql/mysql-docker.git mysql-docker

```Subistituir nesse arquivo mysql-docker/mysql-cluster/8.0/Dockerfile
RUN rpm -U https://repo.mysql.com/mysql-cluster-community-minimal-release-el8.rpm \
  && rpm -U https://repo.mysql.com/mysql80-community-release-el8.rpm


docker network create stop-api-net

docker build -t api-stop-node .

docker build -t mysql-docker/mysql-cluster mysql-docker/mysql-cluster/8.0

docker-compose up --build
```
