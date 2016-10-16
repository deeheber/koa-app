const app = require('./lib/app.js');
const port = process.env.PORT || 3000;

app
  .listen(port, ()=>{
    console.log(`Server started on port ${port}`);
  });
