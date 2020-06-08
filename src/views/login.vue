<template>
  <div class="body">
    <div id="components-layout-demo-basic">
      <a-layout>
        <com-head/>
        <a-layout-content>
          <h2>登录平台</h2>
          <p>基于ant-desigon-vue的极致体验</p>
          <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit">
            <a-form-item
              label="输入用户名："
              :label-col="{span: 2,offset:7}"
              :wrapper-col="{span: 6}"
            >
              <a-input
                v-decorator="['userName',{ rules: [{ required: true, message: '请输入用户名!' }] },]"
                placeholder="用户名">
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item
              label="输入密码："
              :label-col="{span: 2,offset:7}"
              :wrapper-col="{span: 6}"
            >
              <a-input
                v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }] },]"
                type="password"
                placeholder="密码">
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item
              :wrapper-col="{span: 6,offset:9}"
            >
              <a-button block type="primary" html-type="submit" class="loginIn">
                Log in
              </a-button>
            </a-form-item>
          </a-form>
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </div>
  </div>
</template>

<style>
  #components-layout-demo-basic .ant-layout-footer {
    line-height: 1.5;
    border-bottom: 1px solid #eee;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  #components-layout-demo-basic .ant-layout-content {
    /*background: rgba(16, 142, 233, 1);*/
    color: #999;
    padding-top: 5rem;
    min-height: 100rem;
  }

  #components-form-demo-normal-login {
    text-align: center;
  }

  #components-form-demo-normal-login .loginIn {
    background-color: #f1af87;
    border-color: #f1af87;
  }

</style>

<script>
import comHead from '@components/head'
import request from '@/http/request'

export default {
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  name: 'login',
  components: {
    comHead
  },
  data () {
    return {}
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$router.push({ name: 'index', params: values })
          /* console.log('Received values of form: ', values)
          request.post('/blog/getTags', values).then(res => {
            console.log('res:', JSON.stringify(res))
            this.$message.success('请求成功')
          }).catch(err => {
            console.log('res:', err)
            this.$message.error('请求失败')
          }) */
        } else {
          this.$message.error('数据有误！请检查必填项')
        }
      })
    }
  }
}
</script>

<style>

</style>
