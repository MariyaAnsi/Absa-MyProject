FROM node:14.17.3-buster

WORKDIR /code

COPY package.json /code/package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","start"]