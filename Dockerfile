FROM node:alpine

WORKDIR /usr/app

COPY . ./
RUN yarn global add sucrase sequelize-cli serve
RUN yarn
