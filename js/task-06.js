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
