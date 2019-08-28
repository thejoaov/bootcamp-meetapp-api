FROM node:10.16.3-alpine

WORKDIR /usr/app

COPY . ./
RUN yarn
