// fetch('https://restcountries.com/v2/all')
// .then((res) => res.json())
// .then((data) => {
//   data.map((cval) => {
//     console.log(cval.name);
//   })
// })
// .catch((err) => {
//   console.log("error detected");
// })


let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  let CountryName = countryInp.value;
  let finalURL= `https://restcountries.com/v3.1/name/${CountryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
  .then((Res) => Res.json())
  .then((data) => {
    data.map((cval) => {    
    result.innerHTML = `
    <img src = "${cval.flags.svg}" class="flag" >
    <h2>${cval.name.common} </h2>
      
      <div>
        <h4>Popolation : </h4>
        <span>${cval.population}</Span>
      </div>
      <div>
        <h4>Continents :</h4>
        <span>${cval.continents}</span>
      </div>
        <div>
          <h4> Start of Week :</h4>
          <span>${cval.startOfWeek}</span>
        </div>
        <div>
          <h4>Capital : </h4>
          <span>${cval.capital}</span>
        </div>
        
        <div>
          <h4>Region : </h4>
          <span>${cval.region}</span>
        </div>
        <div>
          <h4>SubRegion : </h4>
          <span>${cval.subregion}</span>
        </div>
  <!--      <div>
          <h4>Border : </h4>
          <span>${cval.border}</span>
        </div> 
        <div>
          <h4>Currencies</h4>
          <span>${cval.currencies}</span>
        </div>-->
`;
    })
    .catch((err) => {
        result.innerHTML = `<h3>Please Enter Correct Country name</h3>`
      })
  });
})