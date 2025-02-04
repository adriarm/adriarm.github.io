let scrollAmount = 0;
function moveGallery(direction) {
    const gallery = document.getElementById("gallery");
    const scrollDistance = 220; // Adjust based on image width + margin
    scrollAmount += direction * scrollDistance;
    gallery.style.transform = `translateX(${-scrollAmount}px)`;
}