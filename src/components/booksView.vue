<template>
  <div class="container">
    <h1>Books</h1>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>タイトル</th>
          <th>価格</th>
          <th>作者</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books">
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

export default {
  name: 'BooksView',

  data () {
    return {
      books: []
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
    }
  }
}
</script>

