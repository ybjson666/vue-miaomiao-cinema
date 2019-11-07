<template>
  <div class="movie">
    <Headers :title="title"/>
    <div class="content">
        <div class="content-menu">
          <router-link tag="div" to="/movie/city" class="city-name">
            <span class="city">{{curCity.nm}}</span>
            <i class="triangle"></i>
          </router-link>
          <div class="hot-search">
            <router-link tag="div" to="/movie/nowPlaying" class="hot-item">正在热映</router-link>
            <router-link tag="div" to="/movie/comingSoon" class="hot-item">即将上映</router-link>
          </div>
          <router-link  tag="div"  to="/movie/search" class="search-entry">
            <span class="search"><img src="../../assets/images/search.png" alt=""></span>
          </router-link>
        </div>
        <div class="content-container">
            <transition name="slide">
              <keep-alive>
                <router-view/>
                </keep-alive>
            </transition>
        </div>
    </div>
    <Footers/>
    <transition name="slide">
        <router-view name="detail"/>
    </transition>
  </div>
</template>

<script>
import {mapMutations,mapActions,mapState} from 'vuex'
import Headers from '@/components/common/Headers.vue'
import Footers from '@/components/common/Footers.vue'
import { messageBox } from '../tools';

export default {
  name:'Movie',
  data(){
    return {
      title:"喵喵电影"
    }
  },
  computed:{
    ...mapState(['curCity','localCity'])
  },
  methods:{
    ...mapActions(['get_location']),
    ...mapMutations(['CHOOSE_CITYLIST'])
  },
  components:{
    Footers,
    Headers
  },
  activated(){
    let curCity_id=this.curCity.nm;
    let localCity_id=this.localCity.nm;
    if(curCity_id!==localCity_id){
      this.get_location(()=>{
        messageBox({
          title:"定位",
          content:this.localCity.nm,
          cancel:"取消",
          ok:"确定",
          handleOk:()=>{
            this.CHOOSE_CITYLIST(this.localCity)
          }
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
 .movie{
   height: 100%;
   .content-menu{
     display: flex;
     height: 2.5rem;
     border-bottom: 2px solid #e0e0e0;
     box-sizing: border-box;
     .city-name{
       flex: 1.1;
       text-align: center;
       line-height: 2.5rem;
       position: relative;
       margin-right: 1.2rem;
      &.router-link-active{
           border-bottom: 2px solid #d81e06;
           color: #d81e06;
        }
       .city{
         font-size: .7rem;
       }
       .triangle{
         border-left: .2rem solid transparent;
         border-bottom: 0rem solid transparent;
         border-right: .2rem solid transparent;
         border-top: .4rem solid #000;
         position: absolute;
         top:50%;
         right: 0;
         margin-top: -.15rem; 
       }
     }
     .hot-search{
       flex: 3.5;
       display: flex;
       margin-right: .5rem;
       .hot-item{
         flex: 1;
         text-align: center;
         line-height: 2.5rem;
         height: 2.4rem;
         cursor: pointer;
         &.router-link-active{
           border-bottom: 2px solid #d81e06;
           color: #d81e06;
        }
       }
     }
     .search-entry{
       flex: 1;
       text-align: center;
       line-height: 2.5rem;
       img{
         width: 1.2rem;
       }
        &.router-link-active{
           border-bottom: 2px solid #d81e06;
           color: #d81e06;
        }
     }
   }
  .content-container{
    height:100%;
  }
 }
 .slide-enter-active, .slide-leave-active{
   transition:all .5s;
 }
 .slide-enter,.slide-leave-active{
   transform: translate(50% ,-50%) rotateZ(-30deg);
 }
</style>
