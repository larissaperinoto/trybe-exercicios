const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../src/app')
const personagens = require('../src/personagens');

chai.use(chaiHttp);

describe('Busca por todos os personagens', function() {
  it('Retorna todos os personagens com status 200', async function() {
    const result = await chai.request(app).get('/');

    console.log(result)

    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.a('array');
    expect(result.body).to.be.deep.equals(personagens);
  })
});

describe('Busca personagem por ID', function() {
  it('Retorna o resultado esperado com status 200', async function () {
    const result = await chai.request(app).get(`/${2}`);

    const expectResult = data[1];

    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.a('array');
    expect(result.body[0]).to.be.deep.equals(expectResult);
  });
});
