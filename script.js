let imagesLoaded = false;
let timeoutElapsed = false;

//ensure images loaded
window.addEventListener('load', function() {
    imagesLoaded = true;
    if (timeoutElapsed) {
        hideLoadingGraphic();
    }
});

// Ensure loading graphic displays for at least 3 seconds
setTimeout(function() {
    timeoutElapsed = true;
    if (imagesLoaded) {
        hideLoadingGraphic();
    }
}, 4500);

function hideLoadingGraphic() {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');
    
    // Hide loading graphic
    loading.style.display = 'none';
    
    // Show the content (with optional fade-in effect)
    content.style.opacity = '1';
}