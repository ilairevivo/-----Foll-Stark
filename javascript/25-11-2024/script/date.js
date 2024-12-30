// const now = new Date();
// console.log(now);
// console.log(typeof now);
// console.log(now.toString());

// // year, months, day, times
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());

// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());

// console.log(new Date('February 1 2022'));
// console.log(new Date('2008-05-13'));



// const parisTime = new Date();
// parisTime.setHours(parisTime.getHours() + 1);

// console.log(parisTime.toLocaleTimeString());

setInterval(() => {
    const time = document.getElementById("time");
    time.innerHTML = new Date().toLocaleTimeString({ hour12: false });
}, 1000);


setInterval(() => {
    const bancoktim = new Date();
    bancoktim.setHours(bancoktim.getHours() + 5);
    const el = document.getElementById("time1");
    el.innerHTML = bancoktim.toLocaleTimeString();

 
}, 1000);














