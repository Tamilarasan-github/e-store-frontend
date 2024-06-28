# Use the official Node.js image to build the application
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build --prod

# Use an Nginx image to serve the built application
FROM nginx:alpine

# Copy the built application from the build stage
COPY --from=build /app/dist/e-store /usr/share/nginx/html

# Expose the port
EXPOSE 80

# No command needed, Nginx will start automatically
