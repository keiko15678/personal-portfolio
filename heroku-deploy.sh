#!/bin/bash

#heroku login
docker ps
heroku container:login
docker build -t app .
docker image ls
# docker run -it -p 3000:3000 app
heroku container:push web
heroku container:release web