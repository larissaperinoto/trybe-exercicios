import React, { useEffect, useState } from 'react';
import BestPokemon from './components/BestPokemons';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);
  const [visible, setVisible] = useState(false);
  const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

  const hadleAddLimit = () => {
    setLimit((state) => state + 10);
  }

  //didMount e didiUpdate
  useEffect(() => {
    const getPokemons = async () => {
      const { results } = await fetch(endpoint).then(response => response.json());
      setPokemons(results);
    }
    getPokemons();
  }, [limit]);

  return (
    <main>
      <section>
        <h1>Pokemon List</h1>
        <button
          type='button'
          onClick={ hadleAddLimit }
        >
          Buscar mais Pokémons
        </button>
        <button
          type='button'
          onClick={ () => setVisible(!visible) }
        >
          { visible ? `Esconder o melhor Pokémon` : `Mostrar melhor Pokémon`}
        </button>
        { visible && <BestPokemon /> }
        <ul>
          { pokemons.map((pokemon, i) => (
            <li key={ i }>
              <h3>{ pokemon.name }</h3>
            </li>))
          }
        </ul>
      </section>
    </main>
  );
}

export default App;
