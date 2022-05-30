const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const letterA = () => {
  let count = 0;
  return names.reduce((acc, curr) => {
    if (acc.startsWith('A')) {
      count = 1;
    }
    if (curr.startsWith('A')) {
      count += 1;
    }
    return count;
  })
}

console.log(letterA())