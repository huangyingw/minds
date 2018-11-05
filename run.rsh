#!/bin/bash -
SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd "$SCRIPTPATH"

#service docker start
#docker-compose exec cassandra nodetool enablethrift
#    && docker-compose exec cassandra nodetool enablethrift \
    #    && rm engine/settings.php
#docker-compose exec cassandra nodetool enablethrift
rm engine/settings.php \
    ; docker-compose up installer
#&& docker-compose up front-build
