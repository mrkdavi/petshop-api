FROM node:16.14 as petshop
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]