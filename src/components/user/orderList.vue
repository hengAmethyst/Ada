<template>
    <div class="order-list">
        <div class="section-1"></div>
        <div class="section-2">
            <div class="section-2-1">蜀国飘香</div>
            <div class="section-2-2">
                <span>川味火锅</span>
                <span>5人</span>
                <span>待支付</span>
            </div>
        </div>
        <div class="section-3">
            <span>今天</span>
            <span>18:00</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .order-list{
        margin-top: 30rpx;
        display: flex;
        align-items: center;
        width: 100%;
        height: 182rpx;
        background: #fff;
        border-top: 1rpx solid #E9E9E9;
        box-shadow:0px 8rpx 10rpx 0px rgba(129,140,166,0.06),0px 1rpx 0px 0px rgba(0,0,0,0.05);
        .section-1{
            margin-left: 40rpx;
            width: 160rpx;
            height: 100rpx;
            background: red;
        }
        .section-2{
            margin-left: 30rpx;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 400rpx;
            height: 100rpx;
            .section-2-1{
                width: 100%;
                font-size: 32rpx;
                color: #010101;
                font-weight: bold;
            }
            .section-2-2{
                display: flex;
                width: 100%;
                font-size: 28rpx;
                color: #999999;
                span:nth-child(2){
                    margin-left: 27rpx;
                }
                span:nth-child(3){
                    margin-left: 33rpx;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 90rpx;
                    height: 44rpx;
                    font-size: 24rpx;
                    color: #fff;
                    background: #E10B22;
                }
            }
        }
        .section-3{
            margin-right: 40rpx;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 90rpx;
            height: 100rpx;
            span{
                font-size: 30rpx;
                color: #010101;
            }
        }
    }
</style>


