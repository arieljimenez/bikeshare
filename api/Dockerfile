FROM node:12.16.1-alpine3.9

WORKDIR /app

ADD src \
  package.json \
  /app/


RUN npm install

CMD ["npm", "start"]
