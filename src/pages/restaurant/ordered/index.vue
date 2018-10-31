<template>
  <div class="ordered">
    <div class="content">
      <ul>
        <li  v-for="(ord, ordIndex) in orderedData" :key="ordIndex">
          <div class="user-wrap">
            <div class="image-wrap">
              <img :src="ord.image" alt="">
            </div>
            <div class="user-name">{{ord.name}}</div>
          </div>
          <div v-for="(o, oIndex) in ord.ordered" :key="oIndex" class="ordered-warp">
            <div class="left">
              <div class="info">
                <div class="image-wrap">
                  <img :src="o.image" alt="">
                </div>
                <div class="name">
                  <span>{{o.name}}</span>
                </div>
                <div class="price-wrap">
                  <span>￥</span><span class="price">{{o.price}}</span>
                </div>
              </div>
              <div class="zero" v-if="o.pieces === 0"></div>
            </div>
            <div class="right">
              <input-num :pieces="o.pieces" @bindAddNum="bindAddNum(ordIndex,oIndex)" @bindReduceNum="bindReduceNum(ordIndex,oIndex)"></input-num>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="nav-wrap">
      <div class="left">
        <div class="pieces-wrap">
          <span>{{total.pieces}}</span><span>个</span>
        </div>
        <div class="price-wrap">
          <span>￥</span><span class="price">{{total.price}}</span>
        </div>
      </div>
      <div class="center">
        <div class="icon-wrap">
          <i></i>
        </div>
      </div>
      <div class="right" @click="bindToMeal">
        选好啦
      </div>
    </div>
  </div>
</template>

<script>
import InputNum from '@/components/common/input-num'
export default {
  data () {
    return {
      orderedData:[
        {
          name:'Trista',
          image:'http://cdn.awbchina.com/wximage/default.png',
          ordered:[
            {
              id:1,
              image:'http://cdn.awbchina.com/wximage/timg.png',
              name:'火锅牛排',
              price:'78',
              pieces:0
            },
            {
              id:2,
              image:'http://cdn.awbchina.com/wximage/timg.png',
              name:'火锅牛排',
              price:'78',
              pieces:4
            }
          ]
        },
        {
          name:'Kity',
          image:'http://cdn.awbchina.com/wximage/default.png',
          ordered:[
            {
              id:1,
              image:'http://cdn.awbchina.com/wximage/timg.png',
              name:'火锅牛排',
              price:'78',
              pieces:3
            }
          ]
        },
        {
          name:'大寻',
          image:'http://cdn.awbchina.com/wximage/default.png',
          ordered:[
            {
              id:1,
              image:'http://cdn.awbchina.com/wximage/timg.png',
              name:'火锅牛排',
              price:'78',
              pieces:0
            },
            {
              id:2,
              image:'http://cdn.awbchina.com/wximage/timg.png',
              name:'火锅牛排',
              price:'78',
              pieces:1
            }
          ]
        },
      ],
      total:{
        pieces:8,
        price:524
      }
    }
  },

  components: {
    InputNum
  },

  methods: {
    bindToMeal(){
      wx.navigateTo({
        url: '/pages/restaurant/meal/main'
      })
    },
    bindAddNum(ordIndex,oIndex){
      this.orderedData[ordIndex].ordered[oIndex].pieces ++ ;
    },
    bindReduceNum(ordIndex,oIndex){
      if (this.orderedData[ordIndex].ordered[oIndex].pieces > 0) {
        this.orderedData[ordIndex].ordered[oIndex].pieces -- ;
      }else{
        this.orderedData[ordIndex].ordered[oIndex].pieces ++ ;
      }
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/common.scss";
  .ordered{
    padding:20px 20px 80px 20px;
    background:rgba(242,242,242,1);
    box-sizing: border-box;
    min-height:100%;
    ul{
      li{
        .user-wrap{
          display:flex;
          margin-bottom:20px;
          .user-name{
            height:40px;
            line-height:40px;
            padding-left:20px;
          }
        }
        .ordered-warp{
          display:flex;
          align-items:center;
          margin-bottom:20px;
          .left{
            padding-right:10px;
            position:relative;
            .info{
              box-sizing: border-box;
              padding:0 20px;
              display:flex;
              align-items:center;
              width:236px;
              height:60px;
              background:rgba(255,255,255,1);
              box-shadow:0px 4px 10px 0px rgba(129,140,166,0.15);
              border-radius:0px 10px 10px 10px;
              .name{
                flex:1;
                padding-left:20px;
                font-size:16px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(26,26,26,1);
              }
              .price-wrap{
                font-size:12px;
                color:$theme-color;
                font-weight:500;
                text-align:center;
                .price{
                  font-family:PingFangSC-Medium;
                  font-size:13px;
                }
              }
            }
            .zero{
              position:absolute;
              left:-8px;
              top:30px;
              width:256px;
              height:2px;
              background:rgba(225,11,34,1);
              box-shadow:0px 3px 5px 0px rgba(177,124,130,0.8);
            }
          }
          .right{
            height:60px;
            flex:1;
            display:flex;
            justify-content:center;
            align-items:center;
          }
        }
      }
    }
    .image-wrap{
      width:40px;
      height:40px;
      border-radius:50%;
      overflow: hidden;
      img{
        width:100%;
        height:100%;
      }
    }
    .nav-wrap{
      border-top: 1px solid rgba(246,248,251,1);
      background-color:#fff;
      position:fixed;
      width:100%;
      height:60px;
      bottom:0;
      left:0;
      background:linear-gradient(360deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0.8) 100%);
      box-shadow:0px 1px 0px 0px rgba(0,0,0,0.2);
      display:flex;
      .left{
        flex:1;
        display:flex;
        align-items:center;
        justify-content:center;
        .pieces-wrap{
          padding-right:10px;
          font-size:16px;
          font-family:PingFangSC-Medium;
          font-weight:500;
          color:rgba(26,26,26,1);
        }
        .price-wrap{
            font-size:14px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(26,26,26,1);
          .price{
            font-size:19px;
          }
        }
      }
      .center{
        width:80px;
        height:100%;
        background:rgba(233,233,233,1);
        display:flex;
        justify-content:center;
        align-items:center;
        .icon-wrap{
          width:30px;
          height:30px;
          background-size:cover;
          background-image:url($image-url + 'images/restaurant/ordered/icon_btn_share@2x.png');
        }
      }
      .right{
        width:130px;
        height:100%;
        line-height:60px;
        text-align:center;
        font-size:18px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        background:rgba(225,11,34,1);
      }
    }
  }
</style>
