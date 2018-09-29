<template>
  <div class="wrap">
      <div class="info">
        <div class="title">
            {{details.title}}
        </div>
        <div class="describe">
            {{details.describe}}
        </div>
        <div class="time">
            <i class="icon-open">open</i>
            <span>{{details.time}}</span>
        </div>
      </div>
      <div class="content">
        <div class="tab-content">
          <div class="tab1 con" v-show="tabCurShow == 'tab1'">
            <div class="image-list">
              <ul>
                <li v-for="(rest, restIndex) in restaurantImage.image" :key="restIndex">
                    <img :src="rest" alt="">
                </li>
              </ul>
            </div>
            <div class="ads-btn">
              <button>
                <span>{{restaurantImage.address}}</span>
                <i class="icon-triangle"></i>
              </button>
            </div>
          </div>
          <div class="tab2 con" v-show="tabCurShow == 'tab2'">
            全景图
          </div>
          <div class="tab3 con" v-show="tabCurShow == 'tab3'">
            特色菜品
          </div>
          <div class="tab4 con"  v-show="tabCurShow == 'tab4'">
            座位类型
          </div>
        </div>
        <div class="tab">
          <ul>
            <li @click.stop="bindtab('tab1')" :class="{'active':tabCurShow == 'tab1'}">
              餐厅图
            </li>
            <li @click.stop="bindtab('tab2')" :class="{'active':tabCurShow == 'tab2'}">
              全景图
            </li>
            <li @click.stop="bindtab('tab3')" :class="{'active':tabCurShow == 'tab3'}">
              特色菜品
            </li>
            <li @click.stop="bindtab('tab4')" :class="{'active':tabCurShow == 'tab4'}">
              座位类型
            </li>
          </ul>
        </div> 
      </div>
      <div class="nav-wrap">
        <div class="nav">
          <div>
            <button @click="bindToMenu">菜单</button>
          </div> 
          <div>
            <button class="booking" @click="bindToBooking">立即预订</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tabCurShow:'tab1',
      details:{
        title:'A Boluza 阿波罗意大利餐厅',
        describe:'蜀国飘香，成都最火爆的人气餐厅之一，主要以火锅为主，深受广大食客喜爱。',
        time:'9:00AM~21:00PM',
        state:1,
      },
      restaurantImage:{
        image:[
          'http://cdn.awbchina.com/wximage/timg.png',
          'http://cdn.awbchina.com/wximage/timg.png',
          'http://cdn.awbchina.com/wximage/timg.png'
        ],
        address:'武侯区紫杉路11号'
      }
    }
  },

  components: {
  },

  methods: {
    bindtab(t){
      this.tabCurShow = t;
    },
    bindToMenu(){
      wx.navigateTo({
        url: '/pages/restaurant/menu/main'
      })
    },
    bindToBooking(){
      wx.navigateTo({
        url: '/pages/restaurant/booking/main'
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
  .wrap{
    position:absolute;
    width:100%;
    height:100%;
    padding:10px;
    box-sizing: border-box;
    background:linear-gradient(180deg,rgba(26,26,26,0.4) 0%,rgba(26,26,26,1) 100%);
    .info{
      padding:20px 20px;
      .title{
        height:36px;
        font-size:22px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:36px;
      }
      .describe{
        margin-top:10px;
        height:37px;
        font-size:13px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,.6);
        line-height:18px;
      }
      .time{
        margin-top:40px;
        .icon-open{
          display:inline-block;
          width:50px;
          font-size:14px;
          text-align:center;
          height:25px;
          line-height:25px;
          border-radius:30px;
          border:1px solid rgba(225,11,34,1);
          color:rgba(225,11,34,1);
        }
        span{
          width:229px;
          height:20px;
          padding-left:10px;
          font-size:14px;
          font-family:PingFangSC-Medium;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:20px;
        }
      }
    }
    .content{
      .tab-content{
        width:100%;
        height:120px;
        position:relative;
        .con{
          position:absolute;
          height:240px;
          top:0;
          left:-10px;
          right:-10px;
          .image-list{
            overflow-x:scroll;
            ul{
              display:flex;
              box-sizing: border-box;
              padding: 0 20px;
              li{
                min-width:287px;
                min-height:155px;
                overflow:hidden;
                background-color:#f1f1f1;
                image{
                  width:100%;
                  height:100%;
                }
              }
              li:not(:first-child){
                margin-left:10px;
              }
            }
          }
        }
        .ads-btn{
            width:100%;
            box-sizing: border-box;
            padding:20px;
            button{
              width:100%;
              height:55px;
              line-height:55px;
              background:rgba(255,255,255,1);
              box-shadow:0px 8px 10px 0px rgba(129,140,166,0.08),0px 1px 0px 0px rgba(0,0,0,0.05);
              font-size:14px;
              font-family:PingFangSC-Regular;
              font-weight:400;
              color:rgba(26,26,26,1);
              border-radius:0;
            }
          }
      }
      .tab{
        background:rgba(246,248,251,1);
        padding-top:120px;
        ul{
          display:flex;
          justify-content:space-around;
          padding-bottom:20px;
          li{
            height:20px;
            font-size:14px;
            padding-top:20px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            flex:1;
            color:rgba(153,153,153,1);
            border-top:1px solid rgba(246,248,251,1);
            line-height:20px;
            text-align:center;
          }
          li.active{
            color:rgba(225,11,34,1);
            border-top:1px solid rgba(225,11,34,1);
            box-shadow-top:0px 6px 10px 0px rgba(129,140,166,0.8);
          }
        }
      }
    }
    .nav-wrap{
      background: rgba(246,248,251,1);
      .nav{
        display: flex;
        &>div{
          flex:1;
          margin:20px;
          button{
            height:45px;
            line-height:45px;
            font-size:15px;
            font-family:PingFangSC-Medium;
            font-weight:500;
          }
          button.booking{
            background:rgba(225,11,34,1);
            color:rgba(255,255,255,1);
          }
        }
      }
    }
  }
</style>
