FROM node:18.12.1


WORKDIR /usr/


COPY package*.json ./


RUN npm install


COPY . .


EXPOSE 3000


CMD [ "node", "./src/server.js" ]