export function areaDoLosango(dMaior: number, dMenor: number):number {
  return (dMaior * dMenor) / 2;
}

export function areaDoTrapezio (bMaior: number, bMenor: number, altura: number):number {
  return ((bMaior + bMenor) * altura) / 2;
}

export function areaDoCirculo (raio: number):number {
  return (raio ** 2) * 3.14;
}
