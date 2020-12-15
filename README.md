## Instructions on running Docker

It has been already preconfigured and does not require any adjustment.

```
docker-compose up -d
```

**Note : the jwt secret is in the docker-compose and it is prefered to change the secret key.**

## Instructions running without docker

You might require to install mongodb first before trying to install the application

To install all the dependendencies :

```
yarn install
```

To start the program :

```
yarn start:dev
```

The application is going to run on port 3000 and if you require to access most of the features go to
[graphql](http://localhost:3000/graphql)

Enjoy :D
