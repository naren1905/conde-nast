# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the app source code
COPY . .

# Expose the port and run the app
EXPOSE 3000
CMD ["node", "src/index.js"]
