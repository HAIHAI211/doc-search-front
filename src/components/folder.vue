<template>
  <div class="folder">
    <div class="iconfont icon-wenjianjia icon"></div>
    <el-tooltip class="name" effect="dark" :content="name" placement="bottom-end">
      <span>{{ name }}</span>
    </el-tooltip>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  $folder-width:120px;
  $folder-height:127px;
  .folder{
    width:$folder-width;
    height:$folder-height;
    box-sizing: border-box;
    padding-top: 15px;
    margin-left:6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    &:hover{
      background:#f1f5fa;
    }
    .icon{
      color:lightsalmon;
      font-size: 60px;
      margin-bottom: 10px;
    }
    .name{
      box-sizing: border-box;
      width: $folder-width;
      text-align: center;
      padding: 0 2px;
      font-size: 12px;
      color: $common-font-color;
      @include no-wrap();
      &:hover{
        color:$active-font-color;
      }
    }
  }
</style>
