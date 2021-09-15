import clearDom from '../../helpers/data/clearDom';

const orderForm = (uid, obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
        <form id="submit-order-form" class="mb-4">
          <div class="form-group">
            <label for="orderName">Order Name</label>
            <input type="text" class="form-control" id="orderName" aria-describedby="orderName" placeholder="Enter Customer Name" value="${obj.name || ''}" required>
          </div>
          <div class="form-group">
            <label for="customerPhone">Customer Phone</label>
            <input type="text" class="form-control" id="customerPhone" aria-describedby="customerPhone" placeholder="Enter Customer Phone" value="${obj.phone || ''}" required>
          </div>
          <div class="form-group">
            <label for="customerEmail">Customer Email</label>
            <input type="text" class="form-control" id="customerEmail" aria-describedby="customerEmail" placeholder="Enter Customer Email" value="${obj.email || ''}" required>
          </div>
          <button type="submit" id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="btn btn-primary">Create/Edit Order</button>
        </form>`;
};

export default orderForm;
