#!/bin/bash -
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd "$SCRIPTPATH"

rm engine/settings.php
docker-compose down
rm -rf .data/
docker volume prune
docker-compose build
docker-compose up -d nginx
docker-compose up installer
docker-compose up front-build
