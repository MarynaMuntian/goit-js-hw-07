// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.getElementById('gallery');

// const addList = images.forEach(image => {
//   const { url, alt } = image;
//   list.insertAdjacentHTML('afterbegin', `<li><img src = "${url}" alt = "${alt}"></img></li>`);
// })

const addList = images.map(image => {
  const { url, alt } = image;
  list.insertAdjacentHTML('afterbegin', `<li><img src = "${url}" alt = "${alt}"></img></li>`);
});

list.style.display = 'flex';
list.style.alignItems = 'center';
list.style.listStyle = 'none';
list.style.margin = '-15px 0 0 -15px';

const items = document.querySelectorAll('li');
items.forEach(item => {
  item.style.margin = '15px 0 0 15px';
  item.style.flexBasis = 'calc(100% / 3 - 15px)';
});

const imgs = document.querySelectorAll('img');
imgs.forEach(img => img.style.width = '320px');