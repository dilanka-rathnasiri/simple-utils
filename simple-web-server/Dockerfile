FROM node:alpine

WORKDIR /app

COPY package*.json /app/
COPY src /app/src

RUN npm i

EXPOSE ${SERVER_PORT:-3000}

CMD [ "node", "." ]