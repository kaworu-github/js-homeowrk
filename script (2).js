console.log("завдання 1");

function filterArr(arr) {
    let resault = arr
    resault.sort(function (a, b) {
        return a - b
    })
    return resault
}
const arr = [4, 2, 7, 5, 1, 3, 8]
let sortResaultArr = filterArr(arr)
console.log(sortResaultArr);

console.log(" ");

console.log("завдання 2");

function numbFor() {
    for (let i = 1; i < 42; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
        
    }
}
numbFor()

console.log(" ");

console.log("завдання 3 , число-паліндром");

let plStr = "1221";
function checkIsPalindrom() {
    let plStrArr = plStr.split("");
    if (plStrArr.includes(0) == plStr.includes(0) && plStrArr.includes(-1) == plStr.includes(-1)) {
        console.log("це число є паліндромом");
    }else{
        console.log("це число не є паліндромом");
    }
    console.log(plStrArr);
}
checkIsPalindrom()

console.log(" ");

console.log("завдання 4");

function logNumbsThree() {
    for (let i = 1; i <= 33; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }        
    }
}
logNumbsThree()

console.log(" ");

console.log("завдання 5");

function checkKvadratNumb(number) {
    if (number < 0) {
        return false;
    }
    let sqrt = Math.sqrt(number);
    return sqrt
}
let someNumb = Math.random() * 81;
let resault = checkKvadratNumb(someNumb);

if (resault) {
    console.log(someNumb + true);
}else{
    console.log(someNumb + false);
}

console.log(" ");

console.log("завдання 6");
function checkArr() {
    let minValueMyArr = myArr[0];
    let maxValueMyArr = myArr[0];
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] < minValueMyArr) {
            minValueMyArr = myArr[i];
        }else if (myArr[i] > maxValueMyArr) {
            maxValueMyArr = myArr[i];
        }
    }
    return {minValueMyArr, maxValueMyArr};
}
const myArr = [1, 3, 2, 7, 5, -5];
const resaultArr = checkArr(myArr);
console.log(resaultArr);

console.log(" ");

console.log("завдання 7 (ласт по дз)");

const arrey = [1, 3, 1, 5, 2, 5, 9, 7];
function duobleArrdelete() {
    const arr = []
    for (let i = 0; i < arrey.length; i++) {
        if (arrey[i] === arrey[i]) {
            arr.push(arrey[i])
        }
    }
    return arr;
}
console.log(arr);
console.log("зробив не зовсім правильно =( ~");