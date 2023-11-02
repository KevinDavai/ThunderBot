FROM node:19.3.0 AS base

WORKDIR /dashboard
COPY package*.json ./
COPY rtl.config.js ./


FROM base AS dev
RUN npm install
COPY . .
CMD [ "npm", "start" ]

FROM base as prod
RUN npm install --production
COPY . .
RUN npm i -g @nestjs/cli
RUN npm run build
CMD [ "npm", "run", "build" ]