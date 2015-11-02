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
    <table class="table l_books_table">
      <thead>
        <tr>
          <th v-for="key in columns"
            @click="sortBy(key)"
            class="l_books_table_head">
            {{ key | capitalize }}
            <i class="fa fa-sort-asc" v-show="sortOrders[key] > 0 ? true : false"></i>
            <i class="fa fa-sort-desc" v-show="sortOrders[key] > 0 ? false : true"></i>
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
      sortOrders: sortOrders
    }
  },

  attached () {
    store.fetchBooks().then((data) => {
      this.updateBook(data)
    })
  },

  methods: {
    updateBook (data) {
      this.books = data
    },
    sortBy (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
}
</script>

