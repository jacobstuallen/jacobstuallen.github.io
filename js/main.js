/**
 * JSA Climate Website - Unified JavaScript
 * Handles all interactive components
 */

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
}

// Dropdown Toggle for Mobile
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (window.innerWidth <= 767) {
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            if (toggle) {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                });
            }
        });
    }
}

// Image Gallery/Viewer
function initImageViewer() {
    const viewers = document.querySelectorAll('.image-viewer');
    
    viewers.forEach(viewer => {
        const buttons = viewer.querySelectorAll('.image-controls button');
        const images = viewer.querySelectorAll('.image-display img');
        
        if (buttons.length === 0 || images.length === 0) return;
        
        // Show first image by default
        if (images[0]) {
            images[0].classList.add('active');
        }
        // Make sure first button has active state
        if (buttons[0]) {
            buttons[0].classList.add('active');
        }
        
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Hide all images
                images.forEach(img => img.classList.remove('active'));
                
                // Show selected image
                if (images[index]) {
                    images[index].classList.add('active');
                }
                
                // Update button states
                buttons.forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
            });
        });
    });
}

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initDropdowns();
    initImageViewer();
    
    // Re-initialize dropdowns on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            initDropdowns();
        }, 250);
    });
});
