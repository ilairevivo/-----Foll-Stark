// const getPokemons = () => {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0', false);

//     request.send();

//     if (request.status === 200) {
//         return JSON.parse(request.response);
//     } else {
//         return 'Error';
//     }
// }

// // const myPromise = new Promise((resolve, reject) => {
// //     const pokemons = getPokemons();
// //     if (pokemons !== 'Error') {
// //         resolve(pokemons);
// //     } else {
// //         reject('Error');
// //     }
// // }).then((pokemons) => {
// //     console.log(pokemons);
// // }).catch((error) => {
// //     console.log(error.message);
// // }).finally(() => {
// //     console.log('Promise finished');
// // });

// const myPromise = new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');

//     request.onload = () => {
//         if (request.status === 200) {
//             resolve(JSON.parse(request.response));
//         } else {
//             reject(new Error('error'));
//         }
//     }

//     request.send();
// });

// myPromise.then((pokemons) => {
//     console.log(pokemons);
//     console.log('Promise finished');
// }).catch((error) => {
//     console.log(error.message);
//     console.log('Promise finished');
// });

// console.log('End of the script');


console.log("******************** exercise 1********************");

function getData(countryName) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);

        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject('Error: Country not found');
            }
        };

        

        xhr.send();
    });
}

// Function to print country data
function printData() {
    const countryName = prompt('Please enter a country name:');

    getData(countryName)
        .then(data => {
            const jsonData = JSON.parse(data);
            console.log(jsonData);
        }).catch(error => {
            console.error(error);
        });
}

// Function to display country flags
function setImages() {
    const countries = ['Israel', 'France', 'Spain', 'Italy', 'Germany'];
    const defaultImage = 'https://via.placeholder.com/150?text=Flag+Not+Found';
    const container = document.createElement('div');
    document.body.appendChild(container);

    countries.forEach(country => {
        getData(country)
            .then(data => {
                const countryData = JSON.parse(data);
                const flagUrl = countryData[0].flags.png;

                const img = document.createElement('img');
                container.appendChild(img);
                img.src = flagUrl;
                img.alt = `Flag of ${country}`;
                img.style.margin = '50px';
                img.style.width = '200px';
                img.style.height = '150px';
                img.style.objectFit = 'cover';
                img.style.borderRadius = '10px';
                
            }).catch(() => {
                const img = document.createElement('img');
                img.src = defaultImage;
                img.alt = 'Flag not found';
                img.style.margin = '10px';
                container.appendChild(img);
            });
    });
}


printData();
setImages();

