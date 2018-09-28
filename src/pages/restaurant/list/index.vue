<template>
  <div class="wrap" @scroll="bindScroll">
    <div class="info">
      <div class="hello">
        <span>Hello，</span>
      </div>
      <div  class="name">
        <span>
          {{userinfo.name}}
        </span>
      </div>
      <div  class="what">
        <i class="iconfont"></i>
        <span>这是什么菜?</span>
      </div>
      <div class="search" @click="bindToSearch"></div>
    </div>
    <div class="content">
      <ul>
        <li v-for="(rest, restIndex) in restaurantList" :key="rest.id" @click="bindToDetails">
          <div class="left">
            <div class="image-wrap">
              <img :src="rest.image" alt="">
            </div>
          </div>
          <div class="restaurant-info">
            <div class="top">
              <div class="state" :class="{ crowding: rest.state == 1 }">
              </div>
              <div>
                {{rest.range}}
              </div>
            </div>
            <div class="center">
              {{rest.name}}
            </div>
            <div class="bottom">
              <span>¥</span>
              <span>{{rest.price}}</span>
              <i></i>
              <span>{{rest.adress}}</span>
              <i></i>
              <span>{{rest.type}}</span>
            </div>
            <div class="crowding-tip" v-if=" rest.state == 1">
                拥挤需排队
            </div>
          </div>
        </li>
      </ul>
    </div>    
  </div>
</template>

<script>

export default {
  data () {
    return {
      userinfo: {
        name: 'Trista'
      },
      restaurantList: [
        {
          id: 1,
          image: 'http://cdn.awbchina.com/wximage/default.png',
          name: 'A aboluo 阿波罗',
          price: '98',
          adress: '光明路',
          type: '火锅',
          state: 1,
          range: '100m'
        },
        {
          id: 2,
          image: 'http://cdn.awbchina.com/wximage/default.png',
          name: '阿波罗阿波罗阿波罗阿波罗',
          price: '98',
          adress: '光明路',
          type: '火锅',
          state: 0,
          range: '100m'
        },
        {
          id: 3,
          image: 'http://cdn.awbchina.com/wximage/default.png',
          name: 'A aboluo 阿波罗',
          price: '98',
          adress: '光明路',
          type: '火锅',
          state: 1,
          range: '100m'
        }
      ]
    }
  },

  components: {
  },

  methods: {
    bindScroll (e) {
      console.log(e)
    },
    bindToDetails(){
      wx.navigateTo({
        url: '/pages/restaurant/details/main'
      })
    },
    bindToSearch(){
      wx.navigateTo({
        url: '/pages/restaurant/search/main'
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
    width: 100%;
    .info{
      width: 100%;
      position:relative;
      background-color: $theme-color;
      color: #fff;
      box-sizing: border-box;
      padding-left: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
      .hello{
        opacity: 0.5;
        color: rgba(253, 253, 253, 1);
        font-size:20px;
      }
      .name{
        color: rgba(253, 253, 253, 1);
        font-size: 48px;
        padding-top: 10px;
        text-align: left;
        font-family: PingFangSC-Regular;
      }
      .what{
        font-size:15px;
        padding-top: 10px;
        opacity: 0.5;
        color: rgba(253, 253, 253, 1);
        text-decoration:underline
      }
      .search{
        position: absolute;
        right: 20px;
        bottom: -15px;
        width: 32px;
        height: 32px;
        border-radius:50%;
        background-color: rgba(225, 11, 34, 1);
        box-shadow: 0px 16px 34px 0px rgba(0, 0, 0, 0.16);
      }
    }
    .content{
      width: 100%;
      box-sizing: border-box;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 40px;
      ul{
        width: 100%;
        li{
          width: 100%;
          display: flex;
          z-index: 9;
          height: 160px;
          box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.11);
          border-radius: 1px;
          position: relative;
          margin-bottom: 80px;
          .left{
            width: 160px;
            .image-wrap{
              width: 150px;
              height: 216px;
              position: absolute;
              top: -10px;
              left: 10px;
              z-index: 10;
              overflow: hidden;
              img{
                width: 100%;
              }
            }
          }
          .restaurant-info{
            flex: 1;
            padding:15px 10px 0 10px;
            .top{
              display:flex;
              margin-bottom: 15px;
              color: #999;
              font-size: 12px;
              justify-content: space-between;
              align-items: center;
              .state{
                width: 10px;
                height: 10px;
                background-color: #999;
                border-radius: 50%;
              }
              .crowding{
                background-color: rgba(225, 11, 34, 1);
              }
            }
            .center{
              font-size: 16px;
              font-weight:550;
              margin-bottom: 10px;
            }
            .bottom{
              display: flex;
              align-items: center;
              color: #999;
              font-size: 12px;
              i{
                width: 4px;
                height: 4px;
                display: inline-block;
                background-color: #999;
                margin: 0 8px;
              }
            }
          }
          .crowding-tip{
            position: absolute;
            width:88px;
            height:20px;
            line-height:20px;
            font-size:12px;
            text-align:center;
            letter-spacing: 1px;
            color:#fff;
            background-color:#E10B22;
            right:0;
            bottom:20px;
          }
        }
      }
    }
  }
</style>
