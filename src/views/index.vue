<template>
  <div class="body">
    <div id="components-layout-demo-basic">
      <a-layout>
        <wyHeader/>
        <a-layout-content>
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
        <wyFooter/>
      </a-layout>
    </div>
  </div>
</template>

<script>
import wyHeader from '@components/header'
import wyFooter from '@components/footer'

export default {
  name: 'index',
  components: {
    wyHeader,
    wyFooter
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

</style>
