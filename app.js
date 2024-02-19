console.log("It's working");

const countryInput = document.querySelector("#countryInput");
const searchEl = document.querySelector(".search");
const searchResult = document.querySelector("#search_result");
const flagEl = document.querySelector("#flag");
const countryEl = document.querySelector("#name");
const populationEl = document.querySelector("#population");
const capitalEl = document.querySelector("#capital");
const areaEl = document.querySelector("#area");

searchEl.addEventListener("click", () => {

    let countryName = countryInput.value
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL)
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        searchResult.style.display = "block";

        countryData = data[0];
        console.log(countryData);
        flagEl.src = countryData.flags.svg;
        countryEl.innerHTML = countryData.name.common;
        populationEl.innerHTML = countryData.population;
        capitalEl.innerHTML = countryData.capital;
        areaEl.innerHTML = countryData.area;
    })
})