
import '../styles/styles.css';
if (module.hot) {
    module.hot.accept()
}
let header = document.getElementById('id');
let overlay = document.getElementById('overlay');
let openMenu = document.getElementById('open-menu');
let closeMenu = document.getElementById('close-menu');
openMenu.addEventListener('click', () => {

    overlay.classList.add('show-menu')

})
closeMenu.addEventListener('click', () => {

    overlay.classList.remove('show-menu')

})


