const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = ingredients.forEach(ingredient => {
  let item = document.createElement('li');
  item.textContent = ingredient;  
document.getElementById('ingredients').append(item);
});
