<template>
  <div class="playing">
    <Loading v-show="isLoading"/>
    <Scroller 
      :pullDownMsg="pullDownMsg" 
      :pullUpMsg="pullUpMsg"
      @scrolling="scrolling"
      @touchEnded="touchEnded"
      v-show="!isLoading"
    >
      <ul class="play-list">
        <li v-for="(item,index) in nowPlayingList" :key="index">
          <div class="pic-show" @tap="seekDetail(item.id)"><img :src="item.img | setWh('128.180')" alt="" /></div>
          <div class="info-list">
            <h2>{{item.nm}}</h2>
            <p>观众评<span class="grade">{{item.sc}}</span></p>
            <p>主演：{{item.star}}</p>
            <p>{{item.showInfo}}</p>
          </div>
          <div class="btn_mall">购票</div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>

<script>
import {mapActions,mapState,mapMutations} from 'vuex';
import Scroller from "@/components/common/Scroller.vue";
import { messageBox } from '../tools';

export default {
  name:'playing',
  data(){
    return {
      pullDownMsg:"",
      pullUpMsg:"",
      isLoading:true,
      prevCityId:-1
    }
  },
  components:{
    Scroller
  },
  computed:{
    ...mapState(['nowPlayingList','curCity','localCity'])
  },
  methods:{
    ...mapActions(['get_nowPlaying','get_location']),
    ...mapMutations(['CHOOSE_CITYLIST']),
    seekDetail(id){
      this.$router.push(`/movie/detail/${id}`)
    },
    scrolling(pos){
      if(pos.y>30){
        this.pullDownMsg="更新中...";
      }
    },
    touchEnded(pos){
      if(pos.y>30){
        setTimeout(()=>{
          this.pullDownMsg="更新成功";
          setTimeout(()=>{
            this.pullDownMsg="";
          },500)
        },500)
      }
    }
  },
  activated(){
     let curCity_id=this.curCity.nm;
    let localCity_id=this.localCity.nm;
    if(this.prevCityId!==this.curCity.id){
        this.get_nowPlaying(()=>{
        this.isLoading=false;
        this.prevCityId=this.curCity.id;
      });
    }
   
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


  },
  mounted(){
  }
}
</script>
<style lang="scss" scoped>
.playing{
  display: flex;
  position: relative;
  height: 100%;
  .play-list{
    flex: 1;
    padding: .5rem;
    padding-bottom: 0;
     li{
       display: flex;
       align-items: center;
       border-bottom: 1px solid #e6e6e6;
       padding-bottom:.5rem;
       margin-bottom: .6rem;
       .pic-show{
         width: 3.2rem;
         height: 4.5rem;
         overflow: hidden;
         img{
           min-height: 4.5rem;
         }
       }
       .info-list{
         margin-left: .5rem;
         position: relative;
         flex: 1; 
         h2{
           font-size: .85rem;
           line-height: 1.2rem;
           width: 7.5rem;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
         }
         p{
           color: #666;
           line-height: 1.1rem;
           width: 10rem;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
         }
         .grade{
            font-weight: 700;
            color: #faaf00;
            font-size: .75rem; 
          }
          img{
            width: 2.5rem;
            position: absolute;
            right: .5rem;
            top:.25rem;
          }
         
       }
       .btn_mall, .btn_pre{
          width: 2.35rem;
          height: 1.35rem;
          line-height: 1.4rem;
          text-align: center;
          background: #f03d37;
          border-radius: .2rem;
          font-size: .6rem;
          cursor: pointer;
          color: #fff;
       }
       .btn_pre{
         background: #3c9fe6;
       }
     }
  }

}
</style>