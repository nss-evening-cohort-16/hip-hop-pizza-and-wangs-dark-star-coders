import clearDom from '../../helpers/data/clearDom';

const paymentForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
        <form id="submit-close-form" class="mb-4">
        <div class="form-group">
        <label for="paymentType">Payment Type</label>
        <select class="form-select" id="paymentType" value="${obj.paymentType || ''}" required required>
            <option selected>Select Payment Type</option>
            <option value="1">Cash</option>
            <option value="2">Check</option>
            <option value="2">Debit</option>
            <option value="2">Credit</option>
            <option value="2">Mobile-Payment</option>
        </select>
        </div>
        <div class="form-group">
            <label for="tip">Tip Amount</label>
            <input type="text" class="form-control" id="tip" aria-describedby="tip" placeholder=" " value="${obj.tip || ''}" required>
        </div>
          <button type="submit" id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="btn btn-primary">Add/ Edit Item</button>
        </form>`;
};

export default paymentForm;
