let a;
let countSeconds = 0;
function start() {
    // get value
    let inputTag = document.getElementsByClassName("content--input__value");
    console.log(inputTag);
    console.log(inputTag[0].value);


    let count = document.getElementById("count");
    countSeconds = Number(inputTag[0].value);
    count.innerText = countSeconds;

    a = setInterval(() => {
        countSeconds--;
        count.innerText = countSeconds;
    }, 1000);
}
function stop() {
    clearInterval(a);
}
