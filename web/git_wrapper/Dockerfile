FROM node:alpine
RUN mkdir -p /usr/web/
WORKDIR /usr/web
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start"]