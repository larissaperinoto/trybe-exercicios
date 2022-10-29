import * as Exercise from './exercises';

const { areaDoLosango, areaDoTrapezio, areaDoCirculo } = Exercise;

console.log(`Para D = 32cm e d = 18cm`, areaDoLosango(32, 18));
console.log(`Para D = 200cm e d = 50cm`, areaDoLosango(200, 50));
console.log(`Para D = 75cm e d = 25cm`, areaDoLosango(75, 25));

console.log(`Para B = 100cm, b = 70cm e altura = 50cm`, areaDoTrapezio(100, 70, 50));
console.log(`Para B = 75cm, b = 50cm e altura = 35cm`, areaDoTrapezio(75, 50, 35));
console.log(`Para B = 150cm, b = 120cm e altura = 80cm`, areaDoTrapezio(150, 120, 80));

console.log(`Para raio igual 25cm`, areaDoCirculo(25));
console.log(`Para raio igual 100cm`, areaDoCirculo(100));
console.log(`Para raio igual 12,5cm`, areaDoCirculo(12.5));
