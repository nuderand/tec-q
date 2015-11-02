import { EventEmitter } from 'events';
import { Promise } from 'es6-promise';

class Store extends EventEmitter {
  constructor() {
    super();
    this.cacheBooks = null;
    this.rate = 120;
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
        this.cacheBooks = data;
        resolve(data);
      });
    });
  }

  updatePrice(price) {
    return new Promise((resolve, reject) => {
      this.cacheBooks.forEach((item) => {
        price ? item.price *= this.rate : item.price /= this.rate
      });
      resolve(this.cacheBooks);
    });
  }
}

const store = new Store();
export default store;
