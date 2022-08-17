# Twerol

---
## API Endpoint
|  url | params  | data  |
|---|---|---|
| ~/api/v1/word  | {wordsCount: number, uniqueKey?: 'string}  | get a list of random words   |
|  ~/api/v1/word |  {score: number} | get the rank based on the score  | 
---
## Run Application

### Docker
- cd ./
  - build image `docker build -t twerlo .`
  - run image `docker container run -p 3000:3000 --rm twerlo-test`
---
### Run server & client
- cd ./server
  - run `npm run app` | `yarn run app`
---
### Run Server
- cd ./server
  - run `npm install` 
  - run `npm run app`
  ---
### Run Client
- cd ./client
  - run `npm install`
  - run `npm start`
