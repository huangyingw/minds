#!/bin/zsh
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd "$SCRIPTPATH"

docker-compose down
docker-compose build
rm engine/settings.php ; docker-compose run installer
