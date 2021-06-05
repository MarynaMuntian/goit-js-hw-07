const liEl = document.querySelectorAll('li.item');
const categoriesQuantity = () => `В списке ${liEl.length} категории`;
console.log(categoriesQuantity());

const categories = document.querySelectorAll('h2');
const categoriesName = categories.forEach(category => console.log(`Категория: ${category.textContent}`));
const quantity = document.querySelector('.item').lastElementChild.children;
const elQuantity = quantity.forEach(el => console.log(`Количество элементов: ${ el.length }`));

