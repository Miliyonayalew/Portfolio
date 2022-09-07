const myModal = document.getElementById('myModal');
const seeProject = document.querySelectorAll('.btn-project');
const closeMod = document.querySelector('.closeModal');

const Projects = [
  {
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'Assests/ProjectImages/Project2.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://miliyonayalew.github.io/Portfolio/',
    Source: 'https://github.com/Miliyonayalew/Portfolio',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'Assests/ProjectImages/Project2.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://miliyonayalew.github.io/Portfolio/',
    Source: 'https://github.com/Miliyonayalew/Portfolio',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'Assests/ProjectImages/Project2.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://miliyonayalew.github.io/Portfolio/',
    Source: 'https://github.com/Miliyonayalew/Portfolio',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'Assests/ProjectImages/Project2.png',
    technologies: [
      'GitHub',
      'Codekit',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://miliyonayalew.github.io/Portfolio/',
    Source: 'https://github.com/Miliyonayalew/Portfolio',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'Assests/ProjectImages/Project2.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://miliyonayalew.github.io/Portfolio/',
    Source: 'https://github.com/Miliyonayalew/Portfolio',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'Assests/ProjectImages/Project2.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://miliyonayalew.github.io/Portfolio/',
    Source: 'https://github.com/Miliyonayalew/Portfolio',
  },
];

seeProject.forEach((el) => el.addEventListener('click', (e) => {
  const i = e.target.classList[0];
  document.querySelector('.project-image').src = Projects[i].image;
  document.querySelector('.modal-title-text').innerHTML = Projects[i].name;
  document.querySelector('.modal-discription-text').innerHTML = Projects[i].description;
  document.querySelector('.modal-action')
    .innerHTML = `<button onclick="${Projects[i].Live}" type="submit" class="see-live flex">See Live 
                      <span>
                        <i class="fa-solid fa-up-right-from-square flex"></i>
                      </span>
                  </button>
                  <button  onclick="${Projects[i].Source}" type="submit" class="see-source flex">See Source 
                      <span>
                        <i class="fa-brands fa-github flex"></i>
                      </span>
                  </button>`;
  document.querySelector('.modal-tags-container')
    .innerHTML = `<li class="modal-tags flex"><span class="modal-tag flex">
      ${Projects[i].technologies[0]}</span></li>
      <li class="modal-tags flex"><span class="modal-tag flex">
      ${Projects[i].technologies[1]}</span></li>
      <li class="modal-tags flex"><span class="modal-tag flex">
      ${Projects[i].technologies[2]}</span></li>
      <li class="modal-tags flex"><span class="modal-tag flex">
      ${Projects[i].technologies[3]}</span></li>
      <li class="modal-tags flex"><span class="modal-tag flex">
      ${Projects[i].technologies[4]}</span></li>
      <li class="modal-tags flex"><span class="modal-tag flex">
      ${Projects[i].technologies[5]}</span></li>`;
  myModal.style.display = 'block';
}));

function closeModal() {
  myModal.style.display = 'none';
}

closeMod.addEventListener('click', closeModal);