import clearDom from '../helpers/data/clearDom';

const showRevenue = () => {
  clearDom();
  document.querySelector('#store').innerHTML += `
    <div class="card" style="width: 18rem;">
    <div class="card-header">Revenue
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Total</li></li>
      <li class="list-group-item">Item Name</li>
      <li class="list-group-item">item Price</li>
    </ul>
  </div>`;
};

const emptyRevenue = () => {
  document.querySelector('#store').innerHTML = '<h1>No Items</h1>';
};

export { showRevenue, emptyRevenue };
