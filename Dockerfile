FROM node:lts-bookworm-slim

WORKDIR /App

COPY . .

EXPOSE 5317

RUN apt-get -y update
RUN apt-get -y install git
RUN yarn install

CMD ["yarn", "dev"]