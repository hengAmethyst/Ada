<template>
    <div class="box">
        <div class="section-1">
            <img :src="imgUrl" />
        </div>
        <div class="section-2">
          <div class="image-wrap">
              <img :src="imgUrl" />
          </div>
            <div class="dish-name">{{firstResult.name}}</div>
            <div class="others">
              <ul>
                <li v-for="(o, oIndex) in othersResult" :key="oIndex">
                  {{o.name}}
                </li>
              </ul>
            </div>
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
        imgUrl(){
            return this.$store.state.dishInfo.url
        },
        firstResult(){
            return this.$store.state.dishInfo.result[0]
        },
        othersResult(){
            let result = this.$store.state.dishInfo.result.slice(1);
            return result;
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
               height:auto;
              display:inline;
           }
       }
       .section-2{
           padding:20px;
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
           .image-wrap{
               width:133px;
               height:133px;
               border-radius: 100%;
               overflow:hidden;
               img{
                width:100%;
                height:auto;
                display:inline;
               }
           }
           .dish-name{
               width:100%;
               text-align: center;
               font-size: 20px;
               margin-top:20px;
               font-weight:bold;
              color:rgba(26,26,26,1);
           }
           .others{
              margin-top:10px;
              ul{
                display:flex;
                justify-content:center;
                flex-wrap:wrap;
                li{
                  height:20px;
                  margin-left:8px;
                  font-size:14px;
                  font-family:PingFangSC-Regular;
                  font-weight:400;
                  color:rgba(102,102,102,1);
                  line-height:20px;
                }
              }
           }
       }
   }
</style>


