import Vue from 'vue'
import Router from 'vue-router'
import app from './components/app.vue'
import welcomeView from './components/welcomeView.vue'
import signupView from './components/signupView.vue'
import booksView from './components/booksView.vue'
import rankingView from './components/rankingView.vue'
require('./../bower_components/bootstrap/dist/css/bootstrap.css')
require('./../bower_components/font-awesome/css/font-awesome.min.css')
require('./index.css')

Vue.use(Router)

var router = new Router()

router.map({
  '/': {
    component: welcomeView
  },
  '/signup': {
    component: signupView
  },
  '/books/1': {
    component: booksView
  },
  '/ranking': {
    component: rankingView
  }
})

router.redirect({
  '/books': '/books/1'
})
router.start(app, '#app')

