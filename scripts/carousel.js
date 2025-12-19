// 1. Find ALL carousels on the page (Projects, Work, etc.)
const carousels = document.querySelectorAll('.carousel-wrapper');

// 2. Loop through each carousel individually
carousels.forEach(wrapper => {
    
    // 3. Find the specific elements INSIDE this current wrapper
    const track = wrapper.querySelector('.carousel-track');
    const nextBtn = wrapper.querySelector('.carousel-btn.next');
    const prevBtn = wrapper.querySelector('.carousel-btn.prev');

    if (nextBtn && prevBtn && track) {
        
        nextBtn.addEventListener('click', () => {
            // Calculate width dynamically in case the window was resized
            const slideWidth = track.clientWidth;
            track.scrollBy({ left: slideWidth, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            const slideWidth = track.clientWidth;
            track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        });
    }
});