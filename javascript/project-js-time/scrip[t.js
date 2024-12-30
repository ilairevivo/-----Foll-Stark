setInterval(() => {
    const time = document.getElementById("time");
    time.innerHTML = new Date().toLocaleTimeString({ hour12: false });
}, 1000);


setInterval(() => {
    const brazil = new Date();
    brazil.setHours(brazil.getHours() + 7);
    const el = document.getElementById("time1");
    el.innerHTML = brazil.toLocaleTimeString();


}, 1000);

setInterval(() => {
    const brazil = new Date();
    brazil.setHours(brazil.getHours() - 1);
    const el = document.getElementById("time3");
    el.innerHTML = brazil.toLocaleTimeString();


}, 1000);


setInterval(() => {
    const brazil = new Date();
    brazil.setHours(brazil.getHours() - 1);
    const el = document.getElementById("time4");
    el.innerHTML = brazil.toLocaleTimeString();


}, 1000);
