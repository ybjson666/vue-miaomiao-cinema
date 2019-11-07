<template>
  <div class="cList">
      <Loading v-show="isLoading"/>
      <Scroller 
        :pullDownMsg="pullDownMsg"
        :pullUpMsg="pullUpMsg"
        @scrolling="scrolling"
        @touchEnded="touchEnded"
        v-show="!isLoading"
      >
        <ul>
            <li v-for="(item,index) in cinemaList" :key="index">
                <div>
                    <span>{{item.nm}}</span>
                    <span class="q"><span class="price">{{item.sellPrice}}</span>元起</span>
                </div>
                <div class="address">
                    <span class="address">{{item.addr}}</span>
                    <span>{{item.distance}}</span>
                </div>
                <div class="card">
                    <div v-for="(value,key) in item.tag" :key="key" v-if="value===1" :class="key | classCard">
                        <span>{{key | fomatCard}}</span>
                    </div>
                </div>
            </li>
        </ul>
      </Scroller>
  </div>
</template>

<script>
import Scroller from '@/components/common/Scroller.vue'
export default {
  name:'cList',
  components:{
      Scroller
  },
  data(){
      return{
          pullDownMsg:"",
          pullUpMsg:""
      }
  },
  methods:{
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
  props:['cinemaList','isLoading'],
  filters:{
      fomatCard(key){
          let card=[
              {
                  key:"allowRefund",
                  value:"改签"
              },
              {
                  key:"endorse",
                  value:"退"
              },
              {
                  key:"sell",
                  value:"折扣卡"
              },
              {
                  key:"snack",
                  value:"小吃"
              }
          ]

          for(var i=0;i<=card.length;i++){
              if(card[i].key==key){
                  return card[i].value;
              }
          }
          return '';
      },
      classCard(key){
          let card=[
              {
                  key:"allowRefund",
                  value:"bl"
              },
              {
                  key:"endorse",
                  value:"bl"
              },
              {
                  key:"sell",
                  value:"or"
              },
              {
                  key:"snack",
                  value:"or"
              }
          ]

          for(var i=0;i<=card.length;i++){
              if(card[i].key==key){
                  return card[i].value;
              }
          }
          return '';
      }
  }
}
</script>
<style lang="scss" scoped>
.cList{
    position: relative;
    height: 100%;
    ul{
        padding:1rem;
        padding-bottom: 0;
        li{
            border-bottom: 1px solid #e6e6e6;
            margin-bottom: 1rem;
            div{
                margin-bottom: .5rem;
                .q{
                    font-size: .55rem;
                    color: #f03d37;
                    .price{
                        font-size: .9rem;
                    }
                }
            }
            .address{
                color: #666;
                overflow: hidden;
                .address{
                    width: 80%;
                    display: inline-block;
                    line-height: 1rem;
                }
                span:nth-child(2){
                 float: right;
                }
            }
            .card{
                display: flex;
                div{
                    padding: 0 .15rem;
                    line-height: .75rem;
                    border-radius: .1rem;
                    color: #f90;
                    border:1px solid #f90;
                    margin-right: .25rem;
                    &.or{
                        color: #f90;
                        border:1px solid #f90;
                    }
                    &.bl{
                        color: #589daf;
                        border:1px solid #589daf;
                    }
                }
            }
             
        }
    }
}
</style>