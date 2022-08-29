import { useState, useEffect } from  'react';

const usePokemonSprinte = () => {
  const [pokemonUrl, setPokemonUrl] = useState('');
  const [pokemonImage, setPokemonImage] = useState('');

  useEffect(() => {
    const getPokemonsImage = async () => {
      const { sprites } = await fetch(pokemonUrl).then(response => response.json());
      const { front_default: sprite } = sprites;
      setPokemonImage(sprite);
    }
    if (pokemonUrl) getPokemonsImage();
  }, [pokemonUrl]);

  return [pokemonImage, setPokemonUrl];
};

export default usePokemonSprinte;