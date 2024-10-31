"use strict";
// Funciones Básicas
const sumar = (a, b) => {
    return a + b;
};
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman(true);
// Rest?
const unirheroes = (...personas) => {
    return personas.join(", ");
};
// Tipo funcion
const noHaceNada = (numero, texto, booleano, arreglo) => {
    console.log("no hago nada");
};
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
console.log(noHaceNadaTampoco(1, "carol", true, ["a", "b"]));
