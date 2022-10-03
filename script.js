const links = document.querySelectorAll('li');
const light = document.querySelectorAll('.nav-light');

function moveLight({offsetLeft, offsetWidth}) {
    light.style.left = `${offsetLeft - offsetWidth / 4}px`;
}

function activeLink(linkActive){
    links.forEach((link) => {
        link.classList.remove('active');
        linkActive.classList.add('active');
    })
}

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        moveLight(event.target);
        activeLink(link)
    })
})