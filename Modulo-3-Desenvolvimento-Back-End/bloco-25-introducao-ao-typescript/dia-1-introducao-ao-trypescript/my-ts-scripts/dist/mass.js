"use strict";
var Medidas;
(function (Medidas) {
    Medidas[Medidas["KG"] = 1000] = "KG";
    Medidas[Medidas["HG"] = 100] = "HG";
    Medidas[Medidas["DAG"] = 10] = "DAG";
    Medidas[Medidas["G"] = 1] = "G";
    Medidas[Medidas["DG"] = 0.1] = "DG";
    Medidas[Medidas["CG"] = 0.01] = "CG";
    Medidas[Medidas["MG"] = 0.001] = "MG";
})(Medidas || (Medidas = {}));
function converte(valor, base, conversao) {
    const unidadeBase = Medidas[base];
    const unidadeConvertida = Medidas[conversao];
    return (valor * unidadeBase) / unidadeConvertida;
}
module.exports = { converte };
