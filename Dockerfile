FROM node:14.17.3-buster

WORKDIR /home/mariya/vscodeproj/absa

COPY package.json /code/package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","start"]