const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/model/db/connection');

const { peopleToPost } = require('./people.mock');

const { expect, use } = chai;

use(chaiHttp);

describe('Testa os endpoints de people', function () {
  it('Testa o cadastro de uma pessoa', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    const response = await chai.request(app)
      .post('/people')
      .send(peopleToPost);

    expect(response.status).to.equal(201);
    expect(response.body).to.deep.equal({ message: "Pessoa cadastrada com sucesso!"});
  });
});
