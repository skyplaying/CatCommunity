<template>
  <div id="app">
    <layHeader></layHeader>
    <router-view class="bc"></router-view>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { AppDeviceEnquire } from '@/utils/mixin'
import layHeader from '@/components/layuiModel/header'

export default {
  mixins: [AppDeviceEnquire],
  data() {
    return {
      locale: zhCN
    }
  },
  mounted() {
    this.$message.config({
      top: `200px`,
      duration: 2,
      maxCount: 3
    })
  },
  components: {
    layHeader
  }
}
</script>
<style lang="less">
.bc {
  margin-top: 80px;
}
#app {
  height: 100%;
  width: 100%;
  background: #f2f2f2;
}
</style>
