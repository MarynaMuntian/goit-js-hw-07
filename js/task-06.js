// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const form = document.getElementById('validation-input');

const validation = (event) => {
    
    if (form.value.length === Number(form.getAttribute('data-length'))) {
        form.classList.add('valid');
        form.classList.remove('invalid');
    }

    else {
        form.classList.add('invalid');
        form.classList.remove('valid');
    }
}

form.addEventListener("blur", validation);
