import clearDom from '../../helpers/data/clearDom';

const itemForm = (obj = {}, orderId) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
        <form id="submit-item-form" class="mb-4">
          <div class="form-group">
            <label for="itemName">Item Name</label>
            <input type="text" class="form-control" id="itemName" aria-describedby="itemName" placeholder="Enter Item Name" value="${obj.name || ''}" required>
          </div>
          <div class="form-group">
            <label for="itemPrice">Item Price</label>
            <input type="text" class="form-control" id="itemPrice" aria-describedby="itemPrice" placeholder="Enter Item Price" value="${obj.price || ''}" required>
          </div>
          <button type="submit" id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : `submit-item--${orderId}`}" class="btn btn-primary">Add/ Edit Item</button>
        </form>`;
};

export default itemForm;
