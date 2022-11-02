enum Medidas {
  KL = 1000,
  HL = 100,
  DAL = 10,
  L = 1,
  DL = 0.1,
  CL = 0.01,
  ML = 0.001,
}
type medidascapacidade= "KL" | "HL" | "DAL" | "L" | "DL" | "CL" | "ML";

function converte (valor:number, base:medidascapacidade, conversao:medidascapacidade):number {
  const unidadeBase = Medidas[base];
  const unidadeConvertida = Medidas[conversao];

  return (valor * unidadeBase) / unidadeConvertida;
}

export = { converte };