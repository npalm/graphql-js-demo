FROM node:8-jessie

ADD . /app

WORKDIR /app

RUN npm install -g yarn && yarn

CMD yarn start
