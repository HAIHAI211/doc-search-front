<template>
  <section id="login-page">
    <div class="input-container">
      <el-input placeholder="请输入需要扫盘的目录路径,如C:\\" v-model="input4">
        <el-button slot="append" icon="el-icon-search" class="search-btn" @click="_click"></el-button>
      </el-input>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    _click () {
      const loading = this.$loading({
        lock: true,
        text: '正在生成B+Tree索引，请耐心等待',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
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
