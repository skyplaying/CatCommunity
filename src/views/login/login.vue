<template>
  <div>
    <div class="layui-container fly-marginTop">
      <div class="fly-panel fly-panel-user" pad20>
        <div class="layui-tab layui-tab-brief" lay-filter="user">
          <ul class="layui-tab-title">
            <li class="layui-this">登入</li>
            <li>
              <router-link to="/register">注册</router-link>
            </li>
          </ul>
          <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
            <div class="layui-tab-item layui-show">
              <div class="layui-form layui-form-pane">
                <form method="post">
                  <div class="layui-form-item">
                    <label for="L_email" class="layui-form-label">账号</label>
                    <div class="layui-input-inline">
                      <a-input placeholder v-model="name" />
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <label for="L_pass" class="layui-form-label">密码</label>
                    <div class="layui-input-inline">
                      <a-input-password placeholder v-model="pwd" />
                    </div>
                  </div>

                  <div class="layui-form-item">
                    <a-button type="primary" @click="login">立即登录</a-button>
                    <!-- <span style="padding-left:20px;">
                      <a href>忘记密码？</a>
                    </span>-->
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      name: '',
      pwd: '',
      loginInfo: {}
    }
  },
  computed: {},
  mounted() {
    this.init()
    this.$message.config({
      top: `200px`,
      duration: 2,
      maxCount: 3
    })
  },
  methods: {
    init() {
      this.loginInfo = {
        method: 'User_que',
        userId: '1',
        sign: '19B39A0351B99062CCFDDE168E32D279',
        currentPage: 0,
        limit: 0,
        datas: {
          User_Name: '',
          User_Password: ''
        }
      }
    },
    login() {
      if (!this.name) {
        this.$message.warning({ content: '请输入账号' })
        return
      } else if (!this.pwd) {
        this.$message.warning({ content: '请输入密码' })
      }
      console.log(this.loginInfo)
      if (this.name && this.pwd) {
        this.loginInfo.datas.User_Name = this.name //账号
        this.loginInfo.datas.User_Password = this.pwd
        this.$post('Common', this.loginInfo).then(res => {
          console.log(res)
          if (res.code == -1) {
            this.$message.error({ content: res.description })
            sessionStorage.setItem('login', false)
            window.userId = ''
          } else {
            this.$message.success({ content: '登录成功' })
            sessionStorage.setItem('login', true)
            window.userId = res.data[0].User_ID
          }
        })
      }
    }
  }
}
</script>

<style>
.ant-input-affix-wrapper {
  height: 38px;
}
.ant-input {
  height: 38px;
}
</style>
