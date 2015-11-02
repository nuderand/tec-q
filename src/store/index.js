import { EventEmitter } from 'events';
import { Promise } from 'es6-promise';

class Store extends EventEmitter {
  constructor() {
    super();
  }

  fetchBooks() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: 'http://localhost:3000/books.json',
        type: 'GET',
        xhrFields: {
          withCredentials: true
        }
      }).done((data) => {
        resolve(data);
      });
    });
  }
}

const store = new Store();
export default store;
