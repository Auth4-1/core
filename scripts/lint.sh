#/bin/bash
cd services
cd messaging-service && npm run lint
cd ..
cd app-service && npm run lint
cd ..
cd video-service && npm run lint
cd ../..
cd app-ui && npm run lint