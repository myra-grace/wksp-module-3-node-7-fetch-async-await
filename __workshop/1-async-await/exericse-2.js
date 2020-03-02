// Exercise 2
// function addPromise(num){
//     return new Promise(resolve => {
//         doubleAfter2Seconds(10)
//             .then((a) => {
//                 doubleAfter2Seconds(20)
//                     .then((b) => {
//                         doubleAfter2Seconds(30).then((c) => {
//                             resolve(x + a + b + c);
//                         })
//                 })
//         })
//     });
// }

// addPromise(10).then((sum) => {
//     console.log(sum);
// });

// ---------- ANSWER ----------
function doublesLater(num){
    return new Promise(resolve => {
        setTimeout(() => {
            return (num * 2);
        }, 2000);
    })
}

addPromise = async (num, num2, num3) => {
    let first = await doublesLater(num);
    let second = await doublesLater(num2);
    let third = await doublesLater(num3);

    return (first + second + third);
};

let test = addPromise(12, 14, 8);
console.log(test);