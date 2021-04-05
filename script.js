// function test(){
//     document.write('hello')
//     document.write('<br>')
// }
// test()

// 1) створити функцію яка приймає масив та виводить його


// function arrOut(yourArray) {
//     document.write(`Your array ${yourArray}`);
//
// }
//
// arrOut([1, 2, 3, 4, 5])


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function randomArray() {
//     let random = [];
//     for ( let i = 0; i < 10; i++ ) {
//        random.push(Math.round(Math.random() * 100));
//     }
//     return random;
// }
// console.log(randomArray());


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// function get_min(a,b,c)
// {
//     if ((a <= b) && (a <= c)) {
//         return a;
//     } else if ((b <= a) && (b <= c)) {
//         return b;
//     } else {
//         return c;
//     }
// }
// console.log(get_min(50,24,32))
// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function get_max(a,b,c)
// {
//     if ((a >= b) && (a >= c)) {
//         return a;
//     } else if ((b >= a) && (b >= c)) {
//         return b;
//     } else {
//         return c;
//     }
// }
// console.log(get_max(100,2,3))
// 5) створити функцію яка повертає найбільше число з масиву
// function findMax(array) {
//     let max = 0;
//     let a = array.length;
//     for (let i = 0; i < a; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max;
// }
// console.log(findMax([1,2,3,4,5,]));


// 6) створити функцію яка повертає найменьше число з масиву
//
// function findMin(array) {
//     let min = array[0];
//     let a = array.length;
//     for (let i = 0; i < a; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     return min;
// }
// console.log(findMin([1,2,3,4,5,]));


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function sumArray(arr) {
//     let array = arr;
//     let sum = 0;
//
//     for (let i = 0; i < array.length; i++) {
//
//         sum += arr[i];
//     }
//     return sum;
// }
//
// console.log(sumArray([1,1,1,1]));
//


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function avrArray(arr) {
//     let array = arr;
//     let avr = 0;
//
//     for (let i = 0; i < array.length; i++) {
//
//        avr = avr += arr[i] / array.length;
//     }
//     return avr;
// }
//
// console.log(avrArray([1,2,3,4]));


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// //     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function forIn() {
//     let arr1 = [];
//     for (let item of ob) {
//         for (const i in item) {
//             arr1.push(i);
//         }
//     }
//
//     console.log(arr1);
// }
// let ob = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// forIn(ob);


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
// function forIn() {
//     let arr1 = [];
//     for (let item of ob) {
//         for (const i in item) {
//             arr1.push(item[i]);
//         }
//     }
//
//     console.log(arr1);
// }
// let ob = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// forIn(ob);
//
//
//
//
//
//
//


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// function sumArray(arr1 ,arr2) {
//     let arr3 = []
//     for (let i = 0; i < arr1.length; i++) {
//         arr3.push(arr1[i] + arr2[i])
//     }
//     return arr3;
// }
//
//
//
// console.log(sumArray([1,2,3,4,5,5], [1,2,3,4,5]))


//
// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function get_max() {
//     let min = arguments [0] ;
//     let max = arguments [0];
//
//         for (const number of arguments) {
//             if(number > max) max = number;
//             if(number < min) min = number;
//         }
//
//         return max;
// }
//
// console.log('max number '+ get_max(1,2,3,5,998))


// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.


// function forIn(inputOb) {
//
//
//     let arr1 = [];
//     let b = prompt('if you want get key in arr input 1 ' +
//         '   and if you want get object in arr input 2');
//     if (b == 1) {
//         for (let item of inputOb) {
//             for (const i in item) {
//                 arr1.push(i);
//             }
//         }
//
//
//     }  else if (b == 2 ) {
//         for (let item of ob) {
//             for (const i in item) {
//                 arr1.push(item[i]);
//             }
//         }
//     }
//
//
//     document.write(`${arr1}`);
// }
//
// let ob = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// console.log(ob)
// forIn(ob);


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// const a = [1, 2, 3, 4];
//
// function swap(array, i) {
//     if (i > array.length-2) throw 'Invalid index';
//     [a[i], a[i + 1]] = [a[i + 1], a[i]];
// }
//
// swap(a, 2);
//
// console.log(a);


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//

//
// function startZero(arr) {
//     if(arr.length > 2 && arr.length<100) {
//         for (let i = arr.length; i>=0; i--) {
//             if (arr[i] === 0) {
//                 arr.splice(i ,1)
//                 arr.push(0);
//
//             }
//
//         }
//         return arr;
//     }
//
//
// }
//
// console.log(startZero([1, 0, 6, 0, 3]))
// console.log(startZero([0,1,2,3,4]))
// console.log(startZero([0,0,1,0]))


// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
//
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// const trimming = (str) => {
//     const   arr = [];
//     for (const i of str.split(' ')) {
//         if (i){
//             arr.push(i)
//         }
//     }
//     return arr.join(' ')
// }
// console.log(trimming(n1))
// console.log(trimming(n2))
// console.log(trimming(n3))
//


// ============================================================================================
//
//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
//
// function addDiv(){
//     let div = document.createElement('div');
//     div.innerText = 'Hello owu';
//     document.body.appendChild(div);
// }
//
// addDiv()


// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

//
// function addDiv(textDiv,typeElement){
//
//     let typeEl = document.createElement(typeElement);
//     typeEl.innerHTML = typeElement;
//     typeEl.innerText = textDiv;
//
//     document.body.appendChild(typeEl);
// }
//
// addDiv('Hello owu' , 'strong')
//


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці









// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
