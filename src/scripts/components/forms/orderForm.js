import selectOrderType from './orderType';

const orderForm = (uid, obj = {}) => {
  document.querySelector('#form-container').innerHTML = `
        <form id="submit-order-form" class="mb-4">
          <div class="form-group">
            <label for="orderName">Order Name</label>
            <input type="text" class="form-control" id="orderName" aria-describedby="orderName" placeholder="Enter Customer Name" value="${obj.name || ''}" required>
          </div>
          <div class="form-group">
            <label for="orderName">Order Name</label>
            <input type="text" class="form-control" id="orderName" aria-describedby="orderName" placeholder="Enter Customer Name" value="${obj.name || ''}" required>
          </div>
          <div class="form-group">
            <label for="orderName">Order Name</label>
            <input type="text" class="form-control" id="orderName" aria-describedby="orderName" placeholder="Enter Customer Name" value="${obj.name || ''}" required>
          </div>
          </div>
            <div class="form-group" id="select-tech">
          </div>
          <button type="submit" id="${obj.firebaseKey ? `update-tech--${obj.firebaseKey}` : 'submit-tech'}" class="btn btn-primary">Submit Tech</button>
        </form>`;

  selectOrderType(uid, `${obj.orderType || ''}`);
};

export default orderForm;
