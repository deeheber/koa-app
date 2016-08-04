const port = process.env.PORT || 3000;
require('./lib/setup-mongoose');
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
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, ()=>{
  console.log(`Server started on port ${port}`);
});
