document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.composition-mosaico');
    const anchors = document.querySelectorAll('.composition-mosaico__tassello');
 
    anchors.forEach(anchor => {
        anchor.addEventListener('mouseover', function () {
            // Add the 'active' class to the container to change positions
            container.classList.add('composition-mosaico--active');
           
            const bgImage = this.getAttribute('data-bg');
            anchors.forEach(a => {
                a.classList.add('remove-after'); // Remove ::after content
                a.style.backgroundImage = `url(https://www.sicis.com/themes/custom/sicis/assets/imgs/homepage/mosaico/bg/${bgImage}.webp)`;
            });
        });
 
        anchor.addEventListener('mouseleave', function () {
            // Remove the 'active' class to reset positions
            container.classList.remove('composition-mosaico--active');
           
            anchors.forEach(a => {
                a.classList.remove('remove-after'); // Restore ::after content
                const originalBgImage = a.getAttribute('data-bg');
                a.style.backgroundImage = `url(https://www.sicis.com/themes/custom/sicis/assets/imgs/homepage/mosaico/bg/${originalBgImage}.webp)`;
            });
        });
    });
});