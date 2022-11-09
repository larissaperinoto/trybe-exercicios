class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand:string, color:string, doors:number) {

  }

  honk(): void {
    console.log('sai da frente maluco Biiiiii');
  }

  turnOn(): void {
    console.log('Carro ligado: Vrum Vrum');
  }

  turnOff(): void {
    console.log('Carro desligado');
  }

  speedUp(): void {
    console.log('Ativar nitrox!! Vrumm');
  }

  speedDown(): void {
    console.log('Reduzindo a velocidade');
  }

  stop(): void {
    console.log('Carro parado');
  }

  turn(direcao:string): void {
    console.log(`Virando para a ${direcao}`);
  }
}

export default Car;