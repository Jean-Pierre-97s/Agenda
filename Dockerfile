FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install
RUN npm run build

ENV APP_PORT=3000
ENV BCRYPT_ROUND=12

ENV DB_TYPE=postgres
ENV DB_HOST=192.168.21.43 
ENV DB_PORT=30972
ENV DB_USERNAME=admin
ENV DB_PASSWORD=dev
ENV DB_DATABASE=p_agenda

ENV AT_SECRET=at-secret
ENV RT_SECRET=rt-secret

EXPOSE 3000

CMD [ "npm", "run","start:prod" ]