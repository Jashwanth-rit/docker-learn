FROM node:latest
RUN npm install -g nodemon
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 6500
CMD ["npm","run","dev"]

#here dev is used because in package.json we written "dev":"nodemon node.js"

# // FROM node:latest  - form which parent image we creating local image

# // COPY . . - where we should access nodejs file

# // RUN npm install - used to install require files for docker to create local image

# // EXPOSE 6500 - at which port is that node js is runnig

# // CMD ["node","index.js"] - what is the command we should give to run that command

