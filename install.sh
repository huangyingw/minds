#!/bin/zsh
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd "$SCRIPTPATH"

./local/local install
#rm engine/settings.php ; docker-compose -f docker-compose.yml -f docker-compose.with-phpspec.yml run installer
