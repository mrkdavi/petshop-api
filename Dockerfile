FROM node:16-alpine as petshop
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]