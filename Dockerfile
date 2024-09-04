FROM node:20.17.0

WORKDIR /usr/app

COPY package*.json .

RUN npm install 

EXPOSE 9100

COPY . .

CMD ["node", "./src/app.js"]