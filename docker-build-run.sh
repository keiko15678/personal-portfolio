#!/bin/bash

# $1 = Dockerfile location

docker build --file $1 -t personal-portfolio-local .
docker run -it -p 3000:3000 personal-portfolio-local
