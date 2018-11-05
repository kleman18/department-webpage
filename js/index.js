document.querySelector('.form button[type=submit]').addEventListener('click', submitForm);

function submitForm(e) {
    const form = document.querySelector('.form');
    if (form.checkValidity()) {
        e.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.querySelector('.message-box').innerHTML = 
                '<h3>Дякуємо за ваше повідомлення!</h3>';
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
                document.querySelector('.message-box').innerHTML = 'Error!';
            }
        }
        xhr.open('POST', 'form.php', true);
        const form = document.querySelector('.form');
        const data = new FormData(form);
        xhr.send(data);
    }
}