import signOut from '../helpers/auth/signOut';
import { showAuthors } from '../components/authors';
import { getAuthors, getFavAuthors } from '../helpers/data/authorData';
import { showBooks } from '../components/books';
import { getBooks, booksOnSale } from '../helpers/data/bookData';

// navigation events
const navigationEvents = () => {
   // LOGOUT BUTTON
   document.querySelector('#logout-button')
   .addEventListener('click', signOut);

   // VIEW ORDER
   document.querySelector('#view-order').addEventListener('click', () => {
    viewOrder().then((ordersArray) => showOrder(ordersArray));
    

  // CREATE AN ORDER
  document.querySelector('#-order').addEventListener('click', () => {
    createOrder().then((ordersArray) => showOrder(ordersArray));

  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);
    


export default navigationEvents;