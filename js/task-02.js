// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const list = ingredients.forEach(ingredient => {
//   let item = document.createElement('li');
//   item.textContent = ingredient;  
// document.getElementById('ingredients').append(item);
// });

const addList = (ingredients) => {
  const ingredientsList = ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    return item;
  })

  document.getElementById('ingredients').append(...ingredientsList);
}

addList(ingredients);