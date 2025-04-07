// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const darkToggle = document.getElementById('darkToggle');
  
  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
    
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  }
});

// Enhanced Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuToggle && navLinks) {
    // Initialize aria attributes
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mobileMenuToggle.setAttribute('aria-controls', 'nav-links');
    mobileMenuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    
    mobileMenuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const isExpanded = navLinks.classList.toggle('show');
      mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
      mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navLinks.contains(e.target) && e.target !== mobileMenuToggle) {
        navLinks.classList.remove('show');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.classList.remove('active');
      }
    });

    // Close menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.classList.remove('active');
      });
    });
  }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) navLinks.classList.remove('show');
        
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Rest of your existing code (form handling, animations, etc.) remains unchanged
