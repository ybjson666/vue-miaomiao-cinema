<template>
  <div class="login">
      <div>
          <input type="text" class="login_text" placeholder="用户名/手机号/Emai">
      </div>
      <div>
          <input type="password" class="login_text" placeholder="请输入您的密码">
      </div>
      <div class="login_btn">
          <input type="submit" value="登录">
      </div>
      <div class="login_link">
          <router-link to="">立即注册</router-link>
          <router-link to="">找回密码</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name:'login',
  components:{},
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
.login{
    .login_text{
        width: 100%;
        height: 2rem;
        border-bottom: 1px solid #ccc;
        padding: 0 .3rem;
        box-sizing: border-box;
    }
    .login_btn{
        height: 2.5rem;
        margin: .5rem;
        input{
            width: 100%;
            height: 100%;
            background: #d81e06;
            border-radius: .15rem;
            display: block;
            color: #fff;
            font-size: .8rem;
        }
    }
    .login_link{
        display: flex;
        justify-content: space-between;
        a{
            margin: 0 .25rem;
            color: #d81e06;
        }
    }
}
</style>