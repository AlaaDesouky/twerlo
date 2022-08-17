FROM node:alpine AS twerlo

WORKDIR /app/client/
COPY ./client/package*.json ./
RUN npm install
COPY ./client/src/ ./src
COPY ./client/public/ ./public
COPY ./client/tsconfig.json ./tsconfig.json


WORKDIR /app/server/
COPY server/package*.json ./
RUN npm install

COPY server/src/ ./src
COPY server/server.ts ./
COPY ./server/tsconfig.json ./tsconfig.json
ENV PORT=3001
ENV NODE_ENV=development
EXPOSE 3000
EXPOSE 3001
CMD [ "npm", "run", "app" ]
