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
        <div class="section-2">
            <div class="section-2-1" :class="navIndex==0?'active-nav':''" @click="changeNav(0)">
                即将前往
            </div>
            <div class="section-2-2" :class="navIndex==1?'active-nav':''"  @click="changeNav(1)">
                历史订单
            </div>
        </div>
        <div class="section-3" v-if="navIndex==0">
            <OrderList></OrderList>
        </div>
        
    </div>
</template>

<script>
import OrderList from '@/components/user/orderList'
export default {
    data(){
        return {
            navIndex: 0,// 选中的nav
        }
    },
    components:{
        OrderList
    },
    methods:{
        changeNav(e){
            this.navIndex = e
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
                  font-weight: bold;
              }
              span:nth-child(2){
                  font-size: 30rpx;
                  color: #999; 
                  font-weight: bold;
              }
          }
          .section-1-2{
              width: 130rpx;
              height: 130rpx;
              background: red;
              border-radius: 100%;
          }
      }
      .section-2{
          display: flex;
          width: 100%;
          border-bottom: 1rpx solid #E9E9E9;
          .section-2-1{
              margin-left: 40rpx;
              padding-bottom: 12rpx;
              font-size: 28rpx;
              color: #999999;
              font-weight: bold;
          }
          .section-2-2{
              margin-left: 60rpx;
              padding-bottom: 12rpx;
              font-size: 28rpx;
              color: #999999;
              font-weight: bold;
          }
          .active-nav{
              color: #E10B22;
              border-bottom: 4rpx solid #E10B22;
          }
      }
  }
</style>
