async function load(){
    const response = await fetch('docs.yaml');
    const text = response.text();
    const docs = jsyaml.load(text);
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");

    docs.forEach((section, index) => {
        const sectionId = `section-${index}`;
        const link = document.createElement('a');
        link.textContent = section.title;
        sidebar.append(link);
    })
}

loadDocs();