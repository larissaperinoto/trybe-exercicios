enum Medidas {
  KM = 1000,
  HM = 100,
  DAM = 10,
  M = 1,
  DM = 0.1,
  CM = 0.01,
  MM = 0.001,
}
type medidasPossiveis = "KM" | "HM" | "DAM" | "M" | "DM" | "CM" | "MM";

function converte (valor:number, base:medidasPossiveis, conversao:medidasPossiveis):number {
  const unidadeBase = Medidas[base];
  const unidadeConvertida = Medidas[conversao];

  return (valor * unidadeBase) / unidadeConvertida;
}

export = { converte };
