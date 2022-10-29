"use strict";
const unidades = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(valor, base, conversao) {
    const unidadeBase = unidades.indexOf(base);
    const unidadeConvertida = unidades.indexOf(conversao);
    const expoente = (unidadeBase - unidadeConvertida);
    return valor ** expoente;
}
