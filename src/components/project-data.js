'use strict';

const acceptableLosses = {
  title: 'Acceptable Losses',
  img: {
    src: require('../assets/acceptableLosses/dashboard-D.png'),
    alt: 'Desktop View of the Dashboard'
  },
  description:
    "With our app, you can keep track of all of your bills, see due dates of upcoming bills, click a button to visit your bill's payment website and mark them as paid. Staying on top of your expenses is as easy as hitting a button!",
  links: {
    live: 'https://acceptable-losses-client.herokuapp.com/',
    client: 'https://github.com/thinkful-ei21/acceptable-losses-client',
    server: 'https://github.com/thinkful-ei21/acceptable-losses-server'
  }
};

const gameStrat = {
  title: 'GameStrat',
  img: {
    src: require('../assets/gameStrat/games.JPG'),
    alt: 'games search page'
  },
  description:
    'GameStrat is designed to allow fellow gamers to share their tricks and hints on how to overcome any and all obstacles that you might come up against. If you register and become a user, you will be able to contribute to the cause. You will be able to add strategies to your favorite games as well as manage and keep track of all of your strategies.',
  links: {
    live: 'https://jonathan-gamestrat-client.herokuapp.com/',
    client: 'https://github.com/thinkful-ei21/Jonathan-GamesStrat-Client',
    server: 'https://github.com/thinkful-ei21/Jonathan-GamesStrat-Server'
  }
};

const cartasContraEspañol = {
  title: 'Cartas Contra Español',
  img: {
    src: require('../assets/cartasContraEspañol/questionPage.JPG'),
    alt: 'Desktop View of the Dashboard'
  },
  description:
    'Cartas Contra Español is a language learning app that uses spaced repetition. If the user translates the word correctly it will be pushed further down the list. If they get the translation wrong, they will see the word more often until they answer it correctly.',
  links: {
    live: 'https://sr-app-sj.herokuapp.com/',
    client: 'https://github.com/thinkful-ei21/spaced-rep-client-sonya-jonathan',
    server: 'https://github.com/thinkful-ei21/spaced-rep-server-sonya-jonathan'
  }
};

module.exports = {
  acceptableLosses,
  gameStrat,
  cartasContraEspañol
};
