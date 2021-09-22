import orderForm from '../components/forms/orderForm';
import { showOrders } from '../components/orders';
import {
  createOrder,
  getOrders,
  deleteOrder,
  getOneOrder,
  updateOrder,
  viewOrderDetails
} from '../helpers/data/orderData';
import itemForm from '../components/forms/itemForm';
import {
  createItem, deleteItem, getOneItem, updateItem
} from '../helpers/data/itemData';
import paymentForm from '../components/forms/paymentForm';
import viewOrder from '../components/viewOrder';

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
      const [, firebaseKey] = e.target.id.split('--');
      viewOrderDetails(firebaseKey).then(viewOrder);
    }

    if (e.target.id.includes('view-orders-btn')) {
      getOrders().then((order) => showOrders(order));
    }

    if (e.target.id.includes('add-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      itemForm({}, firebaseKey);
    }

    if (e.target.id.includes('submit-item')) {
      const [, orderId] = e.target.id.split('--');
      const itemObj = {
        order_id: orderId,
        name: document.querySelector('#itemName').value,
        price: document.querySelector('#itemPrice').value,
      };
      createItem(itemObj).then(viewOrderDetails(orderId));
    }

    if (e.target.id.includes('delete-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteItem(firebaseKey).then(showOrders);
    }

    if (e.target.id.includes('edit-item-btn')) {
      const [, id] = e.target.id.split('--');

      getOneItem(id).then((itemObj) => itemForm(itemObj));
    }

    if (e.target.id.includes('update-item')) {
      e.preventDefault();
      const getKey = e.target.id.split('--');
      const [, firebaseKey] = getKey;
      const itemObject = {
        name: document.querySelector('#itemName').value,
        price: document.querySelector('#itemPrice').value,
        firebaseKey
      };
      // eslint-disable-next-line no-undef
      updateItem(itemObject).then(viewOrderDetails(order_id));
    }

    if (e.target.id.includes('payment-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      paymentForm({}, firebaseKey);
    }
  });
};

export default domEvents;
