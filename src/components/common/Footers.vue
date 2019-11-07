<template>
  <div class="footers">
      <ul class="navs">
          <li >
              <router-link to="/movie">
                  <span class="icon movie_icon"></span>
                  <p class="nav-text">电影</p>
              </router-link>
          </li>
          <li >
              <router-link to="/cinema">
                  <span class="icon cinema_icon"></span>
                  <p class="nav-text">影院</p>
              </router-link>
          </li>
          <li >
              <router-link to="/myCenter">
                  <span class="icon myCenter_icon"></span>
                  <p class="nav-text">我的</p>
              </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name:'footers'
}
</script>
<style lang="scss" scoped>
.footers{
    height: 3rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 2px solid #e0e0e0;
    box-sizing: border-box;
    background: #fff;
    z-index: 10;
    .navs{
        display: flex;
        height: 100%;
        li{
            flex: 1;
            a{
                display: block;
                text-align: center;
                font-size: .7rem;
                padding-top: .3rem;
                box-sizing: border-box;
                height: 100%;
                cursor: pointer;
                .icon{
                    display: block;
                    width: 1.2rem;
                    height: 1.2rem;
                    margin: 0 auto;
                    margin-bottom: .1rem;
                }
                .movie_icon{
                    background: url('../../assets/images/movie.png') no-repeat;
                    background-size: 100% 100%;
                }
                .cinema_icon{
                    background: url('../../assets/images/cinema.png') no-repeat;
                    background-size: 100% 100%;
                }
                .myCenter_icon{
                    background: url('../../assets/images/my.png') no-repeat;
                    background-size: 100% 100%;
                }
                .nav-text{
                    text-align: center;
                }
            }
            .router-link-active{
                color: #d81e06;
                .movie_icon{
                    background: url('../../assets/images/movie_sele.png') no-repeat;
                    background-size: 100% 100%;
                }
                .cinema_icon{
                    background: url('../../assets/images/cinema_sele.png') no-repeat;
                    background-size: 100% 100%;
                }
                .myCenter_icon{
                    background: url('../../assets/images/my_sele.png') no-repeat;
                    background-size: 100% 100%;
                }
            }
        }
    }
}
</style>