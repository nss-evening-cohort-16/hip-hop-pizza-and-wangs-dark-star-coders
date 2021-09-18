import signIn from '../helpers/signIn';
import hiphop from '../../../instructions/hhpw-record.png';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>
  <img src="${hiphop}">`;

  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
