const Dog = require('../lib/models/dog');
const assert = require('chai').assert;

describe('dog model unit test', ()=>{

  it('creates a dog', done=>{
    const fido = new Dog({name: 'Fido', breed: 'Pit bull', age: 4});
    assert.equal(fido.name, 'Fido');
    assert.equal(fido.breed, 'Pit bull');
    done();
  });

  it('requires a name', done=>{
    const noname = new Dog();
    noname.validate(err=>{
      if(!err) done('error not thrown for no name');
      else done();
    });
  });

  it('error when age is over 25', done=>{
    const oldDog = new Dog({name: 'barnaby', age: 50});
    oldDog.validate(err=>{
      if(!err) done('error not thrown for age over 25');
      else done();
    });
  });
});
