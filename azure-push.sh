#!/bin/bash

# $1 = azure username
# $2 = azure password
# $3 = acr repo name
# $4 = acr repo password

DOCKER_IMAGE_NAME=personal-portfolio

# push to ACR
az login --username $1 --password $2
az acr login --name $3 --username $3 --password $4
docker build --file Dockerfile.azure -t $DOCKER_IMAGE_NAME .

echo ⭐ Image built locally...

docker tag personal-portfolio $3.azurecr.io/$DOCKER_IMAGE_NAME/frontend
docker push $3.azurecr.io/$DOCKER_IMAGE_NAME/frontend

echo 🤘 Deploy Azure App Service complete.
