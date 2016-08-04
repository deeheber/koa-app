const port = process.env.PORT || 3000;
require('./lib/setup-mongoose');
const koa = require('koa');
const app = koa();


app.use(function *(){
  this.body = 'Hello World';
});

app.on('error', function(err){
  console.error('server error', err);
});

app.listen(port, ()=>{
  console.log(`Server started on port ${port}`);
});
