import orderForm from '../components/forms/orderForm';
import logoutButton from '../components/logoutButton';
import clearDom from '../helpers/data/clearDom';
// import signOut from '../helpers/auth/signOut';
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
};

/*
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // VIEW ORDER
  document.querySelector('#view-order').addEventListener('click', () => {
    viewOrder().then((ordersArray) => showOrder(ordersArray));
  });

  // CREATE AN ORDER
  document.querySelector('#create-order').addEventListener('click', () => {
    createOrder().then((ordersArray) => showOrder(ordersArray));
  });

  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);
  });
};
*/
export default navigationEvents;
