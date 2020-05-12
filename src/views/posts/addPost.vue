<template>
  <div>
    <div class="layui-container fly-marginTop">
      <div class="fly-panel" pad20 style="padding-top: 5px;">
        <!--<div class="fly-none">没有权限</div>-->
        <div class="layui-form layui-form-pane">
          <div class="layui-tab layui-tab-brief" lay-filter="user">
            <ul class="layui-tab-title">
              <li class="layui-this">
                发表新帖
                <!-- 编辑帖子 -->
              </li>
            </ul>
            <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
              <div class="layui-tab-item layui-show">
                <form action method="post">
                  <div class="layui-row layui-col-space15 layui-form-item">
                    <div class="layui-col-md3">
                      <label class="layui-form-label">所在专栏</label>
                      <div class="layui-input-block">
                        <a-select style="width: 120px;" @change="handleChange">
                          <a-select-option
                            v-for="(item,index) in boardList"
                            :key="index"
                            :value="item.BoardId"
                          >{{ item.BoardName }}</a-select-option>
                        </a-select>
                      </div>
                    </div>
                    <div class="layui-col-md9">
                      <label for="L_title" class="layui-form-label">标题</label>
                      <div class="layui-input-block">
                        <a-input placeholder style="height: 38px;" v-model="title" />
                      </div>
                    </div>
                  </div>

                  <div class="layui-form-item layui-form-text">
                    <div class="layui-input-block">
                      <edit @change="getEditContent"></edit>
                    </div>
                  </div>
                  <a-button type="primary" @click="addPost">立即发布</a-button>
                  <!-- <div class="layui-form-item"><button class="layui-btn" lay-filter="*" lay-submit>立即发布</button></div> -->
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fly-footer"></div>
  </div>
</template>

<script>
import edit from '../../components/Editor/commonWangEditor'
export default {
  name: 'AddPost',
  data() {
    return {
      title: '',
      band: '', //板块
      boardList: [],
      boardId: 0,
      ArticleContent: ''
    }
  },
  mounted() {
    this.getboardList()
  },
  components: {
    edit
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`)
      this.boardId = value
    },
    addPost() {
      if (!this.title) {
        this.$message.warning({ content: '帖子标题不能为空' })
        return
      } else if (!this.ArticleContent) {
        this.$message.warning({ content: '帖子内容不能为空' })
      }
      const p = {
        method: 'BbsArticle_Add',
        userId: window.userId,
        sign: 'A0251DD654CBB418AF1422CA880A1270',
        currentPage: 0,
        limit: 0,
        datas: {
          BoardId: 0,
          ArticleTitle: '',
          ArticleContent: ''
        }
      }
      p.datas.BoardId = this.boardId
      p.datas.ArticleTitle = this.title
      p.datas.ArticleContent = this.ArticleContent
      this.$post('Common', p).then(res => {
        console.log(res)
        if (res.code == 0) {
          this.$message.success('发表成功')
        }
      })
    },
    getboardList() {
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
    },
    getEditContent(e) {
      console.log('edit', e)
      this.ArticleContent = e
    }
  }
}
</script>

<style lang="less" scoped>
.ant-select-selection-selected-value {
  height: 100%;
}
.ant-select-selection {
  height: 38px;
}
</style>
