const button = document.querySelector('button');
const form = document.querySelector('form');
const password = document.querySelector('#password');
const passConfirm = document.querySelector('#confirm');
const passwords = [password, passConfirm];

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    if (password.value !== passConfirm.value) {
        password.focus();
        password.setCustomValidity('Passwords did not match.');
        password.reportValidity();
        passwords.forEach(pass => {
            pass.classList.add('error');
            pass.value = null;
            console.log(document.activeElement.getAttribute('type'));
        });
        return;
    }
    setTimeout(() => form.submit(), 400);
})

document.addEventListener('keyup', (e) => {
    if(document.activeElement.getAttribute('type') === 'password') {
        e.target.classList.remove('error');
        password.setCustomValidity('');
    }
});

button.addEventListener('click', () => {
    button.classList.add('clicked');
});

button.addEventListener('transitionend', () => {
    button.classList.remove('clicked');
})

