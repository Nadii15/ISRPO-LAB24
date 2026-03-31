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
console.log('===== Практическое задание: Деструктуризация объекта product =====');
const product = {
  name: 'Ноутбук',
  price: 75000,
  category: 'Электроника',
  inStock: true
};
const { name, price, category, inStock } = product;
console.log('Деструктуризация объекта:');
console.log(`Название: ${name}`);
console.log(`Цена: ${price} ₽`);
console.log(`Категория: ${category}`);
console.log(`В наличии: ${inStock ? 'Да' : 'Нет'}`);
console.log();
function printProduct({ name, price, category, inStock }) {
  console.log('Информация о продукте (через функцию с деструктуризацией):');
  console.log(`Название: ${name}`);
  console.log(`Цена: ${price} ₽`);
  console.log(`Категория: ${category}`);
  console.log(`В наличии: ${inStock ? 'Да' : 'Нет'}`);
}
printProduct(product);