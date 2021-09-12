const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

const opacity = 0.4;

imgs.forEach(img => img.addEventListener('click', imgClick));

//set first image opacity
imgs[0].style.opacity = opacity;

function imgClick (e) {
    imgs.forEach(img => (img.style.opacity = 1));
    current.src = e.target.src;

    //fade in animation
    current.classList.add('fade-in');

    //remove fade in class after .5 sec
    setTimeout(()=> current.classList.remove('fade-in'), 500);

    //change opacity to slightly transparent
    e.target.style.opacity = opacity;
}