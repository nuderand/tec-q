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
            <i class="fa" v-bind:class="{ 'fa-sort-asc': sortOrders[key] > 0, 'fa-sort-desc': sortOrders[key] < 0 }"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books
          | orderBy sortKey sortOrders[sortKey]">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.access }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from './../store'

const columns =  ['id', 'title', 'author', 'access']
let sortOrders = {}
columns.forEach(function (key) {
  sortOrders[key] = 1
})

export default {
  name: 'rankingView',

  data () {
    return {
      books: [],
      columns: columns,
      sortKey: '',
      sortOrders: sortOrders
    }
  },

  attached () {
    store.fetchScraypeBookRanking().then((data) => {
      this.books = data
    })
  },

  methods: {
    sortBy (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
}
</script>

