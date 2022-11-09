"use strict";
var Medidas;
(function (Medidas) {
    Medidas[Medidas["KM"] = 1000] = "KM";
    Medidas[Medidas["HM"] = 100] = "HM";
    Medidas[Medidas["DAM"] = 10] = "DAM";
    Medidas[Medidas["M"] = 1] = "M";
    Medidas[Medidas["DM"] = 0.1] = "DM";
    Medidas[Medidas["CM"] = 0.01] = "CM";
    Medidas[Medidas["MM"] = 0.001] = "MM";
})(Medidas || (Medidas = {}));
function converte(valor, base, conversao) {
    const unidadeBase = Medidas[base];
    const unidadeConvertida = Medidas[conversao];
    return (valor * unidadeBase) / unidadeConvertida;
}
module.exports = { converte };
