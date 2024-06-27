import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: "/",
      alias: "/tutorial",
      name: "tutorial",
      component: () => import("../components/TutorialList.vue")
    },
    {
      path: "/tutorial/:id",
      name: "tutorial-edit",
      component: () => import("../components/Tutorial.vue")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../components/AddTutorial.vue")
    },
    {
      path: "/tutorial/detail/:id",
      name: "tutorial-detail",
      component: () => import("../components/TutorialDetail.vue")
    }
  ]
})

export default router
