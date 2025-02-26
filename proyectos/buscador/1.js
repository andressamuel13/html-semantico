window.addEventListener("DOMContentLoaded", () => {
  let input = document.querySelector(".buscador");
  let texto = document.querySelector(".texto");

  input.addEventListener("keydown", (x) => {
    let search = input.value;

    if (search.trim() != "" && x.code == "Enter") {
      let regExp = new RegExp(search, "gi");
      texto.innerHTML = texto.textContent.replace(
        regExp,
        "<span class='texto_parrafo'></span>"
      );
    }
  });
});

/*
let input = document.querySelector(".buscador");
let texto = document.querySelector(".texto");

input.addEventListener("keyup", (x) => {
  let search = input.value.trim();

  if (search != "" && x.code == "Enter") {
    let regExp = new RegExp(search, "gi");
    texto.innerHTML = texto.textContent.replace(
      regExp,
      "<span class='texto_parrafo'>$&</span>"
    );
  }
});

*/
