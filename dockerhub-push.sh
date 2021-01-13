#!/bin/bash

DOCKER_APP_REPO_ADDR=keiko15678/ire:app
DOCKER_FILE_PATH=Dockerfile

./docker-build-push.sh $DOCKER_APP_REPO_ADDR $DOCKER_FILE_PATH
echo Image pushed to Dockerhub: $DOCKER_APP_REPO_ADDR
