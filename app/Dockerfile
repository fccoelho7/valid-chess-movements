FROM node:latest
RUN mkdir /app
WORKDIR /app
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn
COPY . /app

EXPOSE 3000
EXPOSE 35729

# Start the main process.
CMD ["yarn", "start"]