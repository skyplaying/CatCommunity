<template>
  <div class="fly-header layui-bg-black">
    <div class="layui-container">
      <router-link to="/" class="fly-logo">
        <img src="../../assets/logo.png" alt="layui" />
      </router-link>
      <!-- 			<ul class="layui-nav fly-nav layui-hide-xs">
				<li class="layui-nav-item layui-this">
					<a href="/">
						<i class="iconfont icon-jiaoliu"></i>
						交流
					</a>
				</li>
				<li class="layui-nav-item">
					<a href="case/case.html">
						<i class="iconfont icon-iconmingxinganli"></i>
						案例
					</a>
				</li>
				<li class="layui-nav-item">
					<a href="http://www.layui.com/" target="_blank">
						<i class="iconfont icon-ui"></i>
						框架
					</a>
				</li>
      </ul>-->

      <ul class="layui-nav fly-nav-user">
        <!-- 未登入的状态 -->
        <!-- 登入跳转用户中心 未登入跳转登录界面 -->
        <div v-if="!loginStatus">
          <li class="layui-nav-item">
            <router-link class="iconfont icon-touxiang layui-hide-xs" to></router-link>
          </li>
          <li class="layui-nav-item">
            <router-link to="/login">登入</router-link>
          </li>
          <li class="layui-nav-item">
            <router-link to="/register">注册</router-link>
          </li>
        </div>
        <!-- 	<li class="layui-nav-item layui-hide-xs"><a-icon type="qq" title="QQ登入" height="2em" width="2em" /></li>
        <li class="layui-nav-item layui-hide-xs"><a-icon type="weibo" title="微博登入" /></li>-->

        <!-- 登入后的状态 -->
        <li class="layui-nav-item" v-if="loginStatus">
          <a-dropdown>
            <a class="fly-nav-avatar" href="javascript:;">
              <cite class="layui-hide-xs">员工</cite>
              <i class="iconfont icon-renzheng layui-hide-xs" title></i>
              <!-- <i class="layui-badge fly-badge-vip layui-hide-xs">VIP3</i> -->
              <img
                src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"
              />
            </a>
            <a-menu slot="overlay">
              <a-menu-item key="0">
                <router-link to="/user/set">
                  <i class="layui-icon">&#xe620;</i>基本设置
                </router-link>
              </a-menu-item>
              <a-menu-item key="1">
                <router-link to="/user/message">
                  <i class="iconfont icon-tongzhi" style></i>我的消息
                </router-link>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="3">
                <router-link to="/user/home">
                  <i class="layui-icon" style>&#xe68e;</i>
                  我的主页
                </router-link>
              </a-menu-item>
              <a-menu-item key="4">
                <router-link to>
                  <i class="layui-icon" style=" " @click="exit">&#xe68e;</i>退出
                </router-link>
              </a-menu-item>
            </a-menu>
          </a-dropdown>

          <!-- <a class="fly-nav-avatar" href="javascript:;">
            <cite class="layui-hide-xs">员工</cite>
            <i class="iconfont icon-renzheng layui-hide-xs" title></i>
            <img
              src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"
            />
          </a>
          <dl class="layui-nav-child">
            <dd>
              <a href="user/set.html">
                <i class="layui-icon">&#xe620;</i>基本设置
              </a>
            </dd>
            <dd>
              <a href="user/message.html">
                <i class="iconfont icon-tongzhi" style="top: 4px;"></i>我的消息
              </a>
            </dd>
            <dd>
              <a href="user/home.html">
                <i class="layui-icon" style="margin-left: 2px; font-size: 22px;">&#xe68e;</i>我的主页
              </a>
            </dd>
            <hr style="margin: 5px 0;" />
            <dd>
              <a href="/user/logout/" style="text-align: center;">退出</a>
            </dd>
          </dl>-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginStatus: false
    }
  },
  watch: {
    // loginStatus() {
    //   return sessionStorage.getItem('login')
    // }
  },
  created() {},
  mounted() {
    this.loginStatus = sessionStorage.getItem('login')
  },
  methods: {
    exit() {
      sessionStorage.setItem('login', false)
      this.loginStatus = false
    }
  }
}
</script>

<style lang="less" scoped>
.anticon svg {
  height: 22px;
  width: 22px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
>
