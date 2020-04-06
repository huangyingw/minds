#!/bin/zsh
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd "$SCRIPTPATH"

cp -fv ./etc/sysctl.conf /etc/sysctl.conf 
./local/local install
#docker-compose -f docker-compose.yml -f docker-compose.with-phpspec.yml run elasticsearch-provisioner
