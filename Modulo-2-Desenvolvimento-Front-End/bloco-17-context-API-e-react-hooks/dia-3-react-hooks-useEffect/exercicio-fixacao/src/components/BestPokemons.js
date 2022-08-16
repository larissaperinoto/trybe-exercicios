import React, { useEffect } from 'react';

function BestPokemon() {
  // willUnmount
  useEffect(() => () => console.log('desmontou'), []);
  return (
    <div>
      <img src='https://i.pinimg.com/564x/d6/61/96/d66196beb60d306a966ea39ed11c2b3d.jpg' alt='Bubassauro'/>
    </div>
  );
}

export default BestPokemon;
