# Etapa de construcción
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build -- --output-path=dist/front-end-reservas

# Etapa de producción
FROM nginx:alpine

# Actualizar los paquetes vulnerables
RUN apk update && \
    apk upgrade libcrypto3 libssl3

COPY --from=build /app/dist/front-end-reservas /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]