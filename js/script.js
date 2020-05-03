const options = {
  headers: {
    'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
    'x-rapidapi-key': 'c7feb9da5cmsh882a76e7693a833p18a8a9jsnf97ece3aa942',
  },
};

async function callCountries() {
  try {
    const response = await fetch(
      'https://restcountries-v1.p.rapidapi.com/all',
      options
    );
    const countries = await response.json();

    countriesResults(countries);
  } catch (error) {
    console.log(error);
  } finally {
    const loading = document.querySelector('.loader');
    loading.style.display = 'none';
  }
}
callCountries();

function countriesResults(countries) {
  console.log(countries);

  const countriesContainer = document.querySelector('.card');

  let html = '';

  for (let i = 0; i < countries.length; i++) {
    if (!countries[i].name) {
      continue;
    }
    console.log(countries);

    let nameOfCountry = 'Unavailable';
    if (countries[i].name !== '-') {
      nameOfCountry = countries[i].name;
    }
    html += `<div class="card">
                 <div class="details">
                     <h4 class="name">${countries[i].name}</h4>
                      <p><b>Capital:</b> ${countries[i].capital}</p>
                       <p><b>Country Code:</b> ${countries[i].alpha3Code}</p>
                       <p><b>Spelling:</b> ${countries[i].altSpellings}</p>
                       <p><b>Native Name:</b> ${countries[i].nativeName}</p>
                      <a class="btn btn-primary" href="details.html?name=${countries[i].name}">Details</a>
                  </div>
              </div>`;
  }

  countriesContainer.innerHTML = html;
}
