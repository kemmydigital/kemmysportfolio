// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const darkToggle = document.getElementById('darkToggle');
  
  // Toggle dark mode
  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Save preference to localStorage
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });
  
  // Check for saved dark mode preference
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    
    // Toggle aria-expanded attribute for accessibility
    const expanded = navLinks.classList.contains('show');
    mobileMenuToggle.setAttribute('aria-expanded', expanded);
  });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        document.querySelector('.nav-links').classList.remove('show');
        
        // Scroll to the target
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send the form data to a server
      // For demo purposes, we'll just log it and show a success message
      console.log('Form submitted:', { name, email, message });
      
      // Show success message
      const formWrapper = contactForm.parentElement;
      const successMessage = document.createElement('div');
      successMessage.className = 'form-success';
      successMessage.innerHTML = `
        <h3>Thank you for your message, ${name}!</h3>
        <p>I'll get back to you as soon as possible.</p>
        <button id="resetForm" class="btn-main">Send another message</button>
      `;
      
      // Hide the form and show success message
      contactForm.style.display = 'none';
      formWrapper.appendChild(successMessage);
      
      // Add event listener to the reset button
      document.getElementById('resetForm').addEventListener('click', function() {
        contactForm.reset();
        contactForm.style.display = 'flex';
        formWrapper.removeChild(successMessage);
      });
    });
  }
});

// Add animation for sections as they scroll into view
document.addEventListener('DOMContentLoaded', function() {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('.section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          // Unobserve after animation is triggered
          sectionObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    sections.forEach(section => {
      section.classList.add('section-hidden');
      sectionObserver.observe(section);
    });
  } else {
    // If IntersectionObserver is not supported, simply show all sections
    document.querySelectorAll('.section').forEach(section => {
      section.classList.add('section-visible');
    });
  }
});

// Add parallax effect to hero section (subtle)
document.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector('.hero');
  
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        hero.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
      }
    });
  }
});

// Typing animation for hero text (optional)
document.addEventListener('DOMContentLoaded', function() {
  const heroTitle = document.querySelector('.hero h1');
  
  if (heroTitle && window.innerWidth > 768) { // Only on larger screens
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    // Start the typing animation
    typeWriter();
  }
});