FROM mhart/alpine-node:8
RUN apk --no-cache add curl
ADD . /server
ENTRYPOINT node /server/index.js
EXPOSE 8081
