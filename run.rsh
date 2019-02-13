#!/bin/bash -
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd "$SCRIPTPATH"

docker-compose build
docker-compose up -d nginx
rm -fr .data/ ; \
    rm engine/settings.php ; \
    docker-compose up installer
