FROM node:19.3.0 AS base

WORKDIR /bot
COPY package*.json ./

FROM base AS dev
RUN npm install
COPY . .
CMD [ "npm", "run", "dev" ]

FROM base as prod
RUN npm install --production
COPY . .
RUN npm i -g @nestjs/cli
RUN npm run build
CMD [ "npm", "run", "start" ]