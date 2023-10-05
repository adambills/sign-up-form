const button = document.querySelector('button');
const form = document.querySelector('form');


form.addEventListener('submit', (e)=> {
    e.preventDefault();
    setTimeout(() => {
        form.submit();
    }, 400);
})

button.addEventListener('click', () => {
    button.classList.add('clicked');
});

button.addEventListener('transitionend', () => {
    button.classList.remove('clicked');
})

