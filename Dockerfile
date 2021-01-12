FROM node:14

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .

ENV NUXT_ENV_TIMEOUT_LIMIT=15000

RUN npm install && npm run build

EXPOSE 3000

CMD [ "npm", "start" ]