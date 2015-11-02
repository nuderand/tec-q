<style lang="sass">
.l_books {
  .l_books_table_head {
    cursor: pointer;
  }
}
</style>

<template>
  <div class="container l_books">
    <h1>Books</h1>
    <button class="btn btn-success" @click="changePrice">{{ price ? 'Change Japanese Money' : 'Change American Money' }}</button>
    <table class="table l_books_table">
      <thead>
        <tr>
          <th v-for="key in columns"
            @click="sortBy(key)"
            class="l_books_table_head">
            {{ key | capitalize }}
            <i class="fa" v-bind:class="{ 'fa-sort-asc': sortOrders[key] > 0, 'fa-sort-desc': sortOrders[key] < 0 }"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books
          | orderBy sortKey sortOrders[sortKey]">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.price }}</td>
          <td>{{ book.author }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from './../store'

const columns =  ['id', 'title', 'price', 'author']
let sortOrders = {}
columns.forEach(function (key) {
  sortOrders[key] = 1
})

export default {
  name: 'BooksView',

  data () {
    return {
      books: [],
      columns: columns,
      sortKey: '',
      sortOrders: sortOrders,
      price: true
    }
  },

  attached () {
    store.fetchBooks().then((data) => {
      this.books = data
    })
  },

  methods: {
    sortBy (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    changePrice () {
      store.updatePrice(this.price).then((data) => {
        this.books = data
        this.price = !this.price
      })
    }
  }
}
</script>

