// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

const liEl = document.querySelectorAll('li.item');
const categoriesQuantity = () => `В списке ${liEl.length} категории`;
console.log(categoriesQuantity());

const categories = document.querySelectorAll('h2');
const categoriesName = categories.forEach(category => console.log(`Категория: ${category.textContent}`));

const quantity = document.querySelectorAll('li.item > ul');
const elQuantity = quantity.forEach(el => console.log(`Количество элементов: ${el.children.length}`));