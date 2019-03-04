<template>
  <div class="container">
    <!--<div class="iconfont icon" :class="iconC"></div>-->
    <div class="img-wrap">
      <img :src="imgSrc" class="img">
    </div>
    <el-tooltip class="name" effect="dark" placement="bottom-end">
      <div slot="content">{{file.name}}<br/>{{space}}<br/>{{lastModified}}</div>
      <span>{{ file.name }}</span>
    </el-tooltip>
  </div>
</template>
<script>
import musicImg from './images/music.png'
import txtImg from './images/txt.png'
import videoImg from './images/video.png'
import wordImg from './images/word.png'
import excelImg from './images/excel.png'
import pptImg from './images/ppt.png'
import pdfImg from './images/pdf.png'
import htmlImg from './images/html.png'
import exeImg from './images/exe.png'
import zipImg from './images/zip.png'
import picImg from './images/pic.png'
import jsImg from './images/js.png'
import unknownImg from './images/unknown.png'
export default {
  props: {
    file: {
      type: Object,
      default () {
        return {
          name: ''
        }
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    lastModified () {
      let d = new Date(this.file.lastModified)
      let year = d.getFullYear()
      let month = d.getMonth() + 1
      let date = d.getDate()
      let hour = d.getHours()
      let minute = d.getMinutes()
      let second = d.getSeconds()

      let result = `${year}-${this._addZero(month)}-${this._addZero(date)} ${this._addZero(hour)}:${this._addZero(minute)}:${this._addZero(second)}`
      return result
    },
    space () {
      return `${Math.round(this.file.space / (1024 * 1024))}M`
    },
    imgSrc () {
      switch (this.file.type) {
        case 0:
          return musicImg
        case 1:
          if (this.file.name.endsWith('.txt')) {
            return txtImg
          } else if (this.file.name.endsWith('.doc') || this.file.name.endsWith('.docx')) {
            return wordImg
          } else if (this.file.name.endsWith('.pdf')) {
            return pdfImg
          } else if (this.file.name.endsWith('.xls') || this.file.name.endsWith('.xlsx')) {
            return excelImg
          } else if (this.file.name.endsWith('.ppt') || this.file.name.endsWith('.pptx')) {
            return pptImg
          } else if (this.file.name.endsWith('.html')) {
            return htmlImg
          } else if (this.file.name.endsWith('.js')) {
            return jsImg
          } else if (this.file.name.endsWith('.exe')) {
            return exeImg
          } else if (this.file.name.endsWith('.zip') || this.file.name.endsWith('.rar')) {
            return zipImg
          }
          return unknownImg
        case 2:
          return videoImg
        case 3:
          return picImg
        default:
          return unknownImg
      }
    }
  },
  methods: {
    _addZero (v) {
      return v < 10 ? '0' + v : v
    }
  }
}
</script>
<style lang="scss" scoped>
  $folder-width:120px;
  $folder-height:127px;
  .container{
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
    .img-wrap{
      width: 60px;
      height: 60px;
      flex: 0 0 auto;
      margin-bottom: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      .img{
        width: 40px;
        height: 40px;
      }
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
