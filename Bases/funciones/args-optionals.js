"use strict";
(() => {
    const fullName = (fistName, lastName) => {
        return `${fistName} ${lastName || "Sin apellido"}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
//! con el signo "?" le indico que el argumento es opcional
