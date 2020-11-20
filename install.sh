#!/bin/zsh
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd "$SCRIPTPATH"

sysctl -w vm.max_map_count=262144
#docker-compose -f docker-compose.yml build minds_php
#./local/local install --no-front
#rm engine/settings.php ; docker-compose -f docker-compose.yml -f docker-compose.with-phpspec.yml run installer
docker-compose -f docker-compose.yml -f docker-compose.with-phpspec.yml run elasticsearch-provisioner
