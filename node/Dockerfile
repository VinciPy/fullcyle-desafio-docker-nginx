FROM node:alpine

WORKDIR /var/www/app

COPY ./docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["sh", "/docker-entrypoint.sh" ]
