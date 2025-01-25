const ainamals = ['lion', 'tiger', 'elephant', 'deer', 'monkey'];
const [first, second, ...rest] = ainamals;
const newAnimals = {
    first: 'lion',
    second: 'tiger',
    rest: ['elephant', 'deer', 'monkey'],
}

console.log(newAnimals);


const people = [
     {  name: 'Levi',  age: 25, job: 'developer',contry: 'india'},
     {
        name: 'John',
        age: 30,
        job: 'developer',
        contry: 'USA',
    }
]

for(const{ name,  contry} of people){
    console.log(name, contry);
}

