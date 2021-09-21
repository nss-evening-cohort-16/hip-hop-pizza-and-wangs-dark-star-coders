import axios from 'axios';
import firebaseConfig from '../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/item.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const deleteItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/item/${firebaseKey}.json`)
    .then(() => {
      getItems().then(resolve);
    })
    .catch(reject);
});

const createItem = (itemObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/item.json`, itemObj)
    .then(() => {
      getItems().then(resolve);
    })
    .catch(reject);
});

const getOneItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/item/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const updateItem = (itemObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/item/${itemObj.firebaseKey}.json`, itemObj)
    .then(() => getItems().then(resolve))
    .catch(reject);
});

export {
  getItems, deleteItem, createItem, getOneItem, updateItem
};
