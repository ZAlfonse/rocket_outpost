FROM node:6.6.0

# Create workspace
RUN mkdir -p /usr/src/rocketoutpost
WORKDIR /usr/src/rocketoutpost

# Copy requirements into container
COPY .eslintrc /usr/src/rocketoutpost
COPY package.json /usr/src/rocketoutpost

# Install npm dependencies
RUN npm install

# Copy project source into project
COPY . /usr/src/rocketoutpost

# Build the project
RUN npm run build

# Entrypoints and stuff
ENTRYPOINT ["npm"]
