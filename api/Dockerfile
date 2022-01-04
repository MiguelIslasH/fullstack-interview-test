FROM node:alpine
RUN mkdir -p /usr/api
WORKDIR /usr/api
COPY . .
RUN npm install
EXPOSE 5000
CMD ["npm", "run", "dev"]