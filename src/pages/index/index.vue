<template>
  <div class="home">
    <div class="section-1">
      <div class="section-1-1">
        <div class="centigrade-wrap">
          <span class="centigrade">{{weatherInfo.centigrade}}</span><span>°</span>
        </div>
      </div>
      <div class="section-1-2">
        <div class="welcoming">{{weatherInfo.welcoming}}</div>
        <div class="icon-wrap">
          <i class="icon-scan"></i>
        </div>
      </div>
    </div>
    <div class="section-2">
      <div class="section-2-1">
        了解Ada
      </div>
      <div class="section-2-2" @click="bindToList">
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
  import { mapState, mapMutations } from 'vuex'
  import { restList } from '@/http/api.js'
  import { fetchRestList } from '@/http/api.js'
  export default {
    data () {
      return {
        weatherInfo:{
          centigrade:'27',
          centigradeimage:'http://cdn.awbchina.com/wximage/timg.png',
          welcoming:'天气好啦，喝个咖啡吧'
        },
      }
    },

    components: {
    },
    computed:{
      ...mapState([
        'openId',
        'locationInfo'
      ]),
    },
    methods: {
      
      bindToList(){
        wx.navigateTo({
          url: '/pages/restaurant/list/main'
        })
      },
    },

    created () {
      // this.http()
      // 调用应用实例的方法获取全局数据
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/sass/common.scss";
  .home{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .section-1{
      padding-left:40px;
      padding-right:10px;
      margin-bottom:10px;
      background-color:#f1f1f1;
      .section-1-1{
        width: 100%;
        height:140px;
        position:relative;
        .centigrade-wrap{
          position:absolute;
          left:0;
          bottom:0;
          height:112px;
          font-family:WeibeiTC-Bold;
          font-size:80px;
          line-height:112px;
          .centigrade{
            font-size:80px;
            font-weight:500;
            color:rgba(1,1,1,1);
          }
        }
      }
      .section-1-2{
        height:40px;
        display:flex;
        .welcoming{
          height:26px;
          font-size:15px;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:rgba(102,102,102,1);
          line-height:26px;
          flex:1;
        }
        .icon-wrap{
          .icon-scan{
            background-image:url($image-url + 'images/homepage/Group@2x.png');
            width:30px;
            height:27px;
            background-size:cover;
          }
        }
      }
    }
    .section-2{
      display: flex;
      flex-direction: column;
      padding-left:40px;
      width: 100%;
      &>div{
        margin-bottom:10px;
      }
      .section-2-1{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height:140px;
        background:rgba(1,1,1,1);
        background-image:url($image-url + 'images/common/timg.png');
        background-size:cover;
      }
      .section-2-2{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height:140px;
        background:rgba(1,1,1,1);
        background-image:url($image-url + 'images/common/timg.png');
        background-size:cover;
      }
      .section-2-3{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height:140px;
        background:rgba(1,1,1,1);
        background-image:url($image-url + 'images/common/timg.png');
        background-size:cover;
      }
    }
  }
</style>
