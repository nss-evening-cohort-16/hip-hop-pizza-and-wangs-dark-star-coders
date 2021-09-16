import orderForm from '../components/forms/orderForm';
import logoutButton from '../components/logoutButton';
import clearDom from '../helpers/data/clearDom';
import { showOrders } from '../components/orders';
import signOut from '../helpers/signOut';
import { createOrder } from '../helpers/data/orderData';
// navigation events
const navigationEvents = () => {
  document.querySelector('#create-order').addEventListener('click', () => {
    orderForm();
  });

  document.querySelector('#signout-button').addEventListener('click', () => {
    logoutButton();
  });

  document.querySelector('#view-order').addEventListener('click', () => {
    clearDom();
  });

  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // CREATE AN ORDER
  document.querySelector('#create-order').addEventListener('click', () => {
    createOrder().then((ordersArray) => showOrders(ordersArray));
  });
};
export default navigationEvents;
