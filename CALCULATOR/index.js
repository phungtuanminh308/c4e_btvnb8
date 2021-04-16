// function logArray(array) {
//     for (element of array) {
//         console.log(element)
//     }
// }
// //trong () la 1 parameter - tham so truyen vao
// let arrNum = [1, 2, 3, 4, 5, 6];
// let arrString = [`mot`, `hai`, `ba`];
// let arr = [1, 2, `ba`, `bon`, 5, 6, { name: `so thu 7` }, true, null]
// logArray(arrNum);
// logArray(arrString);
// logArray(arr);

// function themPhanTuCuoi(array, cuoiMoi) {
//     array[array.length] = cuoiMoi;
//     return array
// }

// let arr = [1, 2, 3, 5, 6];
// let newArr = themPhanTuCuoi(arr, 10)
// console.log(newArr)

// function kiemTra (string) {
//     if (string) {
//         console.log(`Ban dung roi`)
//     } else {
//         console.log(`ham rong`)
//     }
// }

// let chu = `a`;
// kiemTra(chu)

// setTimeout(function,3000)
let day = [`MO`, `TU`, `WE`, `TH`, `FR`, `SA`, `SU`];
setInterval(() => {
    document.getElementById('day').innerText = day[new Date().getDay() - 1];
    document.getElementById('hour').innerText = new Date().getHours();
    document.getElementById('minute').innerText = new Date().getMinutes();
    document.getElementById('second').innerText = new Date().getSeconds();
}, 1000);


