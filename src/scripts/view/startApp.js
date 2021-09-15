import createDom from '../components/createDom';
import domEvents from '../events/domEvents';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';

const startApp = () => {
  createDom();
  domEvents();
  navBar();
  logoutButton();
};

export default startApp;
