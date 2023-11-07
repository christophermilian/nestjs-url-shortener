## Description

A [Nest](https://github.com/nestjs/nest) based url shortener written in TypeScript.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Local MongoDB Setup

```bash
# Install MongoDB via Homebrew
brew tap mongodb/brew

# Update brew packages
brew update

# Install mongodb
brew install mongodb-community@7.0
```

Before running mongosh, you need to create an admin user to secure the connection.
Steps for creating an admin user can be found here, [Authenticate with SCRAM](https://www.mongodb.com/docs/manual/tutorial/configure-scram-client-authentication/#std-label-create-user-admin)

```bash
# run mongod authenticated
mongod --auth --port 27017 --dbpath /opt/homebrew/var/mongodb

# run mongosh with admin (please use unique user and password)
mongosh --port 27017  --authenticationDatabase "admin" -u "myUserAdmin" -p
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License
[MIT licensed](LICENSE)
