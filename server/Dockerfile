FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

EXPOSE 4000:4000

CMD ["npm", "run", "start"]