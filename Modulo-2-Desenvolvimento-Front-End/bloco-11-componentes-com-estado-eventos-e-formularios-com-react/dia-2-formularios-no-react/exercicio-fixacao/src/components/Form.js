import React from 'react';
import Email from './Email';

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      firstName: '',
      lastName: '',
      age: 0,
      email: '',
      opcaoSelect: '',
      termos: false
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div >
        <h1>Formulário</h1>
        <form className="forms">

          <label>
            Nome:
            <input
              type="text"
              name="firstName"
              value={this.state.handleChange}
              onChange={this.handleChange}
              required
              />

          </label>

          <label>
            Sobrenome:
            <input
            type="text"
            name="lastName"
            value={this.state.handleChange}
            onChange={this.handleChange}
            required
            />
          </label>

          <label>
            Idade:
            <input
            type="number"
            name="age"
            value={this.state.handleChange}
            onChange={this.handleChange}
            required
            />
          </label>

          <Email value={this.state.email} handleChange={ this.handleChange }/>

          <label>
            Escolha uma opção abaixo:
            <select
            name="opcaoSelect"
            value={this.state.handleChange}
            onChange={this.handleChange}
            >
              <option value="um">1</option>
              <option value="dois">2</option>
              <option value="tres">3</option>
              <option value="quatro">4</option>
            </select>
          </label>

          <label>
          <input
          type="checkbox"
          name='termos'
          value={ this.state.handleChange }
          onChange={ this.handleChange }
          />
            Termos e condições.
          </label>
        </form>
      </div>

    );
  }
}

export default Form;
