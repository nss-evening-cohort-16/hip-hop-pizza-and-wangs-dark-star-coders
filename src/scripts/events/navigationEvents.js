import orderForm from '../components/forms/orderForm';
import logoutButton from '../components/logoutButton';
import { getOrders } from '../helpers/data/orderData';
import { showOrders } from '../components/orders';
import buttons from '../components/homeScreen';
import { showRevenue } from '../components/revenue';
// navigation events
const navigationEvents = (displayName) => {
  document.querySelector('#nav-create-order').addEventListener('click', () => {
    orderForm();
  });

  document.querySelector('#signout-button').addEventListener('click', () => {
    logoutButton();
  });

  document.querySelector('#logo').addEventListener('click', () => {
    buttons(displayName);
  });

  document.querySelector('#nav-view-order').addEventListener('click', () => {
    getOrders().then((order) => showOrders(order));
  });

  document.querySelector('#nav-view-revenue').addEventListener('click', () => {
    showRevenue();
  });
  /*
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
*/
};
export default navigationEvents;
