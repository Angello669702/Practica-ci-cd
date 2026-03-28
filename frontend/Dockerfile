FROM node:20-alpine AS build

LABEL maintainer="angello669702@gmail.com"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

ENV NGINX_PORT=80

COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

VOLUME ["/usr/share/nginx/html"]

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
