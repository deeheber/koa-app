const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('chai').assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('api e2e', ()=>{

  before(done=> {
    const drop = () => connection.db.dropDatabase(done);
    if (connection.readyState === 1) drop();
    else connection.on('open', drop);
  });

  const request = chai.request(app);

  it('errors on invalid url path', done=>{
    request.get('/api/fakeurl')
    .then(res=>{
      assert.equal(res.status, 404);
      done();
    });
  });

  // POST -- creates a dog (or two)

  // GET -- returns all dogs

  // PUT -- updates a dog

  // GET by ID -- returns a single dog
  // Error on invalid ID

  // DELETE -- removes a dog

  //after(done=> connection.close(done));

});
