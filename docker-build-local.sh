#!/bin/bash

docker build --file Dockerfile.dev -t personal-portfolio-local .
docker run -it -p 3000:3000 personal-portfolio-local
