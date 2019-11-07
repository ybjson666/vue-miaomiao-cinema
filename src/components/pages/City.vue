<template>
  <div class="city">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="hot-list">
          <li v-for="(city,index) in getHotCities" :key="index" @click="chooseCity(city)">{{city.nm}}</li>
        </ul>
      </div>
      <div class="city-wrapper">
        <div class="wrapper" ref="wrapper">
          <div class="city_sort" ref="citySort">
            <div v-for="(city,index) in formatCity" :key="index" class="city-list-hook">
              <h2>{{city.index}}</h2>
              <ul>
                <li v-for="item in city.list" :key="item.id" @click="chooseCity(item)">{{item.nm}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul class="alph_list">
        <li v-for="(item,index) in formatCity" :key="index" @click="handleIndex(index)" :class="{ons:index==curIdex}">{{item.index}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions,mapState,mapGetters,mapMutations} from 'vuex'
import BScroll from 'better-scroll'
export default {
  name:'city',
  data(){
    return {
      listHeight:[],
      scrolly: 0,
    }
  },
  computed:{
    ...mapGetters(['getHotCities','formatCity']),
    curIdex(){
      for (let i = 0; i < this.listHeight.length; i++) {
        const height1 = this.listHeight[i];
        const height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrolly >= height1 && this.scrolly < height2)) {
          return i;
        }
      }
      return 0;
    }
  },
  methods:{
    ...mapActions(['get_cityList']),
    ...mapMutations(['CHOOSE_CITYLIST']),
    handleIndex(index){
      let h2=this.$refs.citySort.getElementsByTagName("h2");
      let el=h2[index];
      this.scroll.scrollToElement(el,500);
    },
    chooseCity(city){
      const {nm,id}=city;
      let cityObj={nm,id};
      this.CHOOSE_CITYLIST(cityObj);
      this.$router.push('/movie/nowPlaying')
    },
     _calculateHeight() {
      let cityList = this.$refs.wrapper.getElementsByClassName(
        "city-list-hook"
      );
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < cityList.length; i++) {
        const item = cityList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    _initScroll(){
       if(!this.scroll){
        this.scroll=new BScroll(this.$refs.wrapper,{
          click:true,
          probeType: 3
        })
      }
      this.scroll.on("scroll", pos => {
        this.scrolly = Math.abs(Math.round(pos.y));
      });
    }
  },
  created(){
    if(!localStorage.getItem("cityDatas")){
        this.get_cityList();
    }
    
  },
  mounted(){
    this.$nextTick(()=>{
      this._initScroll();
      setTimeout(()=>{
        this._calculateHeight();
      },300)
      
    })
  }
 
}
</script>
<style lang="scss" scoped>
.city-wrapper{
  position: relative;
  height: calc( 100% - 9.6rem);
}
.wrapper{
  position: absolute;
  overflow: hidden;
  z-index: 10;
  width: 100%;
  height: 100%;
  top:.2rem;
}
.city{
  display: flex;
  width: 100%;
  height: 100%;
  .city_list{
    flex: 1;
    background: #fff5f0;
    .city_hot{
      width: 100%;
      padding-bottom: .3rem;
      border-bottom: 1px solid #6666;
      box-sizing: border-box;
      h2{
        padding-left: .75rem;
        line-height: 1.5rem;
        font-size: .7rem;
        background: #f0f0f0;
        font-weight: normal;
      }
      ul{
        overflow: hidden;
        li{
          width: 27%;
          float: left;
          background: #fff;
          height: 1.65rem;
          margin-top: .75rem;
          margin-left:3%;
          padding: 0 .2rem;
          border: 1px solid #999;
          text-align: center;
          line-height: 1.65rem;
        }
      }
    }
    .city_sort{
      width: 100%;
      div{
        margin-top: 1rem;
        h2{
          padding-left: .75rem;
          line-height: 1.5rem;
          font-size: .7rem;
          background: #f0f0f0;
          font-weight: normal;
          box-sizing: border-box;
        }
        ul{
          padding-left: .5rem;
          margin-top: .5rem;
          box-sizing: border-box;
          li{
            line-height: 1.5rem;
          }
        }
      }
    }
  }
  .city_index{
    width: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-left: 1px solid #e6e6e6;
    .ons{
      color: #d81e06;
    }
  }
}
</style>