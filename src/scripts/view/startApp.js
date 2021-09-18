import { showOrders } from '../components/orders';
import createDom from '../components/createDom';
import domEvents from '../events/domEvents';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import navigationEvents from '../events/navigationEvents';
import { getOrders } from '../helpers/data/orderData';

const startApp = () => {
  createDom();
  domEvents();
  navBar();
  navigationEvents();
  logoutButton();
  getOrders().then((order) => showOrders(order));
};

export default startApp;
