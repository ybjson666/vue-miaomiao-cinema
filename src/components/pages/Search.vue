<template>
  <div class="search">
    <div class="search_input">
      <div class="search_input_wrapper">
        <span class="search_icon"><img src="../../assets/images/search_small.png" alt=""></span>
        <input type="text" v-model="keyWords">
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <div class="search-contents">
          <Loading v-show="isLoading"/>
          <div v-show="!isLoading" class="list-wrapper">
              <ul v-if="searchList.length">
              <li v-for="(item,index) in searchList" :key="index">
                <div class="img"><img :src="item.img | setWh('128.180')" alt=""></div>
                <div class="info">
                  <p class="info_title">
                    <span class="movie_name">{{item.nm}}</span>
                    <span class="score">{{item.sc}}</span>
                  </p>
                  <p class="desc">{{item.enm}}</p>
                  <p>{{item.cat}}</p>
                  <p>{{item.rt}} 上映</p>
                </div>
              </li>
            </ul>
            <p v-if="!searchList.length" class="noData">暂无数据</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex';
export default {
  name:'search',
  data(){
    return {
      keyWords:"",
      isLoading:false
    }
  },
  computed:{
    ...mapState(['searchList'])
  },
  methods:{
    ...mapActions(['get_searchList']),
  },
  watch:{
    keyWords(newVal){
      clearTimeout(this.timmer);
      this.timmer=setTimeout(()=>{
        this.isLoading=true;
        this.get_searchList([newVal,()=>{
          this.isLoading=false;
        }])
      },500)
      
      
    }
  }
}
</script>
<style lang="scss" scoped>
.search{
  height: 100%;
  .search_input{
    padding: .4rem .5rem;
    background: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    .search_input_wrapper{
      padding: 0 .5rem;
      border:1px solid #e6e6e6;
      border-radius: .25rem;
      background: #fff;
      position: relative;
      .search_icon{
        position:absolute;
        display: block;
        width: .8rem;
        top:.2rem;
        left: .2rem;
      }
      input{
        padding: .2rem 0;
        padding-left: .7rem;
        border:none;
        width: 100%;
        height: 1rem;
      }
    }
  }
  .search_result{
    height: 100%;
     h3{
       font-size: .75rem;
       color: #999;
       padding: .45rem .75rem;
       border-bottom: 1px solid #e6e6e6;
     }
     .search-contents{
       display: flex;
       height: 100%;
       .list-wrapper{
         width: 100%;
       }
     }
     li{
       border-bottom: 1px dashed #c9c9c9;
       padding: .5rem .75rem;
       box-sizing: border-box;
       overflow: hidden;
       display: flex;
       .img{
         width: 3rem;
       }
       .info{
        flex: 1;
        margin-left:.75rem;
        p{
          height: 1.1rem;
          display: flex;
          line-height: 1.1rem;
        }
        .desc{
          width: 13rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .info_title{
          .movie_name{
            width: 12rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .score{
            flex: 1;
            color: #fc7103;
            font-size: .8rem;
            text-align: center;
          }
          .movie_name{
            font-size: .85rem;
          }
        }
       }
     }
  }
  .noData{
    text-align: center;
    color: #999;
    line-height: 2rem;
    font-size: 1rem;
  }
}
</style>