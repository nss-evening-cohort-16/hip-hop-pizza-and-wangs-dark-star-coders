import createDom from '../components/createDom';
import domEvents from '../events/domEvents';
import logoutButton from '../components/logoutButton';

const startApp = () => {
    createDom();
    domEvents();
    logoutButton();
}

export default startApp;
