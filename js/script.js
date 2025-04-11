function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

// Function to handle the form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    form.addEventListener('submit', function(event) {
      let isValid = true;
  
      // Validate Name
      if (nameInput.value.trim() === '') {
        displayError(nameInput, 'Name is required.');
        isValid = false;
      } else if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
        displayError(nameInput, 'Name can only contain letters and spaces.');
        isValid = false;
      } else {
        clearError(nameInput);
      }
  
      // Validate Email
      if (emailInput.value.trim() === '') {
        displayError(emailInput, 'Email is required.');
        isValid = false;
      } else if (!isValidEmail(emailInput.value)) {
        displayError(emailInput, 'Please enter a valid email address.');
        isValid = false;
      } else {
        clearError(emailInput);
      }
  
      // Validate Message
      if (messageInput.value.trim() === '') {
        displayError(messageInput, 'Message is required.');
        isValid = false;
      } else {
        clearError(messageInput);
      }
  
      if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
      }
    });
  
    function isValidEmail(email) {
      // Basic email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function displayError(inputElement, errorMessage) {
      const errorDivId = inputElement.id + '-error';
      let errorDiv = document.getElementById(errorDivId);
      if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = errorDivId;
        errorDiv.className = 'error-message text-danger'; // You can style this class
        inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
      }
      errorDiv.textContent = errorMessage;
    }
  
    function clearError(inputElement) {
      const errorDiv = document.getElementById(inputElement.id + '-error');
      if (errorDiv) {
        errorDiv.textContent = '';
      }
    }
  });

// Function to handle the scroll event and highlight the active link
  document.addEventListener('DOMContentLoaded', function() {
    // Variable to store navbar element
    const navbar = document.getElementById('mainNav');
    
    // Function to handle scroll event
    function handleScroll() {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initialize on page load
    handleScroll();
    
    // Active link highlighting on scroll
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    function highlightNavLink() {
      let scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    }
    
    // Call on scroll
    window.addEventListener('scroll', highlightNavLink);
  });
