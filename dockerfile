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

# Copy built assets from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Optional: custom nginx config
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
