FROM node:13.8.0-alpine3.11

RUN npm install -g http-server

COPY storybook-static /web

COPY start-http-server.sh /
WORKDIR /

CMD [ "/start-http-server.sh" ]


