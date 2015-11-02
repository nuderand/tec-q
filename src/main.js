import Vue from 'vue'
import Router from 'vue-router'
import app from './components/app.vue'
import welcomeView from './components/welcomeView.vue'
import signupView from './components/signupView.vue'
import booksView from './components/booksView.vue'
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
  '/books': {
    component: booksView
  }
})

router.start(app, '#app')

