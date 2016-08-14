const connection = require('../lib/setup-mongoose');
const request = require('supertest-koa-agent');
const app = require('../lib/app');

describe('api e2e', ()=>{

  before(done=> {
    const drop = () => connection.db.dropDatabase(done);
    if (connection.readyState === 1) drop();
    else connection.on('open', drop);
  });

  it('errors on invalid url path', done=>{
    request(app)
    .get('/api/fakeurl')
    .expect(404, done);
  });

  // POST -- creates a dog (or two)

  // GET -- returns all dogs

  // PUT -- updates a dog

  // GET by ID -- returns a single dog
  // Error on invalid ID

  // DELETE -- removes a dog

  //after(done=> connection.close(done));

});
