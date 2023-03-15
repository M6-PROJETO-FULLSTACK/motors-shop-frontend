# Use the official Node.js image as the base image
FROM node:current-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the production version of the application
RUN npm run build

# Install serve
RUN npm install -g serve

# Set the command to start the server using serve
CMD ["serve", "-s", "build"]