<template>
  <div id="app">
    <router-view/>
    <!--<div>
      <form :form="form">
        名称： <input type="text" v-model="form.name"/>
        信息：<textarea cols="30" rows="20" v-model="form.info"></textarea>
      </form>
      <button @click="addInfo"> asdasdasdsa</button>
    </div>-->
  </div>
</template>
<script>
// const qs = require('qs');
// import qs from 'qs'
import request from '@/http/request'

export default {
  data () {
    return {
      form: {}
    }
  },
  mounted () {
    this.addInfo()
  },
  methods: {
    addInfo () {
      console.log(this.form)
      request.post('/blog/getTags', { name: 11 }).then(res => {
        console.log('aaaaaa:', JSON.stringify(res))
      }).catch(err => {
        console.log(JSON.stringify(err))
      })
      /* this.$axios.get(
          'http://127.0.0.1:8092/blog/getTags',
          {params: {name: 11}},
          {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        ).then(res => {
          console.log(res)
        }) */
    }
  }
}
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
