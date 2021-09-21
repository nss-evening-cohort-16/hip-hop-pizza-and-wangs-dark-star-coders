import orderForm from '../components/forms/orderForm';
import { showOrders } from '../components/orders';
import {
  createOrder,
  getOrders,
  deleteOrder,
  getOneOrder,
  updateOrder
} from '../helpers/data/orderData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING An ORDER
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete this order?')) {
        const getKey = e.target.id.split('--');
        const [, b] = getKey;
        deleteOrder(b).then((ordersArray) => showOrders(ordersArray));
      }
    }
    // CLICK EVENT FOR SHOWING FORM FOR CREATING AN ORDER
    if (e.target.id.includes('create-order')) {
      orderForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR CREATING AN ORDER
    if (e.target.id.includes('submit-order')) {
      e.preventDefault();
      const orderObj = {
        name: document.querySelector('#orderName').value,
        email: document.querySelector('#customerEmail').value,
        phone: document.querySelector('#customerPhone').value,
        orderType: document.querySelector('#orderType').value
      };
      console.warn(orderObj);
      createOrder(orderObj).then((ordersArray) => showOrders(ordersArray));
    }
    // CLICK EVENT FOR EDITING N ORDER
    if (e.target.id.includes('edit-order-btn')) {
      const [, id] = e.target.id.split('--');

      getOneOrder(id).then((orderObj) => orderForm(orderObj));
    }
    // UPDATING AN ORDER
    if (e.target.id.includes('update-order')) {
      e.preventDefault();
      const getKey = e.target.id.split('--');
      const [, firebaseKey] = getKey;
      const orderObj = {
        name: document.querySelector('#orderName').value,
        email: document.querySelector('#customerEmail').value,
        phone: document.querySelector('#customerPhone').value,
        orderType: document.querySelector('#orderType').value,
        firebaseKey
      };
      updateOrder(orderObj).then(showOrders);
    }

    if (e.target.id.includes('view-order-btn')) {
      getOrders().then((order) => showOrders(order));
    }
  });
};

export default domEvents;
