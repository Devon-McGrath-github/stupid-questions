# stupid-questions
An app for students to anonymously ask "stupid" questions

stupid-questionz.herokuapp.com

#heroku-deployment

##Refactoring of existing files that was required:

package json script "start", changed from webpack-dev-server to node server/server
webpack-dev-server is used for development, node is what was needed to deploy.

removed - var cors = require('cors') from the server.js file, this was an unused module and was throwing up errors preventing our server from running.

added the Procfile for heroku

##Issues with pushing to heroku

We had created a branch 'herokuDeployment' upon which we were working. This caused an error as heroku wants to run the master branch (for its deployment which makes sense, branches are usually for in development features.). However, we were using the command:
 - $ git push heroku master

To push our current branch to the heroku master branch.

This results in a rejected push, no Cedar supported error.

The reason is not because we are missing a package.json, its because our master branch at the time, was missing the package.json (heroku requires something like node or ruby to deploy) and it was trying to deploy the master branch rather than our herokuDeployment branch.

The proper command:
  - $ git push heroku herokuDeployment:master

Pushes the herokuDeployment branch, to heroku, as the master branch on heroku.
