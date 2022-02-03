const mobileBtn = document.querySelector('.mobile-btn');
const header = document.querySelector('.header');
const mobileLinks = document.querySelectorAll('.main-nav-link');

mobileBtn.addEventListener('click', () => {
  header.classList.toggle('nav-open');
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
  });
});

// LOAD SPEAKERS DATA DYNAMICLY

const speakers = document.querySelector('.speakers-grid');

const speakersData = [
  {
    id: 'speaker-1',
    name: 'Michael Jackson',
    image: 'images/img-1.png',
    occupation: 'Independent Consultant, UK',
    about:
      ' Shivay Lamba is a software developer specializing in Dev Machine Learning and Full Stack Development',
    bgImage: 'images/chess.jpg',
  },
  {
    id: 'speaker-2',
    name: 'Alex Ruheni',
    image: 'images/img-2.png',
    occupation: 'React Enginier at TVC',
    about:
      ' Shivay Lamba is a software developer specializing in Dev Machine Learning and Full Stack Development',
    bgImage: 'images/chess.jpg',
  },
  {
    id: 'speaker-3',
    name: 'Arisa Fukuzaki',
    image: 'images/img-3.png',
    occupation: 'i18n in the world of Jamstack',
    about:
      'Arisa is a DevRel Engineer at Storyblok & an organizer of a free tech skill & knowledge-sharing community, Lilac. Her...',
    bgImage: 'images/chess.jpg',
  },
  {
    id: 'speaker-4',
    name: 'Ives Van Hoorne',
    image: 'images/img-4.png',
    occupation: 'CodeSandbox Secret Release',
    about:
      ' CodeSandbox launched in 2016, the company’s browser-based cloud environment lets developers collaborate simply by sharing a link to what they’re...',
    bgImage: 'images/chess.jpg',
  },
  {
    id: 'speaker-5',
    name: 'Luc Van Kampen',
    image: 'images/img-5.png',
    occupation: 'Passwordless with Web3 and React',
    about: ` Luc, also known as Lucemans, is a passionate creator focused on "creating epic experiences" and getting rid of passwords forever......`,
    bgImage: 'images/chess.jpg',
  },
  {
    id: 'speaker-6',
    name: 'Moussa Dieng',
    image: 'images/img-6.png',
    occupation: 'Web3 on React',
    about:
      ' • GraphQL • cross platform • cloud enabled • web & mobile application development • React Native • Author •...',
    bgImage: 'images/chess.jpg',
  },
];

for (let i = 0; i < speakersData.length; i += 1) {
  speakers.innerHTML = `${speakers.innerHTML}
       <div class="speaker">
            <div class="parent-img">
              <img class="chess-bg" src="${speakersData[i].bgImage}" alt="chees" />
              <img class="speaker-img position" src="${speakersData[i].image}" alt="" />
            </div>
            <div class="text">
              <h3 class="name">${speakersData[i].name}</h3>
              <hr class="bar-speaker" />
              <p class="occupation">${speakersData[i].occupation}</p>
              <p class="about">
               ${speakersData[i].about}
              </p>
            </div>
          </div>
    `;
}
