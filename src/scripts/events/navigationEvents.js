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
};
export default navigationEvents;
