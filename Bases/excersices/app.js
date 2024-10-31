"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let powerHeroe;
    (function (powerHeroe) {
        powerHeroe[powerHeroe["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        powerHeroe[powerHeroe["fuerzaBatman"] = 1] = "fuerzaBatman";
        powerHeroe[powerHeroe["fuerzaFlash"] = 5] = "fuerzaFlash";
        powerHeroe[powerHeroe["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(powerHeroe || (powerHeroe = {}));
    const fuerzaFlash = powerHeroe.fuerzaFlash;
    const fuerzaSuperman = powerHeroe.fuerzaSuperman;
    const fuerzaBatman = powerHeroe.fuerzaBatman;
    const fuerzaAcuaman = powerHeroe.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
