<template>
    <div class="box">
        <div class="section-1">
            <div class="section-1-1">
                <span>AMETHYST</span>
                <span>查看并编辑个人资料</span>
            </div>
            <div class="section-1-2">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

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
          height: 250rpx;
          .section-1-1{
              display: flex;
              flex-direction: column;
              width: 300rpx;
              height: 126rpx;
              span:nth-child(1){
                  font-size: 60rpx;
                  color: #1A1A1A;
              }
              span:nth-child(2){
                  font-size: 30rpx;
                  color: #999;
              }
          }
          .section-1-2{
              width: 130rpx;
              height: 130rpx;
              background: purple;
              border-radius: 100%;
          }
      }
  }
</style>
