import Vue from 'vue'
import Router from 'vue-router'

// const Home =()=>import("@/components/pages/Home.vue")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movie',
      name: 'Movie',
      component: ()=>import("@/components/pages/Movie.vue"),
      children:[
        {
          path: 'city',
          name: 'city',
          component: ()=>import("@/components/pages/City.vue")
        },
        {
          path: 'nowPlaying',
          name: 'playing',
          component: ()=>import("@/components/pages/NowPlaying.vue")
        },
        {
          path: 'comingSoon',
          name: 'soon',
          component: ()=>import("@/components/pages/ComingSoon.vue")
        },
        {
          path: 'search',
          name: 'search',
          component: ()=>import("@/components/pages/Search.vue")
        },
        {
          path: 'detail/:movieId',
          components: {
            detail:()=>import("@/components/pages/MovieDetail.vue")
          },
          props:{
            detail:true
          }
        },
        {
          path:'/movie',
          redirect:'/movie/nowPlaying',
          component: ()=>import("@/components/pages/NowPlaying.vue")
        }
      ]
    },
    {
      path: '/cinema',
      name: 'Cinema',
      component: ()=>import("@/components/pages/Cinema.vue")
    },
    {
      path: '/myCenter',
      name: 'myCenter',
      component: ()=>import("@/components/pages/MyCenter.vue")
    },
    {
      path:'/*',
      redirect:'/movie',
      component:()=>import("@/components/pages/Movie.vue")
    }

  ]
})
