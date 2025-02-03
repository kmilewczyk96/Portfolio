FROM node:20-alpine3.21 AS build
LABEL maintainer="kmilewczyk"

COPY ./front /front
WORKDIR /front

RUN npm install
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=build /front/dist /usr/share/nginx/html
COPY nginx/prod/nginx.conf /etc/nginx/conf.d/default.conf
