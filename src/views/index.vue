<template>
  <div class="body">
    <div id="components-layout-demo-basic">
      <a-layout>
        <com-head/>
        <a-layout-content>
          <a-carousel autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </a-carousel>
          <a-card hoverable style="width: 240px">
            <img
              slot="cover"
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
            <a-card-meta title="Europe Street beat">
              <template slot="description">
                www.instagram.com
              </template>
            </a-card-meta>
          </a-card>
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </div>
  </div>
</template>

<script>
import comHead from '@components/head'

export default {
  name: 'index',
  components: {
    comHead
  },
  data () {
    return {
    }
  },
  methods: {

  },
  mounted () {
    console.log('username:', this.$route.params.userName)
  }
}
</script>

<style>
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel >>> .slick-slide h3 {
    color: #fff;
  }
</style>
