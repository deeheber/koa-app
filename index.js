const port = process.env.PORT || 3000;
require('./lib/setup-mongoose');
const parser = require('koa-bodyparser');
const koa = require('koa');
const app = module.exports = koa();
const router = require('./lib/routes/dogs');

// logger
// app.use(function *(next){
//   var start = new Date;
//   yield next;
//   var ms = new Date - start;
//   console.log('%s %s - %s', this.method, this.url, ms);
// });

//Hello world
// app.use(function *(){
//   this.body = 'Hello World';
// });

app
  .use(function *(next) {
    try {
      yield next;
    } catch (err) {
      this.status = err.status || 500;
      this.body = err.message;
      this.app.emit('error', err, this);
    }
  })
  .use(parser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, ()=>{
  console.log(`Server started on port ${port}`);
});
