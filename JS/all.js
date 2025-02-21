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

  const leftmove1 = document.querySelector('.leftmove1');
  const rightmove1 = document.querySelector('.rightmove1');
  const leftmove2 = document.querySelector('.leftmove2');
  const rightmove2 = document.querySelector('.rightmove2');
  const leftmove3 = document.querySelector('.leftmove3');
  const rightmove3 = document.querySelector('.rightmove3');
  const leftmove4 = document.querySelector('.leftmove4');
  const rightmove4 = document.querySelector('.rightmove4');
  const leftmove5 = document.querySelector('.leftmove5');
  const rightmove5 = document.querySelector('.rightmove5');
  




  observer.observe(leftmove1);
  observer.observe(rightmove1);
  observer.observe(leftmove2);
  observer.observe(rightmove2);
  observer.observe(leftmove3);
  observer.observe(rightmove3);
  observer.observe(leftmove4);
  observer.observe(rightmove4);
  observer.observe(leftmove5);
  observer.observe(rightmove5);
 
  
