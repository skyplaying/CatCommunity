<template>
  <div>
    <navTab></navTab>
    <div class="layui-container">
      <div class="layui-row layui-col-space15">
        <div class="layui-col-md12 content detail">
          <div class="fly-panel detail-box" v-if="articleInfo">
            <h1>{{ articleInfo.ArticleTitle }}</h1>
            <div class="fly-detail-info">
              <!-- <span class="layui-badge">审核中</span>
              <span class="layui-badge layui-bg-green fly-detail-column">动态</span>

              <span class="layui-badge" style="background-color: #999;">未结</span>
              <span class="layui-badge" style="background-color: #5FB878;">已结</span>

              <span class="layui-badge layui-bg-black">置顶</span>
              <span class="layui-badge layui-bg-red">精帖</span>-->

              <div class="fly-admin-box" data-id="123">
                <span class="layui-btn layui-btn-xs jie-admin" @click="deletePost">删除</span>
                <!-- <span class="layui-btn layui-btn-xs jie-admin" type="set" field="stick" rank="1"@click="updatePost">置顶</span> -->
                <!-- 
                <span class="layui-btn layui-btn-xs jie-admin" type="set" field="stick" rank="0" style="background-color:#ccc;">取消置顶</span>

                <span class="layui-btn layui-btn-xs jie-admin" type="set" field="status" rank="1">加精</span>
                <span class="layui-btn layui-btn-xs jie-admin" type="set" field="status" rank="0" style="background-color:#ccc;">取消加精</span>-->
              </div>
              <span class="fly-list-nums">
                <a href="#comment">
                  <i class="iconfont" title="回答">&#xe60c;</i>
                  {{ replyList.length }}
                </a>
                <i class="iconfont" title="人气">&#xe60b;</i>
              </span>
            </div>
            <div class="detail-about">
              <a class="fly-avatar" href="../user/home.html">
                <img
                  src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"
                  alt="员工"
                />
              </a>
              <div class="fly-detail-user">
                <a href="../user/home.html" class="fly-link">
                  <cite>{{ articleInfo.CreateUser }}</cite>
                </a>
                <span>{{ articleInfo.CreateTime }}</span>
              </div>
              <div class="detail-hits" id="LAY_jieAdmin" data-id="123">
                <!-- <span class="layui-btn layui-btn-xs jie-admin" type="edit">
                  <a href="add.html">编辑此贴</a>
                </span>-->
              </div>
            </div>
            <!--c -->

            <div class="detail-body photos">{{ articleInfo.ArticleContent }}</div>
            <!--c -->
          </div>

          <div class="fly-panel detail-box" id="flyReply">
            <fieldset class="layui-elem-field layui-field-title" style="text-align: center;">
              <legend>回帖</legend>
            </fieldset>

            <ul class="jieda" id="jieda">
              <li data-id="111" v-if="replyList.length>0">
                <div
                  class="jieda-daan"
                  style="margin-bottom:16px;"
                  v-for="(item,index) in replyList"
                  :key="index"
                >
                  <a name="item-1111111111"></a>
                  <div class="detail-about detail-about-reply">
                    <a class="fly-avatar" href>
                      <img
                        src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"
                        alt=" "
                      />
                    </a>
                    <div class="fly-detail-user">
                      <a href class="fly-link">
                        <cite>员工</cite>
                        <!-- <i class="iconfont icon-renzheng" title="认证信息：XXX"></i>
                        <i class="layui-badge fly-badge-vip">VIP3</i>-->
                      </a>
                      <!-- <span>(楼主)</span> -->
                    </div>

                    <div class="detail-hits">
                      <span>{{ item.CreateTime }}</span>
                    </div>

                    <!-- <i class="iconfont icon-caina" title="最佳答案"></i> -->
                  </div>
                  <div class="detail-body jieda-body photos" style>
                    <p>{{ item.ReplyContent }}</p>
                  </div>
                  <div class="jieda-reply">
                    <span class="jieda-zan zanok" type="zan">
                      <i class="iconfont icon-zan"></i>
                      <!-- <em>66</em> -->
                    </span>
                    <span type="reply">
                      <i class="iconfont icon-svgmoban53" @click="replyAt"></i>
                      回复
                    </span>
                    <div class="jieda-admin">
                      <span type="edit">编辑</span>
                      <span type="del">删除</span>
                      <!-- <span class="jieda-accept" type="accept">采纳</span> -->
                    </div>
                  </div>
                </div>
              </li>

              <!-- 无数据时 -->
              <li class="fly-none" v-if="replyList.length<=0">消灭零回复</li>
            </ul>

            <div class="layui-form layui-form-pane">
              <div class="layui-form-item layui-form-text">
                <a name="comment"></a>
                <div class="layui-input-block">
                  <Editor @change="getEdit"></Editor>
                </div>
              </div>
              <div class="layui-form-item">
                <a-button type="primary" @click="replyBtn">提交回复</a-button>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="layui-col-md4">
          <dl class="fly-panel fly-list-one">
            <dt class="fly-panel-title">本周热议</dt>
            <dd v-for="(item,index) in replyList" :key="index">
              <a href>两支医疗队伍机场相遇，共赴抗疫一线</a>
              <span>
                <i class="iconfont icon-pinglun1"></i> 16
              </span>
            </dd>

            无数据时
            
            <div class="fly-none">没有相关数据</div>
           
          </dl>
          
          <div class="fly-panel">
            <div class="fly-panel-title">
              这里可作为广告区域
            </div>
            <div class="fly-panel-main">
              <a href="http://layim.layui.com/?from=fly" target="_blank" class="fly-zanzhu" time-limit="2017.09.25-2099.01.01" style="background-color: #5FB878;">LayIM 3.0 - layui 旗舰之作</a>
            </div>
          </div>

          <div class="fly-panel" style="padding: 20px 0; text-align: center;">
            <img src="" style="max-width: 100%;" alt="layui">
            <p style="position: relative; color: #666;">微信扫码关注 layui 公众号</p>
          </div>
         
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import navTab from '@/components/layuiModel/navTab'
import Editor from '../../components/Editor/commonWangEditor'
export default {
  name: 'Detail',
  data() {
    return {
      replyList: [],
      replyContent: '',
      articleId: '',
      articleInfo: []
    }
  },
  components: {
    navTab,
    Editor
  },
  mounted() {
    this.articleId = this.$route.query.ArticleId
    console.log(this.$route.query.ArticleId)
    this.init()
  },
  watch: {
    $route() {
      console.log(this.$route)
    }
  },
  methods: {
    init() {
      // 获取文章内容
      this.getPostContent()
      this.getReplyList()
    },
    //回复艾特
    replyAt() {},
    // 删除帖子
    deletePost() {
      const p = {
        method: 'BbsArticle_Del',
        userId: window.userId || 1,
        sign: 'A0251DD654CBB418AF1422CA880A1270',
        currentPage: 0,
        limit: 0,
        datas: {
          ArticleId: this.articleId
        }
      }
      this.$post('Common', p).then(res => {
        console.log(res)
        // res = eval('(' + res + ')')
        // this.postList = res.data
        // console.log(res.data)
        // this.articleInfo = res.data[0]
      })
    },
    // 获取文章内容
    getPostContent() {
      const p = {
        method: 'BbsArticle_que',
        userId: window.userId || 1,
        sign: 'A0251DD654CBB418AF1422CA880A1270',
        currentPage: this.currentPage,
        limit: this.limit,
        datas: {
          BoardId: '1',
          ArticleId: this.articleId
        }
      }
      this.$post('Common', p).then(res => {
        res = eval('(' + res + ')')
        this.postList = res.data
        console.log(res.data)
        this.articleInfo = res.data[0]
      })
    },
    // 回帖
    replyBtn() {
      const p = {
        method: 'BbsArticleReply_Add',
        userId: window.userId || 1,
        sign: 'A0251DD654CBB418AF1422CA880A1270',
        currentPage: 0,
        limit: 0,
        datas: {
          ArticleId: this.articleId,
          ReplyContent: this.replyContent
        }
      }
      this.$post('Common', p).then(res => {
        res = eval('(' + res + ')')
        this.postList = res.data
        console.log(res.data)
      })
    },
    // 获取回复
    getReplyList() {
      const p = {
        method: 'BbsArticleReply_que',
        userId: window.userId || 1,
        sign: 'A0251DD654CBB418AF1422CA880A1270',
        currentPage: 0,
        limit: 0,
        datas: {
          ArticleId: this.articleId
        }
      }
      this.$post('Common', p).then(res => {
        res = eval('(' + res + ')')
        this.replyList = res.data
        console.log(res)
      })
    },
    getEdit(e) {
      console.log(e, '内容')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
