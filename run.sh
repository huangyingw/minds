#!/bin/bash -
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd "$SCRIPTPATH"

#./local/local install
./local/local up
./local/front-build &
./local/ssr-build &
./local/ssr-serve &
