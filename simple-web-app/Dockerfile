# Specify a base image with npm and node
FROM node:alpine

# Any following commands will be executed relative to 
# this path in the container (therefore, don't accidentally
# overwrite any files with COPY command)
WORKDIR /usr/app

# Minimizing unnecessary dependencies installs, so that it is only
# run when the, when dependancy file changed
COPY ./package.json ./
RUN npm install

# Copy files from machine to container -> source is relative
# to build context
COPY ./ ./

# Default startup command
CMD ["npm", "start"]