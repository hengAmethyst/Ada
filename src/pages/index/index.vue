<template>
  <div class="home">
    <div class="section-2">
      <div class="section-2-1">
        了解Ada
      </div>
      <div class="section-2-2" @click="toList">
        ada餐厅
      </div>
      <div class="section-2-3">
        附近ada
      </div>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },

  components: {
  },

  methods: {
    toList(){
      wx.navigateTo({
        url: '/pages/restaurant/list/main'
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/common.scss";
  .home{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .section-2{
      display: flex;
      flex-direction: column;
      width: 100%;
      .section-2-1{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 300rpx;
        background: yellow;
      }
      .section-2-2{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 300rpx;
        background: blue;
      }
      .section-2-3{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 300rpx;
        background: pink;
      }
    }
  }
</style>
