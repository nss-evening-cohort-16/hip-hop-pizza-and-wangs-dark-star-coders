import clearDom from '../helpers/data/clearDom';

const viewItem = (obj) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
      <div class="mt-5 d-flex flex-wrap">
       <div class="d-flex flex-column">
         <div class="mt-5">
           <i id="edit-order-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
           <i id="delete-item--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
         </div>
       </div>
       <div class="text-white ms-5 details">
         <h2>${obj.name} reached at ${obj.email} or ${obj.phone}</h2>
         <h5>The current item is ${obj.name} and it costs ${obj.price}</h5>
        </div>`;
  obj.itemObject.forEach((item) => {
    document.querySelector('#view').innerHTML += `
        <div class="mt-5 d-flex flex-wrap">
          <div class="d-flex flex-column">
           <div class="mt-5">
             <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
             <i id="delete-book--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
           </div>
          </div>
          <div class="text-white ms-5 details">
           <p>${item.name}</p>
           <hr>
           <p>PRICE: ${item.price}</p>      
          </div>
        </div>`;
  });
};

export default viewItem;
