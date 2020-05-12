<template>
  <div>
    <div class="layui-container fly-marginTop">
      <div class="fly-panel fly-panel-user" pad20>
        <div class="layui-tab layui-tab-brief" lay-filter="user">
          <ul class="layui-tab-title">
            <li>
              <router-link to="/login">登入</router-link>
            </li>
            <li class="layui-this">
              <router-link to="/register">注册</router-link>
            </li>
          </ul>
          <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
            <div class="layui-tab-item layui-show">
              <div class="layui-form layui-form-pane">
                <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label">昵称</label>
                  <div class="layui-input-inline">
                    <a-input placeholder v-model="name" />
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label">账号</label>
                  <div class="layui-input-inline">
                    <a-input placeholder v-model="count" />
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <div class="layui-input-inline">
                    <a-input-password placeholder v-model="pwd" />
                  </div>
                  <div class="layui-form-mid layui-word-aux">6到16个字符</div>
                </div>
                <div class="layui-form-item">
                  <label for="L_repass" class="layui-form-label">确认密码</label>
                  <div class="layui-input-inline">
                    <a-input-password placeholder v-model="rePwd" />
                  </div>
                </div>

                <div class="layui-form-item">
                  <a-button type="primary" @click="register">立即注册</a-button>
                </div>
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
  name: 'Register',
  data() {
    return {
      name: '',
      count: '',
      pwd: '',
      rePwd: '',
      regInfo: {}
    }
  },
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
      this.regInfo = {
        method: 'User_Add',
        userId: '1',
        sign: '19B39A0351B99062CCFDDE168E32D279',
        currentPage: 0,
        limit: 0,
        datas: {
          User_Name: '',
          User_Reallyname: '',
          User_Password: ''
        }
      }
    },
    register() {
      const that = this
      if (!this.name) {
        this.$message.warning({ content: '请输入昵称' })
        return
      } else if (!this.pwd || this.pwd.length < 6 || this.pwd.length > 16) {
        this.$message.warning({ content: '请输入6-16位密码' })

        return
      } else if (!this.rePwd == this.pwd) {
        this.$message.warning({ content: '请确认您的密码' })
        return
      } else {
        that.regInfo.datas.User_Name = this.count.trim() //账号
        that.regInfo.datas.User_Reallyname = this.name.trim() //昵称
        that.regInfo.datas.User_Password = this.pwd.trim() //密码
        console.log(this.regInfo)
      }

      this.$post('Common', this.regInfo).then(res => {
        if (res.code == -1) {
          this.$message.error(res.description)
        } else {
          this.$message.success('注册成功,即将跳转登录页')
          setTimeout(() => {
            this.$router.push({ name: 'login', param: {} })
          }, 2000)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ant-input-affix-wrapper {
  height: 38px;
}
.ant-input {
  height: 38px;
}
</style>
>
