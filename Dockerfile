# Use the official Node.js image as a base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Expose the port the app runs on (e.g., port 3000)
EXPOSE 5000

# Run the app when the container starts
CMD ["npm", "start"]
