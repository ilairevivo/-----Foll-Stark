import { changeCar, printCar } from "./car.js";

console.log("******************* before change *********************");
printCar();
changeCar('Toyota', 'Corolla', 2020);

console.log("******************* after change *********************");
printCar();
