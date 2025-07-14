# Stage 1: Build React app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# This must create a /app/build directory
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
