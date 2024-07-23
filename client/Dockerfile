# Use the official Node image from the Docker Hub
FROM node:21.5.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Clean up any previous installations
RUN rm -rf node_modules package-lock.json

# Install the dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose port 5173 for Vite
EXPOSE 5173

# Command to run the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]
