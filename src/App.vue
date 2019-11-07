<template>
  <div id="app">
    <transition name="bound">
        <keep-alive>
          <router-view/>
        </keep-alive>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import './assets/css/reset.css';

  #app{
    height: 100%;
    .content{
      position: fixed;
      width: 100%;
      top:2.5rem;
      height: calc(100% - 5.5rem);
      overflow-y: scroll;
    }
  }
  .bound-enter-active,.bound-leave-active{
    transition: all .5s;
  }
  .bound-enter,.bound-leave-active{
    transform: translateX(90%) skewY(30deg);
  }

</style>
