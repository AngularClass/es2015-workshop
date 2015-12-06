// Use desctructuring

const user = {
  name: 'Marty',
  posts: [
    {id: 1, text: 'check this out'},
    {id: 2, text: 'top 10 things to do'}
  ]
};

const showPostsFromUser = (user) => {
  const posts = user.posts || [];
  posts.forEach(post => console.log(post.text));
};
showPostsFromUser(user);

/*******************************************/


const config = {
  logLevel: 'error',
  version: '0.0.2',
  seedDb: false,
  secrets: {
    key: 'grEenWhaleSIngs'
  }
};
const logLevel = config.logLevel;
                  // keep the const name, but use destructuring
const secretKey = config.secrets.key;

/*******************************************/

const foods = ['food', 'apple']
const thirdFood = foods[2] || 'candy';

/*******************************************/

const greet = (user) => {
  const username = user.name || '';
  console.log(`username: ${username}`);
};










