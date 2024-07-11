const foods = ["burguer", "pizza", "pasta"];

function changeWords() {
  let index = 0;
  const text = document.getElementById("text");

  setInterval(() => {
    // Aplica a classe 'hidden' para iniciar o fade out
    text.classList.add("hidden");
    setTimeout(() => {
      text.innerHTML = foods[index];
      text.classList.remove("hidden");
      index = (index + 1) % foods.length;
    }, 500);
  }, 3000);
}

changeWords();
