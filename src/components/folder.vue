<template>
  <div class="folder noselect" @click="_intoFolder">
    <div class="iconfont icon-wenjianjia icon"></div>
    <el-tooltip class="name" effect="dark" :content="directory.name" placement="bottom-end">
      <span>{{ directory.name }}</span>
    </el-tooltip>
  </div>
</template>
<script>
export default {
  props: {
    directory: {
      type: Object,
      default () {
        return {
          name: ''
        }
      }
    }
  },
  methods: {
    async _intoFolder () {
      this.$emit('inFolder', this.directory)
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
      flex: 0 0 auto;
      color:lightsalmon;
      font-size: 60px;
      margin-bottom: 8px;
    }
    .name{
      flex: 0 0 auto;
      box-sizing: border-box;
      width: $folder-width;
      text-align: center;
      padding: 3px 2px;
      line-height: 12px;
      font-size: 12px;
      color: $common-font-color;
      @include no-wrap();
      &:hover{
        color:$active-font-color;
      }
    }
  }
</style>
