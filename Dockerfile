FROM node:12-alpine



WORKDIR /microservices/projects/completeestate/backend

COPY package*.json ./


RUN npm install

COPY --chown=node:node . .

EXPOSE 6050

CMD [ "node", "server.js" ]