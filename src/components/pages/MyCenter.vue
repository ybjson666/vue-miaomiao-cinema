<template>
  <div class="myCenter">
    <Headers :title="title"/>
    <div class="content">
      <Login/>
    </div>
    <Footers/>
  </div>
</template>

<script>
import Headers from '@/components/common/Headers.vue'
import Footers from '@/components/common/Footers.vue'
import Login from '@/components/pages/Login.vue'
export default {
  name:'myCenter',
  data(){
    return {
      title:"个人中心"
    }
  },
  components:{
    Footers,
    Headers,
    Login
  },
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.myCenter{}
</style>