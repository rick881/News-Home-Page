const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.nav-bar')
const close = document.querySelector('.close')
const overlay = document.querySelector('.overlay') 

menu.addEventListener('click', (e) => {
    sidebar.style.width = 15.5 + 'rem';
    overlay.style.display = 'block';
})

close.addEventListener('click', (e) => {
    sidebar.style.width = 0;
    overlay.style.display = 'none';
})
    
