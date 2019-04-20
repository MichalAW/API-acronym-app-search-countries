var url = 'http://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');
var prefix = "https://cors-anywhere.herokuapp.com/";

function searchCountries() {
    var countryName = document.getElementById('country-name').value;

    if (!countryName.length) countryName = 'Poland';

    fetch(prefix + url + countryName)
        .then(function(resp) {
            return resp.json();
        })
    .then(showCountriesList);
}

function showCountriesList(resp) {
    if (!Array.isArray(resp)) {
        return alert('I\'m sorry, please try again');
    }
    countriesList.innerHTML = '';
    resp.forEach(function(item) {
        var li = document.createElement('li');
        li.innerText = item.name;
        countriesList.appendChild(li);
    });
}

document.getElementById('search').addEventListener('click', searchCountries);
