<template>
  <div class="nav">
    <div class="layui-hide-xs">
      <div class="fly-panel fly-column">
        <div class="layui-container">
          <ul class="layui-clear">
            <li class="">
              <router-link to="/">首页</router-link>
            </li>
            <!-- <li class="layui-this">
              <a href>提问</a>
            </li>
            <li>
              <a href>分享</a>
            </li>
            <li>
              <a href>讨论</a>
            </li>
            <li>
              <a href>建议</a>
            </li>
            <li>
              <a href>公告</a>
            </li>
            <li>
              <a href>动态</a>
            </li> -->
            <li v-for="(item,index) in boardList" :key="index">
              <router-link to=""> {{ item.BoardName }}</router-link>
              
            </li>
            <li
              class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
              <span class="fly-mid"></span>
            </li>

            <!-- 用户登入后显示 -->
            <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
              <router-link to="/posts/myPosts">我发表的贴</router-link>
            </li>
            <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
              <router-link to="/posts/myPosts">我收藏的贴</router-link>
            </li>
            </l></ul>

          <div class="fly-column-right layui-hide-xs">
            <span class="fly-search">
              <i class="layui-icon"></i>
            </span>
            <router-link to="/posts/addPost">
              <a-button type="primary">发表新帖</a-button>
            </router-link>
          </div>
          <!-- <div class="layui-hide-sm layui-show-xs-block" style="margin-top: -10px; padding-bottom: 10px; text-align: center;">
            <a href="add.html" class="layui-btn">发表新帖</a>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardList: []
    }
  },
  mounted() {
    this.getBoradList()
  },
  methods: {
    getBoradList() {
      const p = {
        method: 'BbsBoard_que',
        userId: '1',
        sign: '19B39A0351B99062CCFDDE168E32D279',
        currentPage: 0,
        limit: 0,
        datas: {}
      }
      const data = {}
      this.$post('Common', p)
        .then(res => {
          console.log(typeof res)
          res = eval('(' + res + ')')
          this.boardList = res.data
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      console.log(this.boardList)
    }
  }
}
</script>

<style lang="less" scoped>
.nav {
  margin-top: 80px;
}
</style>
