
const API_URL_DATA = 'assest/data/';

// Script to open and close sidebar
function navWideOpen() {
    document.getElementById("menuSidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function navWideClose() {
    document.getElementById("menuSidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

async function getDataAsync() {
  try {
    const response = await fetch(API_URL_DATA+'data.json');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return data;
}

/*PROYECTS*/
function renderProjects(projects) {
  const projectList = document.getElementById('projects-list');
  projectList.innerHTML = '';
  let HTML="";
  projects.forEach(project => {    
    HTML+= createProjectCard(project);    
  });
  projectList.innerHTML=HTML;
}

function createProjectCard(project) {

  return `
    <div class="col-xl-4 col-md-6 col-12   mb-6">
      <img src="assets/images/products/proyects/"${project.img} alt="Proyect"  class="images ">
      <div class="">
        <p><b>${project.title}</b></p>
        <p>${project.description}</p>
      </div>
    </div>
  `;
}

function render(content) {
  const element = document.createElement('div');
  element.innerHTML = content;
  document.body.appendChild(element);
}

/*ABOUT*/

function renderAbout(about) {
  const about = document.getElementById('about');
  about.innerHTML = '';
  about.innerHTML = createAbout(project);
}

function createAbout(about) {

  return `    
    <p>${about.text}</p>
    <hr>
  `;
}

/*SKILLS*/

function renderSkills(skills) {
  const skillList = document.getElementById('skill-list');
  skillList.innerHTML = '';
  let HTML = '';
  skills.forEach(skills => {
    HTML += createSkillCard(skills);
  });
}


function createSkill(skill) {
  let HTML="";
  skills.list.forEach(item => {
    HTML += `<span class="">${item}</span>`;
  });
  return `    
    <p>${skill.type}</p>
    <div class="">
        ${HTML}
    </div>
  `;
}


document.ready{
    let data=getDataAsync();
    renderProjects(data.proyects);
    renderAbout(data.about);
    renderSkills(data.skills);
}


