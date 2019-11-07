<template>
  <div class="headers">
    <slot></slot>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name:'headers',
  components:{},
  props:['title'],
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.headers{
    background: #d81e06;
    height: 2.5rem;
    position: fixed;
    width: 100%;
    left: 0;
    top:0;
    z-index: 5;
    h2 {
        color: #fff;
        text-align: center;
        font-size:.8rem;
        line-height: 2.5rem;
    }
}
</style>