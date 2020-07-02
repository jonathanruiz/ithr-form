# Choose version of image
FROM node:12

# Choose where the app is going to live in the container
WORKDIR /usr/src/app

# Copy files to the root of the container
COPY package*.json ./

# Install the dependencies 
RUN npm install

# Copy the rest of the files too
COPY . .

# Connect to the container with that port
EXPOSE 5000

# Run the scripts in the package file
CMD ["npm", "start"]