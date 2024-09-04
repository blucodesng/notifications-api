FROM node:20.17.0

WORKDIR /usr/app

COPY package*.json .

RUN npm install 

COPY . .

CMD ["node", "./src/app.js"]