import clearDom from '../helpers/data/clearDom';

const showOrders = (array) => {
  clearDom();

  document.querySelector('#create-order').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="create-order-btn">Create an Order</button>';

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
    <div class="card" style="width: 18rem;">
    <div class="card-header">${item.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${item.email}</li>
      <li class="list-group-item">${item.phone}</li>
      <li class="list-group-item">${item.orderType}</li>
      <li class="list-group-item">${item.orderTotal}</li>
      <li class="list-group-item">${item.paymentType}</li>
      <li class="list-group-item">${item.tip}</li>
    </ul>
    <i class="btn btn-success fas fa-eye" id="view-order-btn--${item.firebaseKey}"></i>
            <i id="edit-order-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-order--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  </div>`;
  });
};

const emptyOrders = () => {
  document.querySelector('#store').innerHTML = '<h1>No Items</h1>';
};

export { showOrders, emptyOrders };
