enum Medidas {
  KG = 1000,
  HG = 100,
  DAG = 10,
  G = 1,
  DG = 0.1,
  CG = 0.01,
  MG = 0.001,
}
type medidasPossiveis = "KG" | "HG" | "DAG" | "G" | "DG" | "CG" | "MG";

function converte (valor:number, base:medidasPossiveis, conversao:medidasPossiveis):number {
  const unidadeBase = Medidas[base];
  const unidadeConvertida = Medidas[conversao];

  return (valor * unidadeBase) / unidadeConvertida;
}