# Twerlo

---
## API Endpoint
|  url | method | params  | data  |
|---|---|---|---|
| ~/api/v1/word | POST  | {wordsCount: number, uniqueKey?: 'string}  | get a list of random words   |
|  ~/api/v1/rank | POST |  {score: number} | get the rank based on the score  | 
---
## Run Application

### Docker
- cd ./
  - build image `docker build -t twerlo .`
  - run image `docker container run -p 3000:3000 -p 3001:3001 --rm twerlo`
  - view on `http://localhost:3000`
---
### Run server & client
- cd ./server
  - run `npm run app` | `yarn run app`
---
### Run Server
- cd ./server
  - run `npm install` 
  - run `npm run app`
  - view on `http://localhost:3001`
  ---
### Run Client
- cd ./client
  - run `npm install`
  - run `npm start`
  - view on `http://localhost:3000`
