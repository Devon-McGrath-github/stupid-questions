
# stupid-questions

An app for students to anonymously ask "stupid" questions.

Instructions for Installation:

1. Run `npm install` after cloning.
2. Run `npm start` and take your browser to [http://localhost:8080](http://localhost:8080) for a webpack setup with its dev server and hot module reloading.
3. Run `npm run server` in a separate terminal to load the Express server with API routes and a `/static` folder to hold the webpack assets.
  - The server is listening on [http://localhost:3000](http://localhost:3000) and includes the necessary CORS configuration to permit access from client assets served from the `webpack-dev-server`.
  - It includes `node-inspector` for server-side debugging. The debugging
interface is at [http://localhost:8888/?debug=5858](http://localhost:8888/?debug=5858).
  - The server is started with `node-dev` so it will restart after it detects changes.
* a test setup for running tests with `ava` and `enzyme`.
  - Run the tests with `npm test`.
