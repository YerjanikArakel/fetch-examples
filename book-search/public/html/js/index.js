import validator from "/html/js/helper.text.js";

const input = document.querySelector(".searchInput");
const btn = document.querySelector("#searchBtn");

const url = "http://openlibrary.org/search.json?q=";

btn.addEventListener("click", function () {
  console.log(input.value);
  let value = validator(input.value);
  fetch(url + validator(input.value))
    .then((r) => r.json())
    .then((r) => console.log(r.docs.author_alternative_name));

  console.log(url + validator(input.value));
  console.log(value);
});
