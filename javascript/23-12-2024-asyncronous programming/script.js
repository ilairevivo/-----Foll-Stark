const fn1 = () => {
    setTimeout(() => {
        console.log("Fanction 2");
    }, 3000);
};

const fn2 = () => {
    console.log('Fanction 2');
}

fn1(); // Fanction 1 will be printed after 3s
fn2();// Fanction 1 will be printed immediately

console.log("************************ XMLHttpRequest ************************");

// פונקציה שמביאה נתונים משרת באינטרנט
// const getData = () => {
//     const req = new XMLHttpRequest(); //מחלקה שמאפשרת לנו לבקש משרת באינטרנט
//     console.log(req);

//     req.onload = () => {// כאשר הבקשה תגיע 
//         console.log(req.response);// התגובה לבקשה
//         console.log(JSON.parse(req.response));// משנה את הסטרינג לאובייקט
//     }

//     req.open('GET', 'https://pokeapi.co/api/v2/pokemon/squirtle');// בקשה לשרת
//     req.send(); //שליחת הבקשה
// }
// getData();

console.log("*************** Exercise ********************");

const getCountry = (country) => {
    // Create an XMLHttpRequest object
    const request = new XMLHttpRequest();

    //print the request object
    console.log(request);

    // we use try catch because request can throw an error
    try {
        // Open a new connection, using the GET request on the URL - GET will get the data SYNCHRONOUSLY
        request.open('GET', `https://restcountries.com/v3.1/name/${country}`, false); // false means synchronous

        // Send request
        request.send();

        // Check if the request was successful
        if (request.status === 200) {
            // Parse the data from the request and return it
            const data = JSON.parse(request.response);
            return data;
        } else {
            // If the request was not successful, return an error message
            return 'Country not found';
        }
    } catch (error) {
        // If there was an error with the request, return the error message
        console.log(error.message);
    }
};

// Print the data for a specific country
const printCountryData = (country) => {
    // Get the data for the country using the getCountry function
    const data = getCountry(country);

    // Print the data to the console
    console.log(data);

    //put country flag in image tag
    const img = document.getElementById('img');
    img.src = data[0].flags.png;
}


printCountryData('israel');// print the data for israel