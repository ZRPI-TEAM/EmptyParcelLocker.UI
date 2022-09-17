# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY EmptyParcelLocker.UI/package.json .
COPY EmptyParcelLocker.UI/package-lock.json .
RUN npm install

# add app
COPY EmptyParcelLocker.UI/ .

RUN ["npm","install"]

# start app
CMD ["npm", "start"]