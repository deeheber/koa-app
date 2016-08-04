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
    try {
      this.body = yield Dog.findById(this.params.id);
    } catch(err) {
      this.throw('Invalid ID', 400);
    }
    if(!this.body) this.throw('ID not found', 400);
  })

  .post('/', function *() {
    this.body = yield new Dog(this.request.body).save();
  })

  .put('/:id', function *() {
    try {
      this.body = yield Dog.findByIdAndUpdate(this.params.id, this.request.body, {new: true, runValidators: true});
    } catch(err) {
      this.throw('Invalid ID', 400);
    }
    if(!this.body) this.throw('ID not found', 400);
  })

  .delete('/:id', function *() {
    this.body = yield Dog.findByIdAndRemove(this.params.id);
  });
