import React from 'react';

class Cards extends React.Component {
  render() {
    const { name, type, image, averageWeight: { value, measurementUnit } } = this.props;
    return (
      <div className='cardPokemon'>
        <img src={ image } alt={ `Imagem do ${name}`}/>
        <h2>{ name }</h2>
        <p>{ type }</p>
        <p>{ `Average Weight: ${value} ${measurementUnit}` }</p>
      </div>
    );
  }
}

export default Cards;