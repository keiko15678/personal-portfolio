#!/bin/bash

heroku login
docker ps
heroku container:login
# docker build -t app .
# docker image ls
./docker-push-dockerhub.sh
docker tag keiko15678/ire:app registry.heroku.com/personal-portfolio-irene/web
docker push registry.heroku.com/personal-portfolio-irene/web
