let counterValue = document.getElementById('value');
let value = Number(counterValue.textContent);

const increment = () => {
    value += 1;
    counterValue.innerHTML = value;
};

const decrement = () => {
    value -= 1;
    counterValue.innerHTML = value;
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener('click', decrement);

const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener('click', increment);