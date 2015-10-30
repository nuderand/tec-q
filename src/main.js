import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
require('./../bower_components/bootstrap/dist/css/bootstrap.css')
require('./../bower_components/font-awesome/css/font-awesome.min.css')

Vue.use(Router)

var router = new Router()

router.start(App, '#app')

