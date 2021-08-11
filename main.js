let country = [
  {
    countryName: "India",
    population: 1295210000,
    region: "Asia",
    capital: "New Delhi",
    flag: "https://restcountries.eu/data/ind.svg",
  },
  {
    countryName: "USA",
    population: 323947000,
    region: "Americas",
    capital: "Washington D.C",
    flag: "https://restcountries.eu/data/usa.svg",
  },
  {
    countryName: "Italy",
    population: 60665551,
    region: "Europe",
    capital: "Rome",
    flag: "https://restcountries.eu/data/ita.svg",
  },
  {
    countryName: "Japan",
    population: 126960000,
    region: "Asia",
    capital: "Tokyo",
    flag: "https://restcountries.eu/data/jpn.svg",
  },
  {
    countryName: "Canada",
    population: 36155487,
    region: "Americas",
    capital: "Ottawa",
    flag: "https://restcountries.eu/data/can.svg",
  },
];

function kk(i) {
  const divcont = document.createElement("div");
  divcont.setAttribute("class", "cont");

  const divup = document.createElement("div");
  divup.setAttribute("class", "up");

  const divimg = document.createElement("img");
  divimg.setAttribute("src", country[i].flag);
  divimg.setAttribute("class", "imgcls");
  divup.append(divimg);

  const divdet = document.createElement("div");
  divdet.setAttribute("class", "det");
  divdet.innerHTML = `<h3>${country[i].countryName}</h3>
                        <p><span>Population:</span> ${country[i].population}</p>
                        <p><span>Region:</span> ${country[i].region}</p>
                        <p><span>Capital:</span> ${country[i].capital}</p>`;

  divcont.append(divup, divdet);
  divcontb.append(divcont);
}
const divcontb = document.createElement("div");
divcontb.setAttribute("class", "container ckk");
for (let i = 0; i < 5; i++) {
  kk(i);
}
document.body.append(divcontb);
