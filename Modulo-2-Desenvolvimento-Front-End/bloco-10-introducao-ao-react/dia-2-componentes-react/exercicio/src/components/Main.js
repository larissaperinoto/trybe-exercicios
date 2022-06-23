import React from 'react';
import Cards from './Cards';
import data from '../data';
import pokemons from '../data';


class Main extends React.Component {
  render() {
    return (
      <section className='sectionPokemons'>
        { data.map((pokemons) => <Cards
        name={ pokemons.name }
        type={ pokemons.type }
        image={ pokemons.image }
        averageWeight={ pokemons.averageWeight }

        />)}
      </section>
    )
  }
}

export default Main;