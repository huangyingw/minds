#!/bin/zsh
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd "$SCRIPTPATH"

sysctl -w vm.max_map_count=262144
docker-compose -f docker-compose.yml -f docker-compose.with-phpspec.yml build
#docker-compose -f docker-compose.yml -f docker-compose.with-phpspec.yml up elasticsearch
#docker-compose -f docker-compose.yml build minds_php
#rm engine/settings.php ; docker-compose -f docker-compose.yml -f docker-compose.with-phpspec.yml run installer
#docker-compose -f docker-compose.yml up elasticsearch
#docker-compose up elasticsearch
#docker-compose -f docker-compose.yml -f docker-compose.with-phpspec.yml run elasticsearch-provisioner

# https://developers.minds.com/docs/getting-started/installation/
# npm install -g gulp
# ./local/local install --no-front
# ./local/local up
# ./local/front-build
# ./local/ssr-build
# ./local/ssr-serve
# ./front/install.sh
# ./front/serve.sh
# ./local/front-build
