const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Check if the element is in view
      if (entry.isIntersecting) {
        // Set a timeout to add the 'visible' class after a 5-second delay
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 1000); // 5000 milliseconds = 5 seconds
  
        // Optionally, you can unobserve the element once it's visible
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // Trigger when at least 50% of the element is visible
  });
  const leftmove9 = document.querySelector('.leftmove9');
  const rightmove9 = document.querySelector('.rightmove9');
  const leftmove10 = document.querySelector('.leftmove10');
  const rightmove10 = document.querySelector('.rightmove10');
  const bottommove2 = document.querySelector('.bottommove2');


  observer.observe(leftmove9);
  observer.observe(rightmove9);
  observer.observe(leftmove10);
  observer.observe(rightmove10);
  observer.observe(bottommove2);