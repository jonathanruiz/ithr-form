# Choose version of image
FROM node:12

# Choose where the app is going to live in the container
WORKDIR /usr/src/app

# Copy files to the root of the container
COPY package*.json ./

# Install the dependencies for the server 
RUN npm install

# Copy the rest of the files too
COPY . .

# Connect to the container with that port
EXPOSE 5000

# Set to production
RUN export NODE_ENV=production

# Install the dependencies for React client
RUN npm run client-install

# Run the React build
RUN cd client && npm run build

# Run the dev script to run server and client
CMD ["npm", "run", "prod-start"]