<template>
  <section id="login-page">
    <div class="input-container">
      <el-input placeholder="请输入需要扫盘的根目录,如C:\\" v-model="path">
        <el-button slot="append" icon="el-icon-search" class="search-btn" @click="_click"></el-button>
      </el-input>
    </div>
  </section>
</template>
<script>
import http from '@/http'
export default {
  data () {
    return {
      path: ''
    }
  },
  methods: {
    async _click () {
      const loading = this.$loading({
        lock: true,
        text: '正在扫盘生成B+Tree索引，请耐心等待',
        spinner: 'el-icon-loading',
        background: '#ffffff'
      })
      const result = await http.init(this.path)
      console.log('result', result)
      loading.close()
      this.$router.push({name: 'Index', params: {bfs: result.data, rootPath: this.path}})
    }
  }
}
</script>
<style lang="scss" scoped>
  #login-page{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    .input-container{
      width: 500px;
      margin-top: 200px;
      /deep/ .el-input-group__append{
        background: #366DB6;
        border-color: #366DB6;
      }
    }
  }
</style>
