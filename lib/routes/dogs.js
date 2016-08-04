const Dog = require('../models/dog');
const Router = require('koa-router');
const router = new Router({
  prefix: '/dogs'
});

module.exports = router

  .get('/', function *() {
    this.body = 'welcome to the dog page';
  })

  .get('/:id', function *() {
    this.body = 'welcome to the cat page';
  })

  .post('/', function *() {
    this.body = 'welcome to the cat page';
  })

  .put('/:id', function *() {
    this.body = 'welcome to the cat page';
  })

  .delete('/:id', function *() {
    this.body = 'welcome to the cat page';
  });
