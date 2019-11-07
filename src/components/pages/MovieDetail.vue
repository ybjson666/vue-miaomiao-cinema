<template>
  <div class="movieDetail">
      <Headers :title="title">
          <span class="icon_back" @click="goBack"><img src="../../assets/images/back.png" alt=""></span>
      </Headers>   
      <div class="detail-content">
          <div class="detail_list">
              <div class="detail_list_bg" :style="{background:`url(${bgUrl}) 60% 10% no-repeat`}"></div>
              <div class="datail_list_filter"></div>
              <div class="detail_list_content">
                  <div class="detail_list_img">
                      <img :src="movieDetail.img | setWh('128.180')" alt="">
                  </div>
                  <div class="detail_list_info">
                      <h2>{{movieDetail.nm}}</h2>
                      <p>{{movieDetail.enm}}</p>
                      <p>{{movieDetail.sc}}</p>
                      <p>{{movieDetail.cat}}</p>
                      <p>{{movieDetail.src}} / {{movieDetail.dur}}</p>
                      <p>{{movieDetail.pubDesc}}</p>
                  </div>
              </div>
          </div>
          <div class="detail_intro">
              <p>{{movieDetail.dra}}</p>
          </div>
          <div class="detail_player">
            <div class=" swiper-container" ref="swiper">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide" v-for="(item,index) in movieDetail.photos" :key="index">
                        <div>
                            <img :src="item | setWh('384.540')" alt="">
                        </div>
                    </li>
                </ul>
                 <div class="swiper-pagination"></div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import Headers from '@/components/common/Headers.vue'
import {mapActions,mapState} from 'vuex'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  name:'movieDetail',
  components:{
      Headers
  },
  data(){
    return {
        title:"影片详情"
    }
  },
  props:['movieId'],
  computed:{
      ...mapState(['movieDetail']),
      bgUrl(){
        return this.movieDetail.img && this.movieDetail.img.replace(/w\.h/,'384.540')
      }
  },
  methods:{
      goBack(){
          this.$router.back();
      },
      ...mapActions(['get_movieDetail'])
  },
  created(){
    //  let movieId=this.$route.params.movieId;
      this.get_movieDetail(this.movieId);
  },
  mounted(){
      this.$nextTick(()=>{
          setTimeout(()=>{
              new Swiper(this.$refs.swiper,{
              direction:'horizontal',
               autoplay: {   //滑动后继续播放（不写官方默认暂停）
                    disableOnInteraction: false,
                },
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            })
          },300)
           
      })
  }
}
</script>
<style lang="scss" scoped>
.movieDetail{
    position: absolute;
    width: 100%;
    min-height: 100%;
    left: 0;
    top:0;
    z-index: 100;
    background: #fff;
    .icon_back{
        position: absolute;
        display: block;
        width: 1rem;
        height: 100%;
        left: .5rem;
        top:0;
        line-height: 2.5rem;
    }
    .detail-content{
        padding-top: 2.5rem;
        .detail_list{
            height: 10rem;
            width: 100%;
            position: relative;
            overflow: hidden;
            .detail_list_bg{
                width: 100%;
                height: 100%;
                filter: blur(5px)
            }
            .datail_list_filter{
                width: 100%;
                height: 100%;
                position: absolute;
                background: #40454d;
                opacity: .5;
                left: 0;
                top:0;
            }
            .detail_list_content{
                display: flex;
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top:0;
                z-index: 2;
                .detail_list_img{
                    width: 5.4rem;
                    height: 7.5rem;
                    border:1px solid #f0f2f3;
                    margin: 1rem;
                    img{
                        height: 100%;
                    }
                }
                .detail_list_info{
                    margin-top: 1rem;
                    h2{
                        font-size: 1rem;
                        color: #fff;
                        font-weight: normal;
                        line-height: 2rem;
                    }
                    p{
                        color: #ccc;
                        line-height: 1rem;
                        font-size: .7rem;
                    }
                }
            }
        }
    }
    .detail_intro{
        padding: .5rem;
        p{
            line-height: 1rem;
        }
    }
    .detail_player{
        padding: .5rem;
        box-sizing: border-box;
        overflow: hidden;
        width: 100%;
        .swiper-slide{
            // margin-right: 1rem;
            // text-align: center;
            // font-size: .7rem;
            height: 15rem;
            overflow: hidden;
            div{
                height: 100%;
                overflow: hidden;
                border-radius: 4px;
            }
            img{
                width: 100%;
                margin-bottom: .25rem;
                height: 100%;
            }
            p:nth-of-child(2){
                color: #999;
            }
        }
    }
    
}
</style>