export const skillsContainer = document.getElementById("skills-container");

async function fetchSkills() {
    try {
        const response = await fetch("./scripts/data/skills.json");

        const skills = await response.json();
        renderSkills(skills);
    } catch (error) {
        console.error("Error loading skills", error);
    }
}

function renderSkills(skills) {
    skillsContainer.innerHTML = "";

    skills.forEach((skill) => {
        const skillCard = document.createElement("div");

        skillCard.classList.add("skill-card");

        skillCard.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.name}</h3>
            <p>${skill.level}</p>
        `;

        skillsContainer.appendChild(skillCard);
    });
}

fetchSkills();