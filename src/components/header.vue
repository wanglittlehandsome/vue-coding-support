<template>
  <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', height: '7rem' }">
    <a-row>
      <a-col :span="2">
        <a-button type="link" @click="toIndex">
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="large"/>
        </a-button>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script>
export default {
  name: 'wyHeader',
  methods: {
    toIndex () {
      if (this.$route.name != 'index') {
        this.$router.push({ name: 'index' })
      } else {
        this.$message.info("当前已经是在首页了！")
      }
    }
  }
}
</script>

<style>
  .ant-layout-header {
    border-bottom: 1px solid #eee;
  }
</style>
