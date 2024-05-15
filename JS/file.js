const form = document.getElementById("TaskToDo");
console.log(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nomeNota =
    document.getElementById("nomeNota").value;
  const nota = document.getElementById("nota").value;
  //creo l'oggetto
  const newNota = {
    nameDellaNota: nomeNota,
    nota: nota,
  };
  // creazione div
  const card = document.createElement("div");
  card.classList.add("divNote");

  const cardNotaName = document.createElement("h4");
  cardNotaName = newNota.nameDellaNota;

  const cardNota = document.createElement("p");
  cardNota = newNota.nota;
  //bottone completato
  const buttonCompletato = document.createElement("button");
  buttonCompletato.textContent = "Completato";
  buttonCompletato.classList.add("ButtonCompletato");
  buttonCompletato.addEventListener("click", function () {
    cardNotaName.style.textDecoration = "underline";
  });

  //bottone cancella
  const buttonCancella = document.createElement("button");
  buttonCompletato.textContent = "Cestina";
  buttonCancella.classList.add("ButtonCancella");
  buttonCancella.addEventListener("click", function () {
    card.remove();
  });
});
