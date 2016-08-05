require('./setup-mongoose');
const parser = require('koa-bodyparser');
const koa = require('koa');
const app = module.exports = koa();
const router = require('./routes/dogs');


app
  .use(parser({
    onerror: function (err, ctx) {
      ctx.throw('Make sure you entered valid JSON and included all required fields.', 400);
    }
  }))
  .use(router.routes())
  .use(router.allowedMethods());
