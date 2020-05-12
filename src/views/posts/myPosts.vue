<!-- 我发布的帖子 -->
<template>
  <div class="layui-container fly-marginTop fly-user-main">
    <ul class="layui-nav layui-nav-tree layui-inline" lay-filter="user">
      <li class="layui-nav-item">
        <router-link to="/user/home">
          <i class="layui-icon">&#xe609;</i>
          我的主页
        </router-link>
      </li>
      <li class="layui-nav-item layui-this">
        <router-link to>
          <i class="layui-icon">&#xe612;</i>
          用户中心
        </router-link>
      </li>
      <li class="layui-nav-item">
        <router-link to="/user/set">
          <i class="layui-icon">&#xe620;</i>
          基本设置
        </router-link>
      </li>
      <li class="layui-nav-item">
        <router-link to="/user/message">
          <i class="layui-icon">&#xe611;</i>
          我的消息
        </router-link>
      </li>
    </ul>

    <div class="site-tree-mobile layui-hide">
      <i class="layui-icon">&#xe602;</i>
    </div>
    <div class="site-mobile-shade"></div>

    <div class="site-tree-mobile layui-hide">
      <i class="layui-icon">&#xe602;</i>
    </div>
    <div class="site-mobile-shade"></div>

    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <a-tabs defaultActiveKey="1">
          <a-tab-pane :tab="'我发的帖（'+postNum+'）'" key="1">
            
          </a-tab-pane>
          <a-tab-pane :tab="'我收藏的帖（'+collectNum+'）'" key="2"></a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPosts',
  data() {
    return {
      postNum: 0,
      collectNum: 0
    }
  }
}
</script>

<style></style>
