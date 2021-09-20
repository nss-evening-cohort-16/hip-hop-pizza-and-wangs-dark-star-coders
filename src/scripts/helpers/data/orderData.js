import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/order.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deleteOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/order/${firebaseKey}.json`)
    .then(() => getOrders().then((response) => resolve(response)))
    .catch((error) => reject(error));
});

const getOneOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/order/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createOrder = (orderObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/order.json`, orderObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/order/${response.data.name}.json`, body)
        .then(() => {
          getOrders().then(resolve);
        });
    }).catch(reject);
});

const updateOrder = (orderObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/order/${orderObject.firebaseKey}.json`, orderObject)
    .then(() => getOrders().then(resolve))
    .catch(reject);
});

const getOrderItems = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/item.json?orderBy="order_id"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const deleteOrderItems = (orderId) => new Promise((resolve, reject) => {
  getOrderItems(orderId).then((orderItemArray) => {
    const deleteItems = orderItemArray.map((item) => deleteItems(item.firebaseKey));

    Promise.all([...deleteItems]).then(() => resolve(deleteOrder(orderId)));
  }).catch(reject);
});

const viewOrderDetails = (orderfirebaseKey) => new Promise((resolve, reject) => {
  getOneOrder(orderfirebaseKey)
    .then((orderId) => {
      getOrderItems(orderId.firebaseKey)
        .then((itemObject) => {
          resolve({ itemObject, ...orderId });
        });
    }).catch(reject);
});

export {
  getOrders, deleteOrder, getOneOrder, createOrder, updateOrder, getOrderItems, deleteOrderItems, viewOrderDetails
};
