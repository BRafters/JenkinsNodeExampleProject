FROM node:17.8.0-alpine3.15
WORKDIR /app
COPY . .
run npm i
EXPOSE 3OOO
ENTRYPOINT [ "npm", "run", "dev" ]