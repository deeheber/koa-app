const port = process.env.PORT || 3000;
require('./lib/setup-mongoose');
const koa = require('koa');
const app = module.exports = koa();

var router = require('koa-router')();


// logger
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// routes
router.get('/stuff', function *() {
  this.body = 'welcome to the stuff page';
});
// response

app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(function *(){
  this.body = 'Hello World';
});

app.listen(port, ()=>{
  console.log(`Server started on port ${port}`);
});
