<template>
  <el-container id="index-page">
    <el-header id="header">
      <i class="iconfont icon-tree"></i>
      <span>B+Tree</span>
    </el-header>
    <el-container>
      <el-aside id="aside" width="195px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="0">
            <i class="el-icon-time"></i>
            <span slot="title">最近使用</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-tickets"></i>
            <span slot="title">全部文件</span>
          </el-menu-item>
          <el-menu-item index="2">
            <!--<i class="iconfont icon-tupian"></i>-->
            <span slot="title" class="sub">图片</span>
          </el-menu-item>
          <el-menu-item index="3">
            <!--<i class="iconfont icon-wendang"></i>-->
            <span slot="title" class="sub">文档</span>
          </el-menu-item>
          <el-menu-item index="4">
            <!--<i class="iconfont icon-shipin"></i>-->
            <span slot="title" class="sub">视频</span>
          </el-menu-item>
          <el-menu-item index="5">
            <!--<i class="iconfont icon-shipin"></i>-->
            <span slot="title" class="sub">音乐</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main id="main">
        <div class="search-container">
          <el-input
            size="medium"
            placeholder="搜索您的文件"
            suffix-icon="el-icon-search"
            v-model="search"/>
          <el-dropdown class="sort">
            <span class="el-dropdown-link">
              排序<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>文件名</el-dropdown-item>
              <el-dropdown-item>大小</el-dropdown-item>
              <el-dropdown-item>修改时间</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="folder-container">
          <folder name="新建文件夹新" v-for="item in 100" :key="item"/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Folder from '@/components/folder'
// import api from '@/http'
export default {
  components: {
    Folder
  },
  data () {
    return {
      search: ''
    }
  },
  async mounted () {
    // const result = await api.test()
  }
}
</script>
<style lang="scss" scoped>
  #index-page{
    $bg-color:#DAE2EA;
    height:100%;
    background:$bg-color;
    #header{
      display: flex;
      align-items: center;
      font-size: 23px;
      font-weight: 400;
      letter-spacing: .5px;
      color: #000;
      .icon-tree{
        font-size: 30px;
        font-weight: 300;
        color: #366DB6;
        margin-right: 5px;
      }
    }
    #aside{
      padding-top: 10px;
      /deep/ .el-menu{
        border-right: none;
        .el-menu-item{
          text-align: left;
          font-size: 15px;
          color: $common-font-color;
          background: $bg-color;
          .sub{
            margin-left: 34px;
          }
          &.is-active{
            color: $active-font-color;
            font-weight: bolder;
            background: rgba(153,169,191,0.5);
          }
        }
      }

    }
    #main{
      padding-top: 0;
      background: #ffffff;
      margin-right: 20px;
      border: 1px solid $common-border-color;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      display: flex;
      flex-direction: column;
      padding-bottom: 0;
      .search-container{
        position: relative;
        height: 88px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid $common-border-color;
        /deep/ .el-input{
          width: 200px;
          .el-input__inner{
            background: #F1F2F4;
            border-radius: 10px;
            &:focus {
              /*outline: none;*/
              border-color: #c0c4cc;
            }
          }
        }
        .sort{
          position: absolute;
          right: 20px;
          cursor: pointer;
        }
      }
      .folder-container{
        overflow-y: scroll;
        flex: 1 0 0;
        display: flex;
        flex-wrap: wrap;
        /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
        &::-webkit-scrollbar
        {
          width: 7px;
          background-color: transparent;
        }

        /*定义滚动条轨道 内阴影+圆角*/
        &::-webkit-scrollbar-track
        {
          /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
          /*border-radius: 10px;*/
          background-color: transparent;
        }

        /*定义滑块 内阴影+圆角*/
        &::-webkit-scrollbar-thumb
        {
          border-radius: 10px;
          /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);*/
          background-color: #ccc;
        }
      }
    }
  }
</style>
