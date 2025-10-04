const images = document.querySelectorAll('.clickable-img');
const overlay = document.getElementById('imgOverlay');
const overlayImg = document.getElementById('overlayImg');

images.forEach(img => {
    img.addEventListener('click', () => {
        overlay.style.display = 'flex';
        overlayImg.src = img.src;
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    overlayImg.src = '';
});
