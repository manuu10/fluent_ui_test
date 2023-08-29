FROM node:lts-alpine
RUN mkdir -p /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN yarn
COPY . ./
CMD ["yarn","run","dev","--host"]               