
// export function greet(name) {
//   return `Привет, ${name}!`;
// }

// export function add(a, b) {
//   return a + b;
// }

// export function multiply(a, b) {
//   return a * b;
// }

// export const PI = 3.14159;

// export default function sayHello() {
//   return "Привет из модуля utils!";
// }

//9

/*
console.log("Промисы");

// Создание простого промиса:
const simplePromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Операция выполнена успешно!");
  } else {
    reject("Произошла ошибка!");
  }
});


simplePromise
  .then((result) => console.log("Результат:", result))
  .catch((error) => console.log("Ошибка:", error));

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Прошло ${ms} миллисекунд`);
    }, ms);
  });
}

delay(1000)
  .then((message) => console.log(message));


function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({
          id: userId,
          name: "Иван Иванов",
          email: "ivan@example.com"
        });
      } else {
        reject("Неверный ID пользователя");
      }
    }, 1500);
  });
}

fetchUserData(1)
  .then((user) => console.log("Пользователь:", user))
  .catch((error) => console.log("Ошибка:", error));


function step1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Шаг 1 завершён"), 500);
  });
}

function step2(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершён`), 500);
  });
}

function step3(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершён`), 500);
  });
}

step1()
  .then((result1) => step2(result1))
  .then((result2) => step3(result2))
  .then((finalResult) => console.log("Финальный результат:", finalResult))
  .catch((error) => console.log("Ошибка в цепочке:", error));
*/


// ===== 9.3. Практическое задание =====
console.log('===== Практическое задание: Promises =====');

function checkInventory(productName, inStock) {
  return new Promise((resolve, reject) => {
    // Имитация проверки на складе
    setTimeout(() => {
     
      if (inStock) {
        resolve(`Товар "${productName}" доступен на складе. Можно заказывать!`);
      } 
      
      else {
        reject(`Товар "${productName}" отсутствует на складе. Пожалуйста, выберите другой товар.`);
      }
    }, 1000);
  });
}

// Тест 1: 
console.log('\nТест 1: Проверка наличия товара (есть на складе)');
checkInventory('Ноутбук ASUS', true)
  .then((message) => {
    console.log('✓ Успех:', message);
  })
  .catch((error) => {
    console.log('✗ Ошибка:', error);
  });

// Тест 2: 
console.log('\nТест 2: Проверка наличия товара (нет на складе)');
checkInventory('iPhone 15', false)
  .then((message) => {
    console.log('✓ Успех:', message);
  })
  .catch((error) => {
    console.log('✗ Ошибка:', error);
  });

// Тест 3: 
setTimeout(() => {
  console.log('\nТест 3: Проверка ещё одного товара');
  checkInventory('Клавиатура Logitech', true)
    .then((message) => {
      console.log('✓ Успех:', message);
    })
    .catch((error) => {
      console.log('✗ Ошибка:', error);
    });
}, 2000);