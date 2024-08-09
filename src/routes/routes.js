import Vue from 'vue'
import Router from 'vue-router'
import ManageTasks from '../components/ManageTasks.vue'
import AddTask from '../components/AddTask.vue'
// import About from '../components/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ManageTasks',
      component: ManageTasks
    },
    {
      path: '/add-task',
      name: 'AddTask',
      component: AddTask
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: About
    // },
  ]
})
