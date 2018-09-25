<template>
    <div class="box">
        <div class="section-1">
            <span>AMETHYST</span>
            <div class="img"></div>
        </div>
        <div class="section-2" v-for="(item,index) in navList" :key="index">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            navList:['客服电话','关于Ada','退出登录']
        }
    }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/common.scss";
  .box{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background: #fff;
      .section-1{
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 670rpx;
          height: 251rpx;
          border-bottom: 1rpx solid #E9E9E9;
          span{
              font-size: 60rpx;
              color: #010101;
          }
          .img{
              width: 130rpx;
              height: 130rpx;
              background: pink;
              border-radius: 100%;
          }
      }
      .section-2{
            margin: 0 auto;
            display: flex;
            align-items: center;
            width: 670rpx;
            height: 133rpx;
            border-bottom: 1rpx solid #E9E9E9;
            span{
                margin-left: 20rpx;
                font-size: 38rpx;
                color: #666;
            }
        }
  }
</style>
