(() => {
  const batman = `Batman`;
  const linternaVerde = "Linterna Verde";
  const volcanNegro = "Volcan Negro";

  console.log(` I'm ${batman}`);
  console.log(batman.toUpperCase());

  console.log(batman[10]?.toUpperCase() || "No está presente");
})();
