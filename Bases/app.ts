//Funcion autoinvocada para que no choquen otros archivos ts con js, esto es porque trabajamos con ts puro

(() => {
  const a: number = 10;
  let b: number;
})();
