FROM node:12.16.1-alpine3.9

WORKDIR /app

RUN ls
RUN pwd

ADD src \
  static \
  .babelrc \
  package.json \
  webpack.config.js \
  /app/


RUN npm install

CMD ["npm", "start"]
