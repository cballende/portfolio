
const API_URL_DATA = 'assets/data/';

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
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

/*PROYECTS*/
function renderProjects(projects) {
  const projectList = document.getElementById('projects-list');
  projectList.innerHTML = '';
  let HTML="";
  projects.past.forEach(project => {
    HTML+= createProjectCard(project);    
  });
  projectList.innerHTML=HTML;
}

function createProjectCard(project) {
console.log(project.img);
  return `
    <div class="col-xl-4 col-md-6 col-12   mb-6">
      <img src="assets/images/products/proyects/${project.img}" alt="Proyect"  class="images ">
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
  const aboutN = document.getElementById('about');
  aboutN.innerHTML = '';
  aboutN.innerHTML = createAbout(project);
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


document.addEventListener("DOMContentLoaded", (event) => {
    let data= getDataAsync();
    //getDataAsync();
    data.then((res)=>{
      //console.log(res);
    renderProjects(res.proyects);
    //renderAbout(data.about);
    //renderSkills(data.skills);*/
    });
});


