const unidades = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convert (valor:number, base:string, conversao:string):number {
  const unidadeBase = unidades.indexOf(base);
  const unidadeConvertida = unidades.indexOf(conversao);
  const expoente = (unidadeBase - unidadeConvertida);

  return valor ** expoente;
}

console.log(100, 'km', 'mm');