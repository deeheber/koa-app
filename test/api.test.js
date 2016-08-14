const connection = require('../lib/setup-mongoose');
const agent = require('supertest-koa-agent');
const assert = require('chai').assert;
const app = require('../lib/app');

describe('api e2e', ()=>{

  before(done=> {
    const drop = () => connection.db.dropDatabase(done);
    if (connection.readyState === 1) drop();
    else connection.on('open', drop);
  });

  let ernie = {
    'name': 'ernie',
    'breed': 'aussie',
    'age': 12
  };

  let buster = {
    'name': 'buster',
    'breed': 'lab',
    'age': 5
  };

  it('errors on invalid url path', done=>{
    agent(app)
    .get('/api/fakeurl')
    .expect(404, done);
  });

  it('creates a dog', done=>{
    agent(app)
      .post('/api/dogs')
      .send(ernie)
      .expect(200)
      .end((err, res)=>{
        const id = res.body._id;
        ernie.__v = 0;
        ernie._id = id;
        done();
      });
  });

  it('creates a second dog', done=>{
    agent(app)
      .post('/api/dogs')
      .send(buster)
      .expect(200)
      .end((err, res)=>{
        const id = res.body._id;
        buster.__v = 0;
        buster._id = id;
        done();
      });
  });

  it('returns all dogs', done=>{
    agent(app)
      .get('/api/dogs')
      .expect((res)=>{
        assert.equal(res.body.length, 2);
        assert.deepEqual(res.body, [ernie, buster]);
      })
      .end(done);
  });

  it('updates Ernie\'s name', done=>{
    agent(app)
    .put(`/api/dogs/${ernie._id}`)
    .send({name: 'Ernie the dog'})
    .expect((res)=>{
      assert.equal(res.body.name, 'Ernie the dog');
    })
    .end(done);
  });

  it('gets Buster', done=>{
    agent(app)
    .get(`/api/dogs/${buster._id}`)
    .expect(buster, done);
  });

  it('removes Buster', done=>{
    agent(app)
    .delete(`/api/dogs/${buster._id}`)
    .expect(buster, done);
  });

  it('errors on invalid dog id', done=>{
    agent(app)
    .get('/api/dogs/123')
    .expect('Invalid ID', done);
  });

  after(done=>{
    connection.close();
    done();
  });

});
