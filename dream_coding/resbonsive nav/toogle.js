const tooglebtn = document.querySelector(".toog");
const menu = document.querySelector('.Menu');
const icon = document.querySelector('.icon')

tooglebtn.addEventListener('click', () => {

    menu.classList.toggle('active');
    icon.classList.toggle('active');
});