app-api: PORT=$APP_API_PORT nodemon services/app-service/index.js
messaging-api: PORT=$MESSAGES_API_PORT nodemon services/messaging-service/index.js
video-api: PORT=$VIDEO_PORT nodemon services/video-service/index.js
app-ui: cd app-ui && npm start
postgres: docker run --rm  -e POSTGRES_PASSWORD=$DATA_BASE_PASSWORD -d -p $DATA_BASE_PORT:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data  postgres