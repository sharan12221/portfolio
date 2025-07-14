# Stage 1: Build React app
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

# Optional: show directory before build
RUN ls -alh

# Build the app
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Clean default HTML page
RUN rm -rf /usr/share/nginx/html/*

# Copy build output
COPY --from=build /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
