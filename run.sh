#!/bin/bash -
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd "$SCRIPTPATH"

#./local/local build
sysctl -w vm.max_map_count=262144
rm -fr /var/lib/docker/volumes/minds_cassandra-data/_data/*
./local/local install
./local/local up
# ./local/front-build
# ./local/ssr-build
# ./local/ssr-serve
