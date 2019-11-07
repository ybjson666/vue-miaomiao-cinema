<template>
  <div class="cinema">
    <Headers :title="title"/>
    <div class="content">
        <div class="cinema_menu">
          <div class="city_switch">
            <span class="tags">全城</span>
            <span class="triangle"></span>
          </div>
          <div class="brand_switch">
            <span class="tags">品牌</span>
            <span class="triangle"></span>
          </div>
          <div class="feature_switch">
            <span class="tags">特色</span>
            <span class="triangle"></span>
          </div>
        </div>
        <div class="cinema_content">
          <clist :cinemaList="cinemaList" :isLoading="isLoading"/>
        </div>
    </div>
    <Footers/>
    
  </div>
</template>

<script>
import Headers from '@/components/common/Headers.vue'
import Footers from '@/components/common/Footers.vue'
import Clist from '@/components/pages/Clist.vue'
import {mapActions,mapState} from 'vuex'
export default {
  name:'cinema',
  data(){
    return {
      title:"热门影院",
      isLoading:true,
      preCityId:-1
    }
  },
  components:{
    Footers,
    Headers,
    Clist
  },
  computed:{
    ...mapState(['cinemaList','curCity'])
  },
  methods:{
    ...mapActions(['get_cinemaList'])
  },
  activated(){
    if(this.preCityId!==this.curCity.id){
        this.get_cinemaList(()=>{
        this.isLoading=false;
        this.preCityId=this.curCity.id;
      });
    }
    
  },
  mounted(){}
}
</script>
<style lang="scss" scoped>
.cinema{
  .cinema_menu{
    height: 2.25rem;
    display: flex;
    border-bottom: 1px solid #e6e6e6;
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    position: fixed;
    width: 100%;
    left: 0;
    div{
      position: relative;
      .tags{
        margin-right: .15rem;
      }
      .triangle{
        border-top:.3rem solid #333;
        border-left: .18rem solid transparent;
        border-right: .18rem solid transparent;
        position: absolute;
        top:.3rem;
      }
    }
    
  }
  .cinema_content{
    padding-top: 2.25rem;
    box-sizing: border-box;
    height: 100%;
  }
}
</style>