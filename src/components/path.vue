<template>
  <div class="path-container">
    <span class="previous" @click="_previous" v-if="this.rootPath !== this.nowPath">返回上一级</span>
    <span class="line" v-if="this.rootPath !== this.nowPath">|</span>
    <template v-for="(path,index) in pathArr">
      <span class="path" :key="index+'path'" @click="_checkPath(index)">{{path}}</span>
      <span class="arrow" v-if="index<pathArr.length-1" :key="index+'arrow'">></span>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    rootPath: {
      type: String,
      default: ''
    },
    nowPath: {
      type: String,
      default: ''
    }
  },
  computed: {
    // C:\AppData\Roaming
    pathArr () {
      if (this.rootPath === this.nowPath) {
        return [this.rootPath]
      }
      let startIndex = this.nowPath.indexOf(this.rootPath)
      if (startIndex !== -1) {
        let leftPath = this.nowPath.slice(startIndex + this.rootPath.length)
        if (leftPath.startsWith('\\')) {
          leftPath = leftPath.slice(1)
        }
        if (leftPath.endsWith('\\')) {
          leftPath = leftPath.slice(0, -1)
        }
        let arr = leftPath.split('\\')
        arr = [this.rootPath, ...arr]
        console.log('arr', arr)
        return arr
      }
      return []
    }
  },
  mounted () {
  },
  methods: {
    _previous () {
      let path = this.pathArr.slice(0, -1).join('\\')
      this.$emit('update:nowPath', path)
    },
    _checkPath (index) {
      if (index === this.pathArr.length - 1) { return }
      let path = this.pathArr.slice(0, index + 1).join('\\')
      this.$emit('update:nowPath', path)
    }
  }
}
</script>
<style lang="scss" scoped>
  .path-container{
    display: flex;
    align-items: center;
    span{
      font-size: 12px;
      line-height: 12px;
    }
    .previous,.path:not(:last-of-type){
      cursor: pointer;
      color: $active-font-color;
      &:hover{
        text-decoration: underline;
      }
    }
    .line{
      margin: 0 1px;
    }
    .arrow{
      margin: 0 1.5px;
    }
  }
</style>
