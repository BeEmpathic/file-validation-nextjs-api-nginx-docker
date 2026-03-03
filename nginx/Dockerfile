FROM nginx:alpine3.22 AS base

WORKDIR /nginx

COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

