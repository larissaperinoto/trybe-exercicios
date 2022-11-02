"use strict";
var Medidas;
(function (Medidas) {
    Medidas[Medidas["KL"] = 1000] = "KL";
    Medidas[Medidas["HL"] = 100] = "HL";
    Medidas[Medidas["DAL"] = 10] = "DAL";
    Medidas[Medidas["L"] = 1] = "L";
    Medidas[Medidas["DL"] = 0.1] = "DL";
    Medidas[Medidas["CL"] = 0.01] = "CL";
    Medidas[Medidas["ML"] = 0.001] = "ML";
})(Medidas || (Medidas = {}));
function converte(valor, base, conversao) {
    const unidadeBase = Medidas[base];
    const unidadeConvertida = Medidas[conversao];
    return (valor * unidadeBase) / unidadeConvertida;
}
module.exports = { converte };
