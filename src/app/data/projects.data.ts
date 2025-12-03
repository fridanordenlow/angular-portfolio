import { IProject } from '../models/project.model';

// Add id's later
export const projects: IProject[] = [
  {
    imagePath: 'assets/images/tech-req-1.webp',
    title: 'TechReq - Job Listings',
    description:
      'A group project where we built a web application to fetch and display job ads using the JobTech API. The app focuses on tech jobs and displays only relevant IT and software development positions from Platsbanken. On the homepage, users can see the ten most recently posted jobs and a chart visualizing the number of jobs per location. Users can also search by keywords to find roles matching their interests and location. The project uses React Context for state management and TypeScript for type safety, along with fetch-based service functions for API calls. It also uses Arbetsförmedlingen’s open-source design system for consistent UI components.',
    techLanguages: ['React', 'JavaScript', 'TypeScript', 'CSS', 'HTML'],
    githubLink:
      'https://github.com/fridanordenlow/fed24d-case-af-jobtech-fridanordenlow',
    deployedLink: 'https://https://techreq.vercel.app/',
  },
  {
    imagePath: 'assets/images/textile-webshop_portfolio.webp',
    title: 'Textile Webshop',
    description:
      'A fictional webshop application for textiles, built with vanilla JavaScript. This project includes functionalities such as listing products, sorting and filtering, managing a shopping cart, and placing orders through a form.',
    techLanguages: ['Javascript', 'HTML', 'SASS'],
    githubLink:
      'https://github.com/fridanordenlow/project-everyday-textile-webshop',
    deployedLink:
      'https://fridanordenlow.github.io/project-everyday-textile-webshop/',
  },
  {
    imagePath: 'assets/images/shelfie-book-app-1.webp',
    title: 'Shelfie – Book Application',
    description:
      'A fullstack group project where we built a book application with a Vue.js frontend and a Node.js/Express.js backend connected to MongoDB. Users can browse books, read and write reviews, and manage content through a protected admin panel. The project focuses on API development, database integration, authentication with JWT, and role-based access control.',
    techLanguages: ['Vue', 'Node', 'Express', 'MongoDB', 'CSS', 'HTML'],
    githubLink: 'https://github.com/fridanordenlow/fed24d-api-inl2-shelfie',
  },
  {
    imagePath: 'assets/images/jazzy-quiz_preview.webp',
    title: 'Jazz Up Quiz',
    description:
      'An engaging and user-friendly music quiz game emphasizing accessible design and intuitive feedback. Features randomized questions, multiple-choice answers, a scoring system with speed bonuses, and a final summary showing score and time.',
    techLanguages: ['JavaScript', 'Typescript', 'HTML', 'CSS', 'SASS'], // UPPDATERA
    githubLink: 'https://github.com/fridanordenlow/project-jazzy-music-quiz',
    deployedLink: 'https://fridanordenlow.github.io/project-jazzy-music-quiz/',
  },
  {
    imagePath: 'assets/images/labyrinth-mockup.png',
    title: 'Old School Labyrinth Game',
    description:
      'A little labyrinth game built in React where we worked with storing the current state of the game using thunks and async actions in Redux. We flirted with some coding visual elements in the design.',
    techLanguages: ['Redux', 'React', 'Javascript', 'CSS'],
    githubLink: 'https://github.com/fridanordenlow/project-labyrinth',
    deployedLink: 'https://reliable-sorbet-d720d3.netlify.app/',
  },
  {
    imagePath: 'assets/images/to-do-list.png',
    title: 'To Do List Web App',
    description:
      'An online to-do list that uses Redux and reducers to manage adding, completing and deleting tasks and other functions such as visualizing how many tasks you have completed.',
    techLanguages: ['Redux', 'React', 'Javascript', 'CSS'],
    githubLink: 'https://github.com/fridanordenlow/project-todos',
    deployedLink: 'https://to-do-list-by-frida.netlify.app/',
  },
  {
    imagePath: 'assets/images/movie-page.png',
    title: 'Movie Page',
    description:
      'In this project I worked with two Technigo teammates to make a movie site that collected data from an API. We learned how to work and implement new React hooks and functions to enable us to create and navigate to multiple pages.',
    techLanguages: ['React', 'Javascript', 'CSS'],
    githubLink: 'https://github.com/fridanordenlow/project-movies',
    deployedLink: 'https://cosmic-daffodil-7c032f.netlify.app/',
  },
  // {
  //   title: 'The Dream Survey',
  //   description: 'In this project I have made a little fictional dream survey sent out by the Sandman. The user is asked a number of questions about their dream preferences and in the end they are presented with a summary of their answers. I this project I practiced working with React, specifically components and states. ',
  //   techLanguages: ['Javascript', 'HTML5', 'CSS3'],
  //   githubLink: 'project-survey',
  //   deployedLink: 'https://the-dream-survey.netlify.app'
  // },
  // {
  //   imagePath: 'assets/images/spotify-phone.jpg',
  //   title: 'Music Releases',
  //   description:
  //     'This site shows new releases from Spotify, with data from local json-data, and links to music on Spotify. This was a pair project and the first time we were using React, components, and JSX.',
  //   techLanguages: ['React', 'Javascript', 'HTML5', 'CSS3'],
  //   githubLink: 'project-music-releases',
  //   // deployedLink: 'music-releases-by-frida-and-fiona'
  //   deployedLink: 'https://music-releases-by-frida-and-fiona.netlify.app',
  // },
  {
    imagePath: 'assets/images/weather-app.png',
    title: 'Weather App',
    description:
      'This weather site shows the current weather and a five day forecast in the chosen city by pulling data from the Open Weather API. to update the current and 5-day forecast. It changes color and weather icons based on the current conditions.',
    techLanguages: ['Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/fridanordenlow/project-weather-app',
    deployedLink: 'https://voluble-bonbon-854851.netlify.app',
  },
  // {
  //   title: 'Guess Who? The Game',
  //   description: 'This is a digital version of the classic board game "Guess Who?". It uses conditional statements, array methods and many more Javascript features to filter characters based on the players questions and finally lets you know if you have made the right guess or not!',
  //   techLanguages: ['Javascript', 'HTML5', 'CSS3'],
  //   githubLink: 'https://github.com/fridanordenlow/project-guess-who',
  //   // deployedLink: 'guess-who-game-by-frida'
  //   deployedLink: 'https://guess-who-game-by-frida.netlify.app/'
  // },
  // {
  //   title: 'Chat Bot',
  //   description: 'The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries. ',
  //   techLanguages: ['Javascript', 'HTML5', 'CSS3'],
  //   githubLink: 'project-chatbot',
  //   // deployedLink: 'stirring-babka-1cb6d7'
  //   // githubLink: 'https://github.com/fridanordenlow/project-chatbot',
  //   deployedLink: 'https://stirring-babka-1cb6d7.netlify.app'
  // }
];
