#/bin/bash
npm update -g foreman
npm update -g nodemon
cd services
cd messaging-service && npm i
cd ..
cd app-service && npm i
cd ..
cd video-service && npm i
cd ../..
cd app-ui && npm i 