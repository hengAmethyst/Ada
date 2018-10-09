<template>
    <div class="box">
        <div class="section-1">
            <div class="left"></div>
            <div class="center">请选择登录</div>
            <div class="right"></div>
        </div>
        <div class="section-2">手机号一键登录</div>
        <div class="section-3">微信账号登录</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .box{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        .section-1{
            margin-top: 30rpx;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 40rpx;
            .left{
                width: 200rpx;
                height: 2rpx;
                background: #777;
            }
            .right{
                width: 200rpx;
                height: 2rpx;
                background: #777;
            }
            .center{
                margin: 0 10rpx;
                font-size: 24rpx;
                color: #777;
            }
        }
        .section-2{
            margin: 0 auto;
            margin-top: 60rpx;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 500rpx;
            height: 60rpx;
            font-size: 24rpx;
            color: #fff;
            background: yellowgreen;
            border-radius: 6rpx;
        }
        .section-3{
            margin: 0 auto;
            margin-top: 30rpx;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 500rpx;
            height: 60rpx;
            font-size: 24rpx;
            background: #fff;
            border: 1rpx solid #777;
            border-radius: 6rpx;
        }
    }
</style>


