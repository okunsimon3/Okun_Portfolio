// mobile nav bar

function openNav() {
    document.querySelector('nav').classList.add('open')
}

function closeNav() {
    document.querySelector('nav').classList.remove('open')
}

// Loading div
setTimeout(function() {
    var movingDiv = document.querySelector('.moving-div');
    movingDiv.classList.add('move-down');

    // Remove the div from the DOM after it moves
    setTimeout(function() {
      movingDiv.remove();
    }, 2000); // 2 seconds, adjust if needed
  }, 400); // Adjust timing as needed

// Lightbox
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const closeButton = document.createElement('button');
closeButton.innerHTML = '&times;';
closeButton.classList.add('close-btn');
lightbox.appendChild(closeButton);


const images = document.querySelectorAll('.item-card img')
images.forEach(image => {
    image.addEventListener('click', e=> {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild && lightbox.firstChild !== closeButton) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.insertBefore(img, closeButton);
    })
});

closeButton.addEventListener('click', () => {
    lightbox.classList.remove('active');
})

