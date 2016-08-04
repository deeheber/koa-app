const Dog = require('../models/dog');
const Router = require('koa-router');

const router = new Router({
  prefix: '/api/dogs'
});

module.exports = router

  .get('/', function *() {
    this.body = yield Dog.find();
  })

  .get('/:id', function *() {
    this.body = yield Dog.findById(this.params.id);
  })

  .post('/', function *() {
    console.log(this.request.body);
    this.body = yield new Dog(this.request.body).save();
  })

  .put('/:id', function *() {
    this.body = yield Dog.findByIdAndUpdate(this.params.id, this.request.body, {new: true, runValidators: true});
  })

  .delete('/:id', function *() {
    this.body = yield Dog.findByIdAndRemove(this.params.id);
  });
