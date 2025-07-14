FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port Vite uses by default
EXPOSE 5173

# Start the Vite dev server
CMD ["npm", "run", "dev"]
