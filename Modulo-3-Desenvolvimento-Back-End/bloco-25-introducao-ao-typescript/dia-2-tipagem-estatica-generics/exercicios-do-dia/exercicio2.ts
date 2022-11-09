import Car from "./exercicio1";

const gol = new Car("volkswagen", "prata", 4);

// Siga em frente
gol.turnOn();
gol.speedUp();

// Vire a esquerda
gol.turn("esquerda");

// Em 200 metros na rotatória pegue a segunda saída a direita
gol.speedUp();
gol.turn("direita");

// Mantenha em frente pelos próximos 1,2 quilômetros
gol.speedUp();

// Em 300 metros vire a direita
gol.speedUp();

// Vire a direita
gol.turn("direita");

// Em 400 metros você chegará ao seu destino
gol.speedUp();

// Você chegou ao seu destino
gol.stop();
gol.turnOff();

// Siga em frente
gol.turnOn();
gol.speedUp();

// Em 300 metros vire a direita
gol.speedDown();

// Vire a direita
gol.turn("direita");

// Mantenha em frente pelos próximos 2 quilômetros
gol.speedUp();

// Em 200 metros vire a esquerda
gol.speedDown();

// Vire a esquerda
gol.turn("esquerda");

// Em 400 metros vire a direita
gol.speedDown();

// Vire a direita
gol.turn("direita");

// Em 100 metros você chegará ao destino
gol.speedDown();

// Você chegou ao destino
gol.stop();
gol.turnOff();