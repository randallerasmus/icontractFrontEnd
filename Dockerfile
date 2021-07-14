FROM node:latest as node
WORKDIR /usr/src/app
COPY /web-ui-icontract-fe/package.json ./
RUN npm install --save core-js@^3
COPY . .
EXPOSE 8080
CMD ["node","server.js"]
