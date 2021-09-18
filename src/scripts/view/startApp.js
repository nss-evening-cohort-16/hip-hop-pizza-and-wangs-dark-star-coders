import createDom from '../components/createDom';
import domEvents from '../events/domEvents';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  createDom();
  domEvents();
  navBar();
  navigationEvents();
  logoutButton();
};

export default startApp;
