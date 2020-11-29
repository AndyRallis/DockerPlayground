# make the container
FROM alpine

# install redis
RUN apk add --update gcc
RUN apk add --update redis

# run redis
CMD ["redis-server"]
