function ProjectCard(title, about, builtWith, imgURL, siteURL, repoURL) {
  this.title = title
  this.about = about
  this.builtWith = builtWith
  this.imgURL = imgURL
  this.siteURL = siteURL
  this.repoURL = repoURL
}

const budgetTrackerCard = new ProjectCard(
  'Budget Tracker',
  `The budget tracker is an application that allows users to track their income and expenditures though a simple and intuitive interface. Users will simply enter a transaction then will be presented with a graphical representation of their budget.
   Data for the budget tracker app is persisted in a database so consecutice visits to the budget tracker will still show their previously entered transactions. Users may also still make transactions offline to be later stored in the database once the app reconnects to the internet. `,
  'JavaScript | Express.js | Node.js | MongoDB | Mongoose',
  'https://github.com/vitokwolf/budget-tracker-vl/raw/main/assets/BudgetTracker.gif',
  'https://polar-fortress-73675.herokuapp.com/',
  'https://github.com/vitokwolf/budget-tracker-vl',
)

const socialVisaCard = new ProjectCard(
  'Social-VISA',
  `Social VISA is the newest alternative to mass social media aaplication developed in responce to growing concerns over data privacy and social responsability of main social media products. Recent events of reliability issues added additional concerns and highlighted the need of a better alternative. Social VISA is a invite only Social media platform ensuring that everyone in it is recommended by a current user, your data is never shared with anyone out of your network making sure its safe.
  
   * This project is currently in development`,
  'React | Express.js | Node.js | MongoDB | GraphQl',
  'https://github.com/hsafiya/Social-VISA/raw/develop/client/public/assets/screens/feed.PNG?raw=true',
  'https://powerful-plateau-66986.herokuapp.com/',
  'https://github.com/vitokwolf/Social-VISA',
)

const notepadCard = new ProjectCard(
  'Note-Saver',
  `Notepad is a full-stack note-taking application, built with Express.js, that allow the user to write, save, and delete notes.
   All saved notes can be accessed from any browser or computer and through any window closure or computer reset. This is accomplished by using server side code and npm packages to write all the notes to a .json file that is affiliated with the webpage's server.`,
  'JavaScript | CSS | Express.js | Node.js | Bootstrap',
  'https://github.com/vitokwolf/Note-Saver/raw/main/assets/demo.gif',
  'https://rocky-refuge-14476.herokuapp.com//',
  'https://github.com/vitokwolf/Note-Saver',
)

const myRegistryCard = new ProjectCard(
  'My-Registry ',
  `My Registry is a place where you can create a gift registry for any ocasion. Create a list with all the items you want, include name, link to the store, adress where to send and event date. Anyone creating a registry or purchasing a gift will have to create an account and login, all your items are stored and updated as your friends are ourchasing the gifts you want for your special ocassion.

   * This project is currently in development
`,
  'JavaScript | Handlebars | Express.js | Node.js | MySQL | Sequelize',
  'https://github.com/hsafiya/My-Registry/raw/main/public/images/screen1.PNG',
  'https://my-registry-2021.herokuapp.com/',
  'https://github.com/vitokwolf/My-Registry',
)

const bookSearchCard = new ProjectCard(
  'Book Search',
  `The Book search engine is an application is leveraging the entire MERN stack and with a React front end, MongoDB database, and Node.js/Express.js server and API. 
  It's set up to allow users to sign up, login, and save books to a persoanl list. The application is built using Google Books API search engine build with GraphQL API and Apollo Server. `,
  'React | Express.js | Node.js | MongoDB | GraphQl',
  'https://github.com/vitokwolf/online-library-vl/raw/main/assets/screenshot.png',
  'https://vast-tor-86568.herokuapp.com/',
  'https://github.com/vitokwolf/online-library-vl',
)

const weatherDashCard = new ProjectCard(
  'Weather Dashboard',
  `This application allows the user to search for a city and be presented with the current and future weather conditions. The current conditions include temperature, humidity, windspeed and UV index of that city. The UV index is color coded in order to represent if conditions are favorable, moderate, or severe.
   When the user searches for a city, it is added to their search history and a button is created that the user may click on to revisit the conditions for that city. When the user refreshes the page their search history will persist and they will be presented with the weather for the last city they searched for.`,
  'CSS | JavaScript | jQuery | Moment.js | Bootstrap',
  'https://github.com/vitokwolf/Weather-dasboard-VLupascu/raw/main/assets/images/Weather-dasboard-VLupascu.png',
  'https://vitokwolf.github.io/Weather-dasboard-VLupascu/',
  'https://github.com/vitokwolf/Weather-dasboard-VLupascu',
)

const eCommerceBackendCard = new ProjectCard(
  'E-commerce backend',
  `The E-commerce Backend is strictly a backend application that uses Sequelize to query an inventory database. The database contains information for products, categories of products, and tags.
   Users can get all information from a table, get an item from a table by id, update information in a table, and lastly delete any item. This makes the application total CRUD!`,
  'JavaScript | Node.js | MySQL | Sequelize | Express.js',
  'https://github.com/vitokwolf/E-Commerce-backend/raw/main/assets/demo.gif',
  '',
  'https://github.com/vitokwolf/E-Commerce-backend',
)

const techBlogCard = new ProjectCard(
  'Tech Blog',
  `A blog website that allows developers to publish posts and comment on other posts.
   Landing page shows current blog posts and leads the user to a login page. Once logged in, user can view their dashboard which displays an option to create a new post as well as past posts by that user.
   The application follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the exxpress-session npm package for authentication.`,
  'Node.js | Express.js | MySQL | Handlebars',
  'https://github.com/vitokwolf/tech-blog/raw/main/public/img/post.png',
  'https://lit-fortress-39573.herokuapp.com/',
  'https://github.com/vitokwolf/tech-blog',
)

let portfolioData = [
  socialVisaCard,
  myRegistryCard,
  budgetTrackerCard,
  bookSearchCard,
  eCommerceBackendCard,
  techBlogCard,
  notepadCard,
  weatherDashCard,
]

export default portfolioData
