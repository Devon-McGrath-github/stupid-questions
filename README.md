 [![Stories in Ready](https://badge.waffle.io/kauri-2016/stupid-questions.svg?label=ready&title=Ready)](http://waffle.io/kauri-2016/stupid-questions)

# Stupid Questionz

> An app for students to anonymously ask _stupid_ questions


## Installation instructions

1. Run `npm install` after cloning.
2. Run `npm start` and take your browser to [http://localhost:8080](http://localhost:8080) for a webpack setup with its dev server and hot module reloading.
3. Run `npm run server` in a separate terminal to load the Express server with API routes and a `/static` folder to hold the webpack assets.
  - The server is listening on [http://localhost:3000](http://localhost:3000) and includes the necessary CORS configuration to permit access from client assets served from the `webpack-dev-server`.
  - It includes `node-inspector` for server-side debugging. The debugging
interface is at [http://localhost:8888/?debug=5858](http://localhost:8888/?debug=5858).
  - The server is started with `node-dev` so it will restart after it detects changes.
* a test setup for running tests with `ava` and `enzyme`.
  - Run the tests with `npm test`.


## [PostgreSQL setup on OS X](http://exponential.io/blog/2015/02/21/install-postgresql-on-mac-os-x-via-brew/)

1. `brew update`
2. `brew install postgres`
3. Ensure postgres service has started, using: `postgres -D /usr/local/var/postgres`
4. `createdb stupid_questions`
5. Run migrations and seed data
6. To check postgres db, `psql stupid_questions`

### [Create Postgres User](https://www.postgresql.org/docs/9.2/static/app-createuser.html)

Postgres installs using the default OS X credentials, which can cause issues with users of a Windows/UNIX system. We will create a new the postgres username and password:

```bash
createuser postgres --pwprompt
```

### Helpful PostgreSQL commands

1. If user already exists, use `dropuser <username>`
2. To drop database, use `dropdb <database name>`

This will prompt for a password, use `postgres` for the password.

This means that when connecting to the local database, use the username `postgres` and the password `postgres`.


## Heroku deployment

The app is deployed to http://stupid-questionz.herokuapp.com

To deploy to Heroku, after installing the Heroku Toolbelt, run:

```bash
git push heroku my-branch-name:master
```
