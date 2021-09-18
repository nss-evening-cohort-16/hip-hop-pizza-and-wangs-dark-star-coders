import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getOrderType = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/taco.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const selectOrderType = (typeId) => {
  let domString = `<label for="orderType">Select Order Type</label>
      <select class="form-control" id="typeId" required>
      <option value="">Select an Order Type</option>`;

  getOrderType().then((orderTypeArray) => {
    orderTypeArray.forEach((type) => {
      domString += `<option value="${type.firebaseKey}" ${typeId === type.firebaseKey ? 'selected' : ''}>${type.orderType}</option>`;
    });

    domString += '</select>';

    document.querySelector('#select-orderType').innerHTML = domString;
  });
};

const getPaymentType = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/paymentType.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const selectPaymentType = (paymentId) => {
  let domString = `<label for="paymentType">Select Payment Type</label>
        <select class="form-control" id="paymentId" required>
        <option value="">Select an Payment Type</option>`;

  getPaymentType().then((paymentTypeArray) => {
    paymentTypeArray.forEach((payment) => {
      domString += `<option value="${payment.firebaseKey}" ${paymentId === payment.firebaseKey ? 'selected' : ''}>${payment.paymentType}</option>`;
    });

    domString += '</select>';

    document.querySelector('#select-author').innerHTML = domString;
  });
};

export { selectOrderType, selectPaymentType };
