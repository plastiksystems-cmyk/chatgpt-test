async function loadDocs() {
  // Load YAML file
  const response = await fetch('docs.yaml');
  const yamlText = await response.text();
  const docs = jsyaml.load(yamlText);

  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content');

  docs.forEach((section, index) => {
    const sectionId = `section-${index}`;

    // Create sidebar link
    const link = document.createElement('a');
    link.href = `#${sectionId}`;
    link.textContent = section.title;
    sidebar.appendChild(link);

    // Create content section
    const sectionEl = document.createElement('section');
    sectionEl.id = sectionId;
    const h2 = document.createElement('h2');
    h2.textContent = section.title;
    const p = document.createElement('p');
    p.textContent = section.content;
    sectionEl.appendChild(h2);
    sectionEl.appendChild(p);
    content.appendChild(sectionEl);
  });
}

const sections = document.querySelectorAll('main section');
const links = document.querySelectorAll('nav a');

links.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active from all sections
    sections.forEach(sec => sec.classList.remove('active'));
    // Add active to clicked section
    sections[index].classList.add('active');
  });
});

// Optionally activate first section
sections[0].classList.add('active');

loadDocs();