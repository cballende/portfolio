
const API_URL_DATA = 'assets/data/';
const API_URL_IMG = 'assets/images/';
const API_URL_IMG_P = 'past/';
const API_URL_IMG_A = 'working/';
const API_URL_IMG_N = 'next/';

/* Script to open and close sidebar */
function navWideOpen() {
    document.getElementById("menuSidebar").style.display = "block";
    document.getElementById("main-overlay").style.display = "block";
}
 
function navWideClose() {
    document.getElementById("menuSidebar").style.display = "none";
    document.getElementById("main-overlay").style.display = "none";
}



/*  ASYNC  */

async function getDataAsync() {
  try {
    const response = await fetch(API_URL_DATA+'data.json');
    const data = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


/***************************************************
        RENDERING FROM SERVER DATA
****************************************************/

/*SUBJETS*/

function renderSubjets(data) {
  const node = document.getElementById('subjet-list');
  let HTML = '';
  data.forEach(datum => {
    HTML += createSubjet(datum);
  });
  node.innerHTML+= HTML;
}
function createSubjet(data) {
  return `
    <button class=" "><i class="${data.icon} me-1"></i>${data.title}</button>
  `;
}

/*PROYECTS*/
function renderProjects(projects) {
  let projectL;
  let HTML="";

  if (projects.hasOwnProperty("past")) {
      projectL = document.getElementById(`past-list`);
      projectL.innerHTML = '';
      HTML="";
      projects.past.forEach( item => {
          item.path=API_URL_IMG_P;
          HTML+= createProjectCard(item);
        });
      projectL.innerHTML=HTML;              
  }
  if (projects.hasOwnProperty("actualy")) {
    projectL = document.getElementById(`actualy-list`);
    projectL.innerHTML = '';
      HTML="";
      projects.actualy.forEach( item => {
          item.path=API_URL_IMG_A;

          HTML+= createProjectCard(item);
        });
      projectL.innerHTML=HTML;
  }
  if (projects.hasOwnProperty("next")) {
    projectL = document.getElementById(`next-list`);
    projectL.innerHTML = '';
      HTML="";
      projects.next.forEach( item => {
          item.path=API_URL_IMG_N;

          HTML+= createProjectCard(item);
        });
      projectL.innerHTML=HTML;
  }
}

function createProjectCard(data) {
  console.log(data);
  return `
    <div class="col-xl-4 col-md-6 col-12 mb-4">
      <img src="assets/images/products/proyects/${data.path+data.img}" alt="Proyect"  class="images ">
      <div class="container bg-clear  pb-1">
        <p><b>${data.title}</b></p>
        <p>${data.description}</p>
      </div>
    </div>
  `;
}


/*ABOUT*/

function renderAbout(about) {
  const aboutN = document.getElementById('about');
  aboutN.innerHTML = '';
  aboutN.innerHTML = createAbout(about);
}

function createAbout(about) {
  return `<p>${about.text}</p><hr>`;
}

/*SKILLS*/

function renderSkills(data) {
  
  const node = document.getElementById('skill-list');
  node.innerHTML = '';
  let HTML = '';
  data.forEach(datum => {
    HTML += createSkill(datum);
  });
  node.innerHTML = HTML;
}

function createSkill(data) {
  let HTML="";
  data.list.forEach(item => {
    HTML += `<span class="tag">${item}</span>`;
  });
  return `
    <h6>${data.type}</h6>
    <div class="mb-3">
        ${HTML}
    </div>
  `;
}


/*CONTACT*/

function renderContact(data) {
  const email = document.getElementById('contactEmail');
  const locate = document.getElementById('contactLoc');
  const phone = document.getElementById('contactPhone');
  if (data.hasOwnProperty("email"))
    email.innerHTML = data.email;
  if (data.hasOwnProperty("locate")) 
    locate.innerHTML = data.locate;
  if (data.hasOwnProperty("phone"))  
    phone.innerHTML = data.phone;  
}


/*PARTNERS*/

function renderPartners(data) {
  console.log(data);
  const part = document.getElementById('partner-list');
  part.innerHTML = '';
  let HTML = '';
  data.forEach(datum => {
    HTML += createPartner(datum);
  });
  part.innerHTML = HTML;
}

function createPartner(data) {
  let HTML="";
  return `
    <li class="-16 nodeco">
      <img src="${API_URL_IMG+"posts/"+data.img}" class=" -right" >
      <span class=""><a class="nodeco" href="https://${data.link}" target="_blank">${data.name}</a></span><br>
      <p>${data.description}.</p>
    </li>
  `;
}


/*POSTS*/

function renderPost(data) {
  const post = document.getElementById('post-list');
  post.innerHTML = '';
  let HTML = '';
  data.forEach(datum => {
    HTML += createPost(datum);
  });
  post.innerHTML = HTML;
}

function createPost(data) {
  return `
    <li class="-16 nodeco">
      <img src="${API_URL_IMG+"posts/"+data.img}" class=" -right" >
      <span class=""><a class="nodeco" href="https://${data.link}" target="_blank">${data.name}</a></span><br>
      <span>${data.description}.</span>
    </li>
  `;
}

/*SOCIAL*/

function renderSocials(data) {
  const node = document.getElementById('social-list');
  node.innerHTML = '';
  let HTML = '';
  data.forEach(datum => {
    HTML += createSocial(datum);
  });
  node.innerHTML = HTML;
}

function createSocial(data) {
  return `
    <a class="nodeco" href="https://${data.link}" target="_blank"><i class="${data.icon} hover"></i></a>    
  `;
}

document.addEventListener("DOMContentLoaded", (event) => {
    let data= getDataAsync();
    //getDataAsync();
    data.then((res)=>{
      //console.log(res.proyects);
      if(res.hasOwnProperty("socials"))
        renderSocials(res.socials);
      if(res.hasOwnProperty("subjets"))
        renderSubjets(res.subjets);
      if(res.hasOwnProperty("proyects"))
        renderProjects(res.proyects);
      if(res.hasOwnProperty("about"))
        renderAbout(res.about);
      if(res.hasOwnProperty("skills"))
        renderSkills(res.skills);
      if(res.hasOwnProperty("contact"))
        renderContact(res.contact);
      if(res.hasOwnProperty("partners"))
        renderPartners(res.partners);
      if(res.hasOwnProperty("posts"))
        renderPost(res.posts);
    });

    document.getElementById("close-nav").addEventListener(
      "click", navWideClose
    );
    document.getElementById("open-nav").addEventListener(
      "click", navWideOpen
    );
    document.getElementById("main-overlay").addEventListener(
      "click", navWideClose
    );
});


