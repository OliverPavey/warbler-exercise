#!/bin/bash

# N.B. For older CPUs without AVX support try MONGO_DOCKER_TAG=3.4.4
MONGO_DOCKER_TAG=4.4.11

case $1 in

"start")
docker run -d --rm \
    --name DevMongoDB \
    -p 27017:27017 \
    -p 27018:27018 \
    -p 27019:27019 \
    mongo:$MONGO_DOCKER_TAG
;;

"stop")
docker stop DevMongoDB
;;

"logs")
docker logs --follow DevMongoDB 
;;

"bash")
docker exec -it DevMongoDB bash
;;

"mongo")
docker exec -it DevMongoDB mongo warbler
;;

*)
echo 'MongoDB server for development.'
echo '-------------------------------'
echo 'devMongoDB.sh start - Starts the MongoDB server in docker on localhost port 27017.'
echo 'devMongoDB.sh stop  - Stops and removes the MongoDB server.'
echo 'devMongoDB.sh logs  - Follow the logs for the MongoDB server.'
echo 'devMongoDB.sh bash  - Launch a bash prompt on the MongoDB server.'
echo 'devMongoDB.sh mongo - Launch a mongo shell on the MongoDB server, with the warbler db selected.'
;;

esac
