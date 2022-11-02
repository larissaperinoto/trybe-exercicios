"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converte = void 0;
var Medidas;
(function (Medidas) {
    Medidas[Medidas["KM"] = 10 * Math.pow(1000, 9)] = "KM";
    Medidas[Medidas["HM"] = 10 * Math.pow(1000, 6)] = "HM";
    Medidas[Medidas["DAM"] = 10 * Math.pow(1000, 3)] = "DAM";
    Medidas[Medidas["M"] = 1] = "M";
    Medidas[Medidas["DM"] = 10 * Math.pow(1000, -3)] = "DM";
    Medidas[Medidas["CM"] = 10 * Math.pow(1000, -6)] = "CM";
    Medidas[Medidas["MM"] = 10 * Math.pow(1000, -9)] = "MM";
})(Medidas || (Medidas = {}));
function converte(valor, base, conversao) {
    const unidadeBase = Medidas[base];
    const unidadeConvertida = Medidas[conversao];
    return (valor * unidadeBase) / unidadeConvertida;
}
exports.converte = converte;
