<template>
  <div class="empty-container">
    <img :src="imgSrc" class="empty-img">
    <span class="empty-txt">暂无数据～</span>
  </div>
</template>
<script>
import emptyImg from './images/empty.png'
export default {
  data () {
    return {
      imgSrc: emptyImg
    }
  }
}
</script>
<style lang="scss" scoped>
  .empty-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .empty-img{
      position: relative;
      top: -60px;
      width:0.6 * 306px;
      height: 0.6 * 200px;
      margin-bottom: 15px;
    }
    .empty-txt{
      position: relative;
      top: -60px;
      color: #919a98;
      font-size: 21px;
      font-weight: 300;
      letter-spacing: 1px;
    }
  }
</style>
