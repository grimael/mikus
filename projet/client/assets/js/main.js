// Gestion du filtre des projets
document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.getElementById('projectGrid');
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    let projects = [];
  
    // Charger les projets depuis data.json
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => {
        projects = data;
        renderProjects(projects);
      });
  
    function renderProjects(projects) {
      projectGrid.innerHTML = '';
      projects.forEach((project) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
          <img src="${project.image}" alt="${project.title}">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <p class="tools"><strong>Outils :</strong> ${project.tools.join(', ')}</p>
        `;
        projectGrid.appendChild(card);
      });
    }
  
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.dataset.filter;
        const filteredProjects = filter === 'all'
          ? projects
          : projects.filter((project) => project.category === filter);
        renderProjects(filteredProjects);
      });
    });
  
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
  
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = {
          name: contactForm.name.value,
          email: contactForm.email.value,
          message: contactForm.message.value,
        };
  
        try {
          const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
          const result = await response.json();
          formStatus.textContent = result.message;
          formStatus.style.color = response.ok ? 'green' : 'red';
          if (response.ok) contactForm.reset();
        } catch (error) {
          formStatus.textContent = "Erreur lors de l'envoi.";
          formStatus.style.color = 'red';
        }
      });
    }
  
    // Easter egg
    const easterEgg = document.getElementById('easterEgg');
    const surprise = document.getElementById('surprise');
    let clickCount = 0;
  
    if (easterEgg) {
      easterEgg.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 3) {
          surprise.classList.remove('hidden');
          setTimeout(() => {
            surprise.classList.add('hidden');
            clickCount = 0;
          }, 3000);
        }
      });
    }
  });