<template>
  <div class="messageBox">
      <h2>{{title}}</h2>
      <p>{{content}}</p>
      <div>
          <span @click="handleCancel">{{cancel}}</span>
          <span @click="handleOk">{{ok}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'messageBox',
  props:{},
  data(){
    return {
    }
  },
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.messageBox{
    width: 10rem;
    height: 5.4rem;
    border:1px solid #ccc;
    border-radius: .2rem;
    box-shadow: .15rem .15rem .15rem #ccc;
    position: absolute;
    left: 50%;
    top:50%;
    margin-left: -5rem;
    margin-top: -2.7rem;
    padding-top: .5rem;
    box-sizing: border-box;
    z-index: 10;
    background: #fff;
    h2{
        text-align: center;
        line-height: 1.5rem;
        font-size: .9rem;
    }
    p{
        text-align: center;
        line-height: 1.5rem;
    }
    div{
        display: flex;
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        border-top:1px solid #ccc;
        span{
            flex: 1;
            text-align: center;
            line-height: 1.5rem;
            border-right: 1px solid #ccc
        }
        span:last-child{
            border: none;
        }
    }
}
</style>