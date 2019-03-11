#!/usr/bin/env bash

# Clone the main repo
git pull

# Setup the other repos
git clone -b dev git@github.com:huangyingw/front.git  front
git clone -b dev git@github.com:huangyingw/engine.git  engine
