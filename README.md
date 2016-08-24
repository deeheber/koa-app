# koa-single-resource-app
Thought I'd experiemnt with using a different framework aside from Express. This is a single resource application that uses NodeJS, Koa, MongoDB, and Mongoose.

### Directions to use
1. `npm install` from the command line
2.  [Download MongoDB](https://www.mongodb.com/download-center#community)
3.  Start the database `mongod --dbpath [path to your MongoDB folder here]`
4.  Start the server by running `npm start`  
5. use an application like [Postman](https://www.getpostman.com/) to make calls to the API

### Data model
dog
  - name: String, required
  - breed: String
  - age: Number, max 25

### API Calls
- `GET /api/dogs` returns all dogs
- `GET /api/dogs/:id` returns a single dog by id
- `POST /api/dogs` adds a new dog to the database
- `PUT /api/dogs/:id` updates a single dog by id
- `DELETE /api/dogs/:id` deletes a single dog by id

Request bodies for `POST` and `PUT` must be valid JSON.
Responses are JSON

### Coming sometime in the future
- More resource types and relationships between resources
- Protect routes through user login
- Admin role API calls
- Front end to make API calls

### Ways to contribute
- Report any bugs or feature requests by opening up a new GitHub issue
- Fork this repo > code away > submit a PR to the master branch when complete
