  const clients = [
    {
      name: "Client 1",
      text: "Exceptional tools, exceeded expectations in quality and durability. Reliable online store with on-time delivery – my top choice for all tool needs"
    },
    {
      name: "Client 2",
      text:"I highly recommend this online tools store to anyone in need of top-notch products and a seamless shopping experience. Their combination of high-quality tools and punctual delivery has made them my go-to destination for all my tool needs. Keep up the excellent work"
    },
    {
      name: "Client 3",
      text: "I stumbled upon this fantastic online tools store that not only offers tools at reasonable prices but also provides the convenience of ordering online and collecting in-store for Coimbatore. A great find for those looking for affordability and convenience in the Coimbatore area!"
    }
  ];
  
  const clientName = document.querySelector('.client-name');
  const clientText = document.querySelector('.client-text');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const paginationContainer = document.querySelector('.pagination');
  
  let currentIndex = 0;

  function updateReview() {
    const client = clients[currentIndex];
    clientName.textContent = client.name;
    clientText.textContent = client.text;

    // Update the pagination buttons to highlight the current page
    const pageButtons = paginationContainer.querySelectorAll('button');
    pageButtons.forEach((btn, index) => {
      btn.classList.toggle('active', index === currentIndex);
    });
  }

  function createPagination() {
    paginationContainer.innerHTML = ''; // Clear existing pagination buttons
    clients.forEach((client, index) => {
      const button = document.createElement('button');
      button.classList.add('pagination-btn');
      button.addEventListener('click', () => {
        currentIndex = index;
        updateReview();
      });
      paginationContainer.appendChild(button);
    });
  }
  setInterval(() => {
    currentIndex = (currentIndex + 1) % clients.length; // Increment the index and wrap around if needed
    updateReview();
  }, 3000);

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % clients.length; 
    updateReview();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + clients.length) % clients.length; 
    updateReview();
  });

  // Initialize the pagination
  createPagination();
  
  // Initialize the first review display
  updateReview();
