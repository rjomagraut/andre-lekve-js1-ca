const options = {
  headers: {
    'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
    'x-rapidapi-key': 'c7feb9da5cmsh882a76e7693a833p18a8a9jsnf97ece3aa942',
  },
};
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const name = params.get('name');

async function getCountryByName() {
  const heading = document.querySelector('h1');

  try {
    const response = await fetch(
      'https://restcountries-v1.p.rapidapi.com/name/' + name,
      options
    );
    const details = await response.json();
    console.log('countries', details[0]);

    heading.innerHTML = details[0].name;

    const population = document.querySelector('#population');
    population.innerHTML = details[0].population;

    const languages = document.querySelector('#languages');
    languages.innerHTML = details[0].languages;

    const currencies = document.querySelector('#currencies');
    currencies.innerHTML = details[0].currencies;

    const borders = document.querySelector('#borders');
    borders.innerHTML = details[0].borders;

    const timezones = document.querySelector('#timezones');
    timezones.innerHTML = details[0].timezones;
  } catch (error) {
    heading.innerHTML = 'An error occured';
    console.log(error);
  }
}
getCountryByName();
