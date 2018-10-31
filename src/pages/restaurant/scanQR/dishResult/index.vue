<template>
    <div class="box">
        <div class="section-1">
            <img :src="dishInfo.url"/>
        </div>
        <div class="section-2">
            <img :src="dishInfo.url" />
            <div class="dish-name">{{dishInfo.name}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
          
        }
    },
    methods:{
        
    },
    computed:{
        dishInfo(){
            return this.$store.state.dishInfo
        }
    }
}
</script>
<style scoped lang="scss">
   .box{
       display: flex;
       flex-direction: column;
       width:100%;
       height:100%;
       background: #010101;
       .section-1{
           width:100%;
            height: 712rpx;
           img{
               width: 100%;
               height: 100%;
           }
       }
       .section-2{
           margin: 0 auto;
           margin-top: -110rpx;
           display: flex;
           flex-direction: column;
           align-items: center;
           width: 582rpx;
           height: 484rpx;
           background: #fff;
           box-shadow:0px 3rpx 7rpx 0px rgba(101,150,255,0.36);
           z-index: 2;
           img{
               margin-top: 24rpx;
               width:266rpx;
               height: 266rpx;
               border-radius: 100%;
           }
           .dish-name{
               margin-top:30rpx;
               width:100%;
               text-align: center;
               font-size: 40rpx;
           }
       }
   }
</style>


