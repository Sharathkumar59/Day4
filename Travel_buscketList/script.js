const countriesList = document.querySelector("#countries");
const button = document.querySelector("button");
const statusEl = document.querySelector("#status");

const fetchCountries = function () {
  statusEl.textContent = "Loading...";
  countriesList.innerHTML = "";

  fetch("https://restcountries.com/v3.1/region/europe?fields=name,flags")
    .then(response => response.json())
    .then(data => {
      statusEl.textContent = "Here you go!";

      data.forEach(country => {
        const li = document.createElement("li");

        const flag = document.createElement("img");
        flag.src = country.flags.png;
        

        const name = document.createElement("span");
        name.textContent = " "+ country.name.common;

        li.appendChild(flag);
        li.appendChild(name);
        countriesList.appendChild(li);
      });
    })
    .catch(error => {
      console.error("Could not fetch countries", error);
      statusEl.textContent = "Something went wrong.";
    });
};

button.addEventListener("click", fetchCountries);
