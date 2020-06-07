<template>
  <div class="home">
    <img alt="Vue logo" src="@assets/logo.png">
    <!--<HelloWorld :msg="msg"/>-->
    <input type="text" v-model="msg"/>
    {{sum}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      msg:111
    }
  },
  computed:{
    sum(){
      let aa = {};
      aa.name = 1;
      aa.age = 2;
      return Number(aa.name)+Number(aa.age);
    }
  },
  methods:{
    aa() {

    },

  },
  mounted(){ // dom加载完成执行
    this.msg
    this.aa();
  },
}
</script>
