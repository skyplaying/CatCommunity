<template>
  <div>
    <navTab></navTab>

    <div class="layui-container">
      <div class="layui-row layui-col-space15">
        <div class="layui-col-md8">
          <div class="fly-panel" style="margin-bottom: 0;    min-height: 417px;">
            <!-- <div class="fly-panel-title fly-filter">
              <a href class="layui-this">综合</a>
              <span class="fly-mid"></span>
              <a href>未结</a>
              <span class="fly-mid"></span>
              <a href>已结</a>
              <span class="fly-mid"></span>
              <a href>精华</a>
              <span class="fly-filter-right layui-hide-xs">
                <a href class="layui-this">按最新</a>
                <span class="fly-mid"></span>
                <a href>按热议</a>
              </span>
            </div>-->

            <ul class="fly-list" v-if="postList.length>0">
              <li v-for="(item, index) in postList" :key="index">
                <a class="fly-avatar">
                  <img
                    src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"
                    alt
                  />
                </a>
                <h2>
                  <a class="layui-badge">{{ item.BoardName }}</a>
                  <router-link
                    :to="{name:'Detail',query:{ArticleId:item.ArticleId}}"
                  >{{ item.ArticleTitle }}</router-link>
                </h2>
                <div class="fly-list-info">
                  <!-- <a href="user/home" link> -->
                  <a link>
                    <cite>{{ item.CreateBy }}</cite>
                    <!--
                <i class="iconfont icon-renzheng" title="认证信息：XXX"></i>
                <i class="layui-badge fly-badge-vip">VIP3</i>
                    -->
                  </a>
                  <span>{{ item.CreateTime }}</span>

                  <!--<span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>-->
                  <span class="fly-list-nums">
                    <i class="iconfont icon-pinglun1" title="回答"></i>
                    66
                  </span>
                </div>
                <div class="fly-list-badge">
                  <span class="layui-badge layui-bg-black">置顶</span>
                  <!--<span class="layui-badge layui-bg-red">精帖</span>-->
                </div>
              </li>
            </ul>

            <div class="fly-none" v-if="postList.length<=0">没有相关数据</div>

            <div style="text-align: center;margin-top:100px;" v-if="hotPostList.length>0">
              <a-pagination
                showSizeChanger
                @showSizeChange="onShowSizeChange"
                :total="postList.length"
                :pageSize.sync="pageSize"
                v-model="currentPage"
              />
            </div>
          </div>
        </div>
        <div class="layui-col-md4">
          <dl class="fly-panel fly-list-one">
            <dt class="fly-panel-title">本周热议</dt>
            <dd v-for="(item, index) in hotPostList" :key="index">
              <!-- <a href>软件王：业软13年，我会在技术这条路上坚定走下去</a>
              <span>
                <i class="iconfont icon-pinglun1"></i>
                16
              </span>-->
            </dd>

            <!-- 无数据时 -->
            <div class="fly-none" v-if="hotPostList.length<=0">没有相关数据</div>
          </dl>

          <div class="fly-panel">
            <div class="fly-panel-title">这里可作为广告区域</div>
            <div class="fly-panel-main">
              <a href target="_blank" class="fly-zanzhu" style="background-color: #393D49;">虚席以待</a>
            </div>
          </div>

          <div class="fly-panel fly-link">
            <h3 class="fly-panel-title">友情链接</h3>
            <dl class="fly-panel-main"></dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navTab from '../../components/layuiModel/navTab'
export default {
  name: 'Index',
  data() {
    return {
      hotPostList: [],
      pageSize: 20,
      current: 4,
      postList: [],
      boardList: [],
      currentPage: 0, //当前页面
      limit: 0 //每条页数
    }
  },
  watch: {
    pageSize(val) {
      console.log('pageSize', val)
      this.getPostList()
    },
    currentPage(val) {
      console.log('current', val)
      this.getPostList()
    }
  },
  components: {
    navTab
    // WangEditor,
  },
  created() {
    this.getPostList()
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {},
    getPostList() {
      const p = {
        method: 'BbsArticle_que',
        userId: '1',
        sign: 'A0251DD654CBB418AF1422CA880A1270',
        currentPage: this.currentPage,
        limit: this.limit,
        datas: {
          BoardId: '1'
        }
      }
      this.$post('Common', p).then(res => {
        res = eval('(' + res + ')')
        this.postList = res.data
        console.log(res.data)
      })
    },
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize)
    }
  }
}
</script>

<style lang="less" >
</style>
