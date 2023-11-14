import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Popular from '@/views/Popular.vue'
import WatchList from '@/views/WatchList.vue';
import Friends from '@/views/Friends.vue';
import Favorites from '@/views/Favorites.vue';
import Account from '@/views/Account.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
        
    {
      path:"/popular",
      component: Popular
    },
    {
      path:"/watchlist",
      component:WatchList
    },
    {
      path:"/friends",
      component:Friends
    },
    {
      path:"/favorites",
      component:Favorites
    },
    {
      path:"/account",
      component:Account
    }
  ]
})

export default router
