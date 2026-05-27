const ProjectsContainer = document.getElementById("projects-container")

async function fetchProjects() {
    try{
        const response = await fetch("./scripts/data/projects.json")
        const projects = await response.json()
        renderProjects(projects)

    }
    catch(error){
        console.error("Error loading Projects")
    }
}

function renderProjects(projects){
    ProjectsContainer.innerHTML = ""
    projects.forEach((projects)=>{
        const projectCard = document.createElement("div")
        projectCard.classList.add("project-card")
        projectCard.innerHTML = `
      <h3 class="project-title">${projects.title}</h3>

      <p class="project-description">
        ${projects.description}
      </p>

      <div class="project-tech">
        ${projects.technologies
          .map((tech) => `<span class="tech-badge">${tech}</span>`)
          .join("")}
      </div>

      <div class="project-links">
        <a href="${projects.github}" target="_blank">
          GitHub
        </a>

        ${
          projects.liveDemo
            ? `
          <a href="${projects.liveDemo}" target="_blank">
            Live Demo
          </a>
        `
            : ""
        }
      </div>
    `
    ProjectsContainer.appendChild(projectCard)
    })

}

fetchProjects();