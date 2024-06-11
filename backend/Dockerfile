FROM node:20.12.0-alpine

ARG NODE_ENV

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

CMD [ "yarn", "start:dev" ]