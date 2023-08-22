FROM node:lts-alpine

WORKDIR /app

COPY . /app

RUN yarn --cwd /app install

EXPOSE 8084

CMD ["yarn", "dev"]