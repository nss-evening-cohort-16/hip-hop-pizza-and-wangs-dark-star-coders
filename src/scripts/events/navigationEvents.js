import orderForm from '../components/forms/orderForm';
import logoutButton from '../components/logoutButton';
import { getOrders } from '../helpers/data/orderData';
import { showOrders } from '../components/orders';
// navigation events
const navigationEvents = () => {
  document.querySelector('#create-order').addEventListener('click', () => {
    orderForm();
  });

  document.querySelector('#signout-button').addEventListener('click', () => {
    logoutButton();
  });

  document.querySelector('#view-order').addEventListener('click', () => {
    getOrders().then((order) => showOrders(order));
  });
  /*
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
*/
  // CREATE AN ORDER
  document.querySelector('#create-order').addEventListener('click', () => {
    orderForm();
  });
};
export default navigationEvents;
