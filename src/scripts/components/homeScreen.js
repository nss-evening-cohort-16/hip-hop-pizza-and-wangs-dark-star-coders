import clearDom from '../helpers/data/clearDom';

const buttons = (displayName) => {
  clearDom();
  document.querySelector('#store').innerHTML = `
  <h1>Welcome ${displayName}!</h1>
   <button type="button" id = "home-view-orders-btn" class="btn btn-success">View Orders</button>
   <button type="button" id="create-order-btn" class="btn btn-primary">Create an Order</button>
   <button type="button" class="btn btn-warning">View Revenue</button>
 `;
};

export default buttons;
