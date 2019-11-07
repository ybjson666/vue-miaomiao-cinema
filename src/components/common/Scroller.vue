<template>
  <div class="wrapper" ref="wrapper">
      <div class="scroll-wrapper">
          <div class="pull-down">{{pullDownMsg}}</div>
          <slot></slot>
          <div class="pull-up">{{pullUpMsg}}</div>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name:'scroller',
  data(){
    return{

    }
  },
  props:['pullDownMsg','pullUpMsg','scrolling','touchEnded'],
  computed:{},
  methods:{
      _initScroll(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,
            probeType: 3,
            tap:true
        })
        this.scroll.on("scroll",(pos)=>{
            this.$emit('scrolling',pos)
        })

        this.scroll.on('touchEnd',(pos)=>{
            this.$emit('touchEnded',pos)
        })
      }
  },
  mounted(){
      this.$nextTick(()=>{
          this._initScroll();
      })
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
    position: absolute;
    top:0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    .pull-down,.pull-up{
        background: rgba(0,0,0,.5);
        color: orange;
        line-height: 1.5rem;
        text-align: center;
        font-size: .8rem;
    }
}
</style>