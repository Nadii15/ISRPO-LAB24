// console.log("\n=== Деструктуризация массивов ===");
// const colors =["red","green","blue"];
// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1,color2);

// const[firstColor,secondColor,thirdColor] = colors;
// console.log(firstColor,secondColor,thirdColor);

// const[primary, , tertiary] = colors;
// console.log(primary,tertiary);

// const [c1,c2,c3,c4 = "yellow" ] = colors;
// console.log(c4);

// console.log("Деструктуризация объектов");
// function printUserOld(user) {
//   console.log(`Имя: ${user.name}`);
//   console.log(`Возраст: ${user.age}`);
//   console.log(`Город: ${user.city}`);
// }

// function printUser({ name, age, city }) {
//   console.log(`Имя: ${name}`);
//   console.log(`Возраст: ${age}`);
//   console.log(`Город: ${city}`);
// }


// const userName = user.name;
// const userAge = user.age;
// console.log(userName,userAge);

// const{name,age,city} =user;
// console.log(name,age,city);

// const{name: fullName,age: years} = user;
// console.log(fullName,years);

// const{name:personName,country = "Россия"} = user;
// console.log(personName,country);

// console.log("Деструктуризация в параметрах");

// ===== 6.5. Практическое задание =====
// console.log('===== Практическое задание: Деструктуризация объекта product =====');
// const product = {
//   name: 'Ноутбук',
//   price: 75000,
//   category: 'Электроника',
//   inStock: true
// };
// const { name, price, category, inStock } = product;
// console.log('Деструктуризация объекта:');
// console.log(`Название: ${name}`);
// console.log(`Цена: ${price} ₽`);
// console.log(`Категория: ${category}`);
// console.log(`В наличии: ${inStock ? 'Да' : 'Нет'}`);
// console.log();
// function printProduct({ name, price, category, inStock }) {
//   console.log('Информация о продукте (через функцию с деструктуризацией):');
//   console.log(`Название: ${name}`);
//   console.log(`Цена: ${price} ₽`);
//   console.log(`Категория: ${category}`);
//   console.log(`В наличии: ${inStock ? 'Да' : 'Нет'}`);
// }
// printProduct(product);




//7
/*
console.log('Spread для массивов');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log('Объединённый массив:', combined);

const copy = [...arr1];
console.log('Копия массива:', copy);

const extended = [0, ...arr1, 7, 8];
console.log('Расширенный массив:', extended);
*/



/*
console.log('Spread для объектов');

const person = {
  name: 'Иван',
  age: 30
};

const address = {
  city: 'Санкт-Петербург',
  street: 'Невский проспект'
};

const fullInfo = { ...person, ...address };
console.log('Полная информация:', fullInfo);

const personCopy = { ...person };
console.log('Копия объекта:', personCopy);

const updated = { ...person, age: 31, occupation: 'Developer' };
console.log('Обновлённый объект:', updated);
*/



/*
console.log('Rest оператор');

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log('Сумма 1,2,3:', sum(1, 2, 3));
console.log('Сумма 1,2,3,4,5:', sum(1, 2, 3, 4, 5));

const numbers = [10, 20, 30, 40, 50];
const [first, second, ...rest] = numbers;
console.log('Первое число:', first);
console.log('Второе число:', second);
console.log('Остальные числа:', rest);
*/


// ===== 7.5. Практическое задание =====
// console.log('===== Практическое задание: Spread/Rest =====');


// const array1 = [5, 10, 15];
// const array2 = [20, 25, 30];
// console.log('Массив 1:', array1);
// console.log('Массив 2:', array2);


// const mergedArray = [...array1, ...array2];
// console.log('Объединённый массив:', mergedArray);

// function findMax(...numbers) {
//   return Math.max(...numbers);
// }

// console.log('Максимум из 5, 10, 15:', findMax(5, 10, 15));
// console.log('Максимум из 100, 50, 75, 200:', findMax(100, 50, 75, 200));
// console.log('Максимум из объединённого массива:', findMax(...mergedArray));


// const product = {
//   name: 'Смартфон',
//   price: 25000,
//   brand: 'Samsung'
// };

// const specs = {
//   screen: '6.5"',
//   ram: '8GB',
//   storage: '128GB'
// };

// const fullProduct = { ...product, ...specs };
// console.log('Объединённый объект продукта:', fullProduct);

//8

// import { greet, add, PI } from "./utils.js";

// console.log("Модули");
// console.log(greet("Алексей"));
// console.log("5 + 3 =", add(5, 3));
// console.log("Значение PI:", PI);

// import { multiply as умножить } from "./utils.js";
// console.log("4 * 7 =", умножить(4, 7));

// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение:", Utils.multiply(3, 9));

// import sayHello from "./utils.js";
// console.log(sayHello());




// ===== 8.5. Практическое задание =====
console.log('\n===== Практическое задание: Модуль math.js =====');

import { square, cube, E } from "./math.js";

console.log('Функции из модуля math.js:');
console.log('square(5) =', square(5));
console.log('cube(3) =', cube(3));
console.log('Значение E =', E);
console.log('square(7) =', square(7));
console.log('cube(4) =', cube(4));
console.log('E * 2 =', E * 2);



