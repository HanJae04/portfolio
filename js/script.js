  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navbarMenu = document.querySelector('.navbar ul');

  mobileMenuBtn.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Close mobile menu if open
          navbarMenu.classList.remove('active');
          
          const target = document.querySelector(this.getAttribute('href'));
          
          if (target) {
              window.scrollTo({
                  top: target.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });

// Projects Tabs

const tabBtns = document.querySelectorAll('.tab-btn');
const softdevProjects = document.getElementById('softdevProjects');
const dataanalyticsProjects = document.getElementById('dataanalyticsProjects');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const tab = btn.dataset.tab;
        
        if (tab === 'softdev') {
            softdevProjects.style.display = 'grid';
            dataanalyticsProjects.style.display = 'none';
        } else if (tab === 'dataanalytics') {
            softdevProjects.style.display = 'none';
            dataanalyticsProjects.style.display = 'grid';
        }
    });
});

  // Simple Particles Background
  const particles = document.getElementById('particles');
  
  function createParticle() {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = Math.random() * 3 + 'px';
      particle.style.height = particle.style.width;
      particle.style.background = `rgba(0, ${Math.random() * 240 + 150}, ${Math.random() * 100 + 155}, ${Math.random() * 0.5 + 0.1})`;
      particle.style.borderRadius = '50%';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px rgba(0, 240, 255, 0.7)`;
      particle.style.filter = 'blur(1px)';
      
      // Animation
      particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
      particle.style.opacity = Math.random() * 0.5 + 0.3;
      
      particles.appendChild(particle);
      
      // Remove particle after some time to avoid too many elements
      setTimeout(() => {
          particle.remove();
      }, 20000);
  }
  
  // Create initial particles
  for (let i = 0; i < 50; i++) {
      createParticle();
  }
  
  // Create new particles periodically
  setInterval(createParticle, 1000);

  // Lightbox functionality for certificates
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const certificateImages = document.querySelectorAll('.certificate-img');

certificateImages.forEach(img => {
img.addEventListener('click', () => {
  lightboxImg.src = img.src;
  lightbox.style.display = 'flex';
});
});

lightbox.addEventListener('click', () => {
lightbox.style.display = 'none';
});
