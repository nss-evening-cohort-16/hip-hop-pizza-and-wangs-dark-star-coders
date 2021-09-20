import hiphop from '../../../instructions/hhpw-record.png';

const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
        <a class="navbar-brand title" href="#"></a>
        <img class = "logo" src="${hiphop}">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="view-order">
                View Order <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="create-order">Create an Order</a>
            </li>
            <li>
            <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search Order"
              aria-label="Search"
            />
            </li>
          </ul>
          <div id="signout-button"></div>
        </div>
      </nav>
    `;
};

export default navBar;
