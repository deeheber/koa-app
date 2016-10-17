require('./setup-mongoose');
const parser = require('koa-bodyparser');
const serve = require('koa-static');
const logger = require('koa-logger')
const koa = require('koa');
const app = module.exports = koa();
const router = require('./routes/dogs');

app
  .use(logger())
  .use(serve(__dirname + '/public'))
  .use(parser({
    onerror: function (err, ctx) {
      ctx.throw('Make sure you entered valid JSON and included all required fields.', 400);
    }
  }))
  .use(router.routes())
  .use(router.allowedMethods());
