"use strict";
// ./index.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
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
