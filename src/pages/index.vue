<template>
  <el-container id="index-page">
    <el-header id="header">header</el-header>
    <el-container>
      <el-aside id="aside" width="195px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="1">
            <i class="el-icon-tickets"></i>
            <span slot="title">全部文件</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-picture-outline"></i>
            <span slot="title">图片</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">文档</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-caret-right                                                             "></i>
            <span slot="title">视频</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main id="main">main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  #index-page{
    $bg-color:#DAE2EA;
    height:100%;
    background:$bg-color;
    #header{
    }
    #aside{
      padding-top: 10px;
      .el-menu{
        border-right: none;
        .el-menu-item{
          text-align: left;
          font-size: 15px;
          color: #34495E;
          background: $bg-color;
          &.is-active{
            color: #366DB6;
            font-weight: bolder;
            background: rgba(153,169,191,0.5);
          }
        }
      }

    }
    #main{
      background: #ffffff;
      margin-right: 20px;
      border: 1px solid #CED1D3;
      border-radius: 5px;
    }
  }
</style>
