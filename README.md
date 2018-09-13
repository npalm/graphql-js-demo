# GraphQL demo service

Simple JavaScript GraphQL project to play around with Apollo.

## Build and Run

### yarn
```
yarn && yarn start
```
Open en browser on http://localhost:8080/graphiql, for play around with GraphiQL


### Docker

Build the docker image
```
docker build -t js-demo .
```

Start the container
```
docker run -it --rm -p 8081:8080 js-demo
```
Open en browser on http://localhost:8081/graphiql, for play around with GraphiQL
