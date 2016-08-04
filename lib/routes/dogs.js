const Dog = require('../models/dog');
const router = require('koa-router')();

module.exports = router

  .get('/dogs', function *() {
    this.body = 'welcome to the dog page';
  })

  .get('/cats', function *() {
    this.body = 'welcome to the cat page';
  });
