//your JS code here. If required.
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');

  // Configure the Intersection Observer
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1, // Trigger the callback when 10% of the image is visible
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target;
        const src = image.getAttribute('data-src');

        // Load the image asynchronously
        image.setAttribute('src', src);
        image.removeAttribute('data-src');

        // Stop observing the image
        observer.unobserve(image);
      }
    });
  }, observerOptions);

  // Start observing the images
  images.forEach((image) => {
    imageObserver.observe(image);
  });
}

// Call the lazyLoadImages function when the page is loaded
window.addEventListener('load', lazyLoadImages);