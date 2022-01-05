FROM node:alpine
RUN mkdir -p /usr/api/
RUN mkdir -p /usr/git/
WORKDIR /usr/
RUN apk --no-cache add git
COPY ./api ./api
COPY ./.git/ ./git/
WORKDIR /usr/api/
RUN npm install
EXPOSE 5000
WORKDIR /usr/api/
CMD ["npm", "run", "dev"]