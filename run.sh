#!/bin/bash -
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd "$SCRIPTPATH"

sysctl -w vm.max_map_count=262144
# ./local/local build &
docker volume prune -f
./local/local install
./local/local up

# ./run_front.sh
