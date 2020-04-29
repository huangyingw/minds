#!/bin/zsh
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd "$SCRIPTPATH"

rm engine/settings.php
docker-compose down
docker-compose build minds_php \
    && docker-compose build installer \
    && docker-compose run installer
