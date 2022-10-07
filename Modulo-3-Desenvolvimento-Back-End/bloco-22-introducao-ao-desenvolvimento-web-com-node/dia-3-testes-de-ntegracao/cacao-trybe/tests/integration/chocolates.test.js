const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Usando o método GET em /chocolates', function () {
  it('Retorna a lista completa de chocolates!', async function () {

    const output = [
      { id: 1, name: 'Mint Intense', brandId: 1 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];

    const response = await chai
    .request(app)
    .get('/chocolates');

    expect(response.status).to.be.equals(200);
    expect(response.body.chocolates).to.deep.equal(output);
  });

});

describe('Usando o método GET em /chocolates/total', function () {
  it('Retorna a quantidade total de chocolates', async function () {

    const output = { totalChocolates: 4 };

    const response = await chai
    .request(app)
    .get('/chocolates/total');

    expect(response.status).to.be.equals(200);
    expect(response.body).to.deep.equal(output);
  });

});

describe('Usando o método GET em /chocolates/search?name=Mo', function () {
  it('Retorna os chocolates começados em "Mo"', async function () {

    const output = [
      {
        "id": 3,
        "name": "Mon Chéri",
        "brandId": 2
      },
      {
        "id": 4,
        "name": "Mounds",
        "brandId": 3
      }
    ];

    const response = await chai
    .request(app)
    .get('/chocolates/search?name=Mo');

    expect(response.status).to.be.equals(200);
    expect(response.body).to.deep.equal(output);
  });

  it('Retorna um array vazio para buscas sem correspondência', async function () {

    const response = await chai
    .request(app)
    .get('/chocolates/search?name=zzzzz');

    expect(response.status).to.be.equals(404);
    expect(response.body).to.deep.equal([]);
  });

});