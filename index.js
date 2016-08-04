const port = process.env.PORT || 3000;
require('./lib/setup-mongoose');
const parser = require('koa-bodyparser');
const koa = require('koa');
const app = module.exports = koa();
const router = require('./lib/routes/dogs');


app
  .use(parser({
    onerror: function (err, ctx) {
      ctx.throw('Make sure you entered valid JSON and included all required fields.', 400);
    }
  }))
  .use(router.routes())
  .use(router.allowedMethods())

  .listen(port, ()=>{
    console.log(`Server started on port ${port}`);
  });
