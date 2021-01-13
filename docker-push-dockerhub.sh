#!/bin/bash

docker ps
docker build --file Dockerfile.dev -t keiko15678/ire:app .
docker image ls
docker push keiko15678/ire:app