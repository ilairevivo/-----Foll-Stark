const getAllCountries = () => {
    const request = fetch("https://restcountries.com/v3.1/all");
    request.then((data) => {
        return data.json();
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
}
getAllCountries();

console.log("*********************** exercise 1*********************");

const getCountry = (country) => {
    const request = fetch(`https://restcountries.com/v3.1/name/${country}`)// fetch to get URL from the internet
    request.then((data) => { // the (data) is the response we get from fethcing , but in raw terms
        console.log(data); // show the data in console
        return data.json() // translate to JSON so it can be useable in code
    }).then((data) => {
        console.log(data); // waiting for the return json to end

    }).catch((error) => {
        console.log(error);
    });
}

getCountry('israel');

const getOneCountry = async (country) => {
    const request = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await request.json();
    return data;
}
try {
    const nigeria = await getOneCountry("Nigeria");
    console.log(nigeria);
    console.log("Hello World");
    console.log(nigeria[0].flags.png);
} catch (error) {
    console.log(error);
}
const israel = await getOneCountry("israel").then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

console.log("*********************** exercise 2*********************");

const getCountrysInHerope = async () => {
    const request = await fetch('https://restcountries.com/v3.1/region/europe');
    const data = await request.json();
    return data;
}

const  countries = await getCountrysInHerope();
const names = countries.filter((country) => country.name);
console.log(names);
