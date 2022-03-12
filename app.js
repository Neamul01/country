const loadCountrys = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => showCountry(data))
}
loadCountrys()
const showCountry = (data) => {
    const countrysection = document.getElementById('countries')
    data.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.className = 'country';
        div.innerHTML = `
        <p><h3>Name:${country.name}</h3> <br>
            <span> Capital: ${country.capital}</span><br>
            <span>Alter spelling :${country.altSpellings} </span><br>
            <span>Flag :</span><br>
            <img style='height:100px;width1050px' src='${country.flags.png}'><br>
            <button onclick='loadDetals("${country.name}")'>Show More</button>
        </p>
        `
        countrysection.appendChild(div);
    })
}
const loadDetals = country => {
    const url = `https://restcountries.com/v2/name/${country}`
    fetch(url).then(res => res.json()).then(data => showDetals(data))
}
const showDetals = country => {
    const countrydiv = document.getElementById('countryDetails');
    console.log(country[0])
    countrydiv.innerHTML = `
    <p>
    <span>Name :${country[0].name}</span><br>
    <span>Native Name :${country[0].nativeName}</span><br>
    <span>Region :${country[0].region}</span><br>
    <span>Sub-region :${country[0].subRegion}</span><br>
    <span>Population :${country[0].population}</span>
    </P>
    `
}