# base image 
FROM node:16-alpine

# working directory
WORKDIR /app

# copy package.json to app
COPY package.json .

# npm install
RUN npm install

# copy all files
COPY . .

# port expose 
EXPOSE 8080

# run the code 
CMD [ "npm", "run", "dev" ]




