#/bin/bash
# install dev runners
npm install -g foreman
npm install -g nodemon

# install db
docker pull postgres
mkdir -p $HOME/docker/volumes/postgres

# install project dependicies
cd services
cd messaging-service && npm i
cd ..
cd app-service && npm i
cd ..
cd video-service && npm i
cd ../..
cd app-ui && npm i 