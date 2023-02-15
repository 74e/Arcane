import { createRouter, createWebHashHistory } from 'vue-router';

import Library from './pages/LibraryGameList.vue';
import GameNews from './pages/GameNews.vue';
import Home from './pages/HomePage.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: Library,
      path: '/library/:currentPage'
    },
    {
      component: GameNews,
      path: '/gamenews/:currentPage'
    },
    {
      component: Home,
      path: '/'
    }
  ]
});
