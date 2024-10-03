(() => {
  let avengers: number = 10;
  console.log(avengers);
  const villians = 20;
  if (avengers > villians) {
    console.log("Estamos en problemas");
  } else {
    console.log("Nos salvamos");
  }

  avengers = Number("123A");
  console.log({ avengers });
})();
// en JS NAN es considerado un numero
