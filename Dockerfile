FROM node:18.12.1


WORKDIR /app


COPY package*.json ./

RUN npm install


COPY . /app


EXPOSE 3000


CMD [ "node", "./src/server.js" ]