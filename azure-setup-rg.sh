#!/bin/bash

# $1 = region
# $2 = name

az group create --location $1 --name $2 --subscription $3 --yes