'use strict';

const acceptableLosses = {
  title: 'Acceptable Losses',
  img: {
    desktop: {
      src: require('../assets/acceptableLosses/dashboard-D.png'),
      alt: 'Desktop View of the Dashboard'
    },
    mobile: {
      src: require('../assets/acceptableLosses/dashboard-M.png'),
      alt: 'Mobile View of the Dashboard'
    }
  },
  description: 'Add Data Here',
  links: {
    live: 'https://acceptable-losses-client.herokuapp.com/',
    client: 'https://github.com/thinkful-ei21/acceptable-losses-client',
    server: 'https://github.com/thinkful-ei21/acceptable-losses-server'
  }
};

const gameStrat = {
  title: 'GameStrat',
  img: {
    desktop: {
      src: require('../assets/acceptableLosses/dashboard-D.png'),
      alt: 'GameStrat logo'
    },
    mobile: {
      src: require('../assets/acceptableLosses/dashboard-M.png'),
      alt: 'Mobile View of the Dashboard'
    }
  },
  description: 'Add Data Here',
  links: {
    live: 'https://jonathan-gamestrat-client.herokuapp.com/',
    client: 'https://github.com/thinkful-ei21/Jonathan-GamesStrat-Client',
    server: 'https://github.com/thinkful-ei21/Jonathan-GamesStrat-Server'
  }
};

const cartasContraEspañol = {
  title: 'Cartas Contra Español',
  img: {
    desktop: {
      src: require('../assets/acceptableLosses/dashboard-D.png'),
      alt: 'Desktop View of the Dashboard'
    },
    mobile: {
      src: require('../assets/acceptableLosses/dashboard-M.png'),
      alt: 'Mobile View of the Dashboard'
    }
  },
  description: 'Add Data Here',
  links: {
    live: 'https://sr-app-sj.herokuapp.com/',
    client: 'https://github.com/BuddhaL1T3/spaced-rep-client-sonya-jonathan',
    server: 'https://github.com/BuddhaL1T3/spaced-rep-server-sonya-jonathan'
  }
};

module.exports = {
  acceptableLosses,
  gameStrat,
  cartasContraEspañol
};
