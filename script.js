document.addEventListener('DOMContentLoaded', function() {
            // Mobile Navigation
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');

            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });

            // Intersection Observer for animations
            const animateElements = document.querySelectorAll('.animate-on-scroll');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            animateElements.forEach(element => {
                observer.observe(element);
            });

            // Initialize skill bars
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
            });

            // Active navigation link based on scroll position
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');

            window.addEventListener('scroll', () => {
                let current = '';

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (scrollY >= (sectionTop - sectionHeight / 3)) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });

                // Header scroll effect
                const header = document.querySelector('.header');
                if (window.scrollY > 50) {
                    header.style.padding = '0.5rem 0';
                    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.padding = '1rem 0';
                    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                }
            });

            // Project Modal
            const projectCards = document.querySelectorAll('.project-card');
            const modal = document.getElementById('project-modal');
            const closeModal = document.querySelector('.close-modal');
            const modalContent = document.getElementById('modal-content');

            // Project data
            const projects = [{
                    id: 1,
                    title: "Restaurant Management System",
                    description: "A website for managing restaurant orders using QR code scanning",
                    details: "A website for managing restaurant orders of a customer. By scanning a QR code, the restaurant website will be visible to the customer, and they can order the food they want.\n\nThe restaurant website also includes an Admin Registration feature where the Admin can see customer data and orders. The Admin has access to accept or decline orders, and customers can provide feedback for the food which is monitored by the Admin.",
                    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
                    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                },
                {
                    id: 2,
                    title: "Foodhub with delivery.com",
                    description: "A food delivery application built using Java Fullstack",
                    details: "To compete with the present market trends and to provide wide and in-time delivery with clean food delivery through this app. Having the availability of both online and offline delivery. Apart from that, we also provide employment to all the people in need.",
                    technologies: ["Java", "Spring Boot", "HTML", "CSS", "MySQL"],
                    role: "Team Member and Developer",
                    teamSize: 4,
                    tools: ["Eclipse"],
                    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                }
            ];

            projectCards.forEach(card => {
                        card.addEventListener('click', () => {
                                    const projectId = card.getAttribute('data-project-id');
                                    const project = projects.find(p => p.id.toString() === projectId);

                                    if (project) {
                                        // Populate modal content
                                        modalContent.innerHTML = `
          <div class="modal-header">
            <h2>${project.title}</h2>
          </div>
          <div class="modal-body">
            <div class="modal-image">
              <img src="${project.image}" alt="${project.title}" />
            </div>
            <div class="modal-details">
              <p class="modal-description">${project.details}</p>
              
              <div class="modal-tech">
                <h3>Technologies Used:</h3>
                <div class="modal-tags">
                  ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
              </div>
              
              ${project.role ? `
                <div class="modal-role">
                  <h3>Role:</h3>
                  <p>${project.role}</p>
                </div>
              ` : ''}
              
              ${project.teamSize ? `
                <div class="modal-team">
                  <h3>Team Size:</h3>
                  <p>${project.teamSize} people</p>
                </div>
              ` : ''}
              
              ${project.tools ? `
                <div class="modal-tools">
                  <h3>Tools:</h3>
                  <div class="modal-tags">
                    ${project.tools.map(tool => `<span>${tool}</span>`).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          </div>
        `;
        
        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  // Close modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // In a real application, you would send this data to a server
      console.log('Form submitted:', { name, email, subject, message });
      
      // Display success message (in a real app, you'd wait for a server response)
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }
});