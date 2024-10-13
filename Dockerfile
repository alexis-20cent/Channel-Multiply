FROM node:20.18.0-alpine3.19

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

EXPOSE 4173
EXPOSE 5173
EXPOSE 6005
EXPOSE 6008
