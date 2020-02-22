FROM node:12.16.1-alpine3.9

WORKDIR /app

ADD src \
  static \
  .babelrc \
  package.json \
  webpack.config.js \
  /app/


RUN npm install

CMD ["npm", "start"]
