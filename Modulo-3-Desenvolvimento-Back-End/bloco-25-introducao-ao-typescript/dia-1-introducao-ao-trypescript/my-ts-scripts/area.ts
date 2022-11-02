enum Medidas {
  KM = 10 * Math.pow(100, 9),
  HM = 10 * Math.pow(100, 6),
  DAM = 10 * Math.pow(100, 3),
  M = 1,
  DM = 10 * Math.pow(100, -3),
  CM = 10 * Math.pow(100, -6),
  MM = 10 * Math.pow(100, -9),
}
type medidasPossiveis = "KM" | "HM" | "DAM" | "M" | "DM" | "CM" | "MM";

function converte (valor:number, base:medidasPossiveis, conversao:medidasPossiveis):number {
  const unidadeBase = Medidas[base];
  const unidadeConvertida = Medidas[conversao];

  return (valor * unidadeBase) / unidadeConvertida;
}

export { converte };