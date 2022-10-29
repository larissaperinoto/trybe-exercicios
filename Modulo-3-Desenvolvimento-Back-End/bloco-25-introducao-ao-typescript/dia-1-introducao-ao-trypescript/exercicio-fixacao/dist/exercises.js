"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaDoCirculo = exports.areaDoTrapezio = exports.areaDoLosango = void 0;
function areaDoLosango(dMaior, dMenor) {
    return (dMaior * dMenor) / 2;
}
exports.areaDoLosango = areaDoLosango;
function areaDoTrapezio(bMaior, bMenor, altura) {
    return ((bMaior + bMenor) * altura) / 2;
}
exports.areaDoTrapezio = areaDoTrapezio;
function areaDoCirculo(raio) {
    return (raio ** 2) * 3.14;
}
exports.areaDoCirculo = areaDoCirculo;
