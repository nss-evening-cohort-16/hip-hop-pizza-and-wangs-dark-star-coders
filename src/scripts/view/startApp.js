import createDom from '../components/createDom';
import domEvents from '../events/domEvents';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import navigationEvents from '../events/navigationEvents';
import buttons from '../components/homeScreen';

const startApp = (user) => {
  createDom();
  buttons(user.displayName);
  domEvents();
  navBar();
  navigationEvents(user.displayName);
  logoutButton();
};

export default startApp;
