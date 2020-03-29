#!/bin/zsh
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd "$SCRIPTPATH"

docker-compose -f docker-compose.yml -f docker-compose.with-phpspec.yml build --no-cache
#./local/local install
