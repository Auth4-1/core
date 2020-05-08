FROM node:10.19.0 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN  npm run build

FROM nginx
RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
