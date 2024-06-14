ARG NODE_VERSION=18.14.2
ARG PNPM_VERSION=9.0.4

FROM node:${NODE_VERSION}-alpine as build

WORKDIR /app
COPY . /app

RUN apk add --update python3 make g++\
   && npm install -g pnpm@${PNPM_VERSION} \
   && rm -rf /var/cache/apk/*


RUN pnpm install
RUN pnpm run build

FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /app/dist /var/www/html/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]