<template>
  <div class="wrap menu-wrap">
    <div class="special-cuisine">
      <div>
        <div class="title">
          <span>特色菜品</span>
        </div>
        <ul>
          <li v-for="(spe, speIndex) in specialCuisine" :key="speIndex">
            <div class="image-wrap">
              <img :src="spe.image" alt="">
            </div>
            <div class="info">
              <div class="name">
                <span>{{spe.name}}</span>
              </div>
              <div class="describe">
                <span>{{spe.describe}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="tab">
        <ul>
          <li v-for="(men, menIndex) in menuType" :key="menIndex" :class="{'active':menuTypeActive == menIndex}" @click="bindMenuType(menIndex)">
            <div class="icon-wrap" v-if="menuTypeActive == menIndex && men.pieces">
              <i class="icon-round">{{men.pieces}}</i>
            </div>
            <div class="name">
              <span>{{men.name}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <ul>
          <li v-for="(menu, menuIndex) in menuList" :key="menuIndex">
            <div class="image-wrap">
              <img :src="menu.image" alt="">
            </div>
            <div class="info" @click.stop="bindMenuList(menuIndex)">
              <div class="name">
                <span>{{menu.name}}</span>
              </div>
              <div class="describe">
                <span>{{menu.describe}}</span>
              </div>
            </div>
            <div class="price-wrap">
              <span>￥</span><span class="price">{{menu.price}}</span>
            </div>
            <input-num :pieces="menu.pieces" @bindInputNum="bindInputNum(menuIndex)"></input-num>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-wrap">
        <div class="nav nav-order-false" v-if="!order">
          <div class="left">
            <button>邀请好友点餐</button>
          </div>
          <div class="right">
            <button class="book">现在点餐</button>
          </div>
        </div>
        <div class="nav nav-order-true" v-else>
          <div class="left">
            <div class="price-wrap">
              <span>￥</span><span class="price">2589</span>
            </div>
          </div>
          <div class="right">
            <ul v-if="friends">
              <li v-for="(fri, friIndex) in friendsList" :key="friIndex">
                <div class="image-wrap">
                  <img :src="fri.image" alt="">
                </div>
                <div>
                  <span>{{fri.name}}</span>
                </div>
              </li>
            </ul>
            <div v-else>
              <button class="book">和好友一起点餐</button>
            </div>
          </div>
        </div>
        <div class="ordering-info" @click="bindToOrdered" v-show="orderingInfoShow">
          <div class="ordering-wrap">
            <div class="left">
              <div class="pieces-wrap">{{orderingInfo.TotalPieces}}</div>
            </div>
            <div class="center">
              <div class="name">{{orderingInfo.name}}</div>
              <div class="icon-wrap"><i class="icon-plus"></i><span>{{orderingInfo.curPieces}}</span></div>
            </div>
            <div class="right"><i class="icon-right"></i></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import InputNum from '@/components/common/input-num'
export default {
  data () {
    return {
      menuTypeActive:0,
      order:1,
      friends:1,
      friendsList:[
        {
          image:'http://cdn.awbchina.com/wximage/default.png',
          name:'Trista'
        },
        {
          image:'http://cdn.awbchina.com/wximage/default.png',
          name:'Kity'
        },
        {
          image:'http://cdn.awbchina.com/wximage/default.png',
          name:'大寻'
        },
        {
          image:'http://cdn.awbchina.com/wximage/default.png',
          name:'黄小波'
        },
      ],
      specialCuisine:[
        {
          id:1,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'火锅牛排',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'78',
          pieces:1
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'冰冻鳕鱼',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'46',
          pieces:''
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'冰冻鳕鱼',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'46',
          pieces:''
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'冰冻鳕鱼',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'46',
          pieces:''
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'冰冻鳕鱼',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'46',
          pieces:''
        }
      ],
      menuList:[
        {
          id:1,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'火锅牛排',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'78',
          pieces:2
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'冰冻鳕鱼',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'46',
          pieces:0
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'冰冻鳕鱼',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'46',
          pieces:1
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'冰冻鳕鱼',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'46',
          pieces:''
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'冰冻鳕鱼',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'46',
          pieces:''
        }
      ],
      menuType:[
        {
          id:1,
          name:'特色菜',
          pieces:2
        },
        {
          id:2,
          name:'必点',
          pieces:''
        },
        {
          id:3,
          name:'时蔬',
          pieces:''
        },
        {
          id:4,
          name:'酒水',
          pieces:''
        },
        {
          id:5,
          name:'小吃',
          pieces:''
        }
      ],
      orderingInfo:{
        TotalPieces:5,
        name:'火锅牛排',
        curPieces:1
      },
      orderingInfoShow:0
    }
  },

  components: {
    InputNum
  },

  methods: {
    bindToOrdered(){
      wx.navigateTo({
        url: '/pages/restaurant/ordered/main'
      }) 
    },
    bindMenuType(index){
      this.menuTypeActive = index;
    },
    orderingInfoHidden(){
      this.orderingInfoShow = 0;
    },
    bindMenuList(index){
      this.menuList[index].pieces ++ ;
      this.orderingInfoShow = 1;
      setTimeout(this.orderingInfoHidden,3000); 
    },
    bindInputNum(index){
      if (this.menuList[index].pieces > 0) {
        this.menuList[index].pieces -- ;
      }else{
        this.menuList[index].pieces ++ ;
      }
      this.orderingInfoShow = 1;
      setTimeout(this.orderingInfoHidden,3000); 
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style lang="scss">
  @import "@/sass/common.scss";
  .menu-wrap{
    .special-cuisine{
      .title{
        font-size:19px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(56,56,56,1);
        padding:20px;
      }
      ul{
        display:flex;
        overflow-x:scroll;
        overflow-y:hidden;
        padding:0 10px 20px 10px;
        li{
          width:130px;
          height:160px;
          background:rgba(255,255,255,1);
          box-shadow:0px 8px 19px 0px rgba(129,140,166,0.15);
          margin: 0 10px;
          .image-wrap{
            width:130px;
            height:100px;
            overflow: hidden;
            img{
              width:100%;
              height:100%;
            }
          }
          .info{
            font-size:14px;
            padding:10px;
            flex:1;
            .name{
              height:24px;
              line-height:24px;
            }
            .describe{
              height:19px;
              font-size:12px;
              font-family:PingFangSC-Regular;
              font-weight:400;
              color:rgba(102,102,102,1);
              line-height:19px;
              overflow: hidden;
              white-space: nowrap; 
              text-overflow: ellipsis;
            }
          }

        }
      }
    }
    .content{
      padding-bottom:40px;
      .tab{
        ul{
          display:flex;
          margin:0 20px;
          border-bottom:1px solid $theme-gray;
          li{
            padding-right:20px;
            font-size:15px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            position:relative;
            .icon-wrap{
              position:absolute;
              top:-5px;
              left:-10px;
              width:25px;
              height:25px;
              line-height:25px;
              text-align:center;
              background:$theme-highlight;
              border-radius:50%;
              color:#fff;
              box-shadow:0px 6px 10px 0px rgba(123,0,0,0.2);
            }
            .name{
              padding-top:10px;
              padding-bottom:10px;
              border-bottom:2px solid #fff;
              color:rgba(153,153,153,1);
            }
          }
          li.active{
            .name{
              border-bottom-color:$theme-highlight;
              color:$theme-highlight;
            }
          }
        }
      }
    }
    .tab-content{
      ul{
        padding:20px;
        li{
          display:flex;
          height:90px;
          background:rgba(255,255,255,1);
          margin-bottom:20px;
          position:relative;
          .image-wrap{
            min-width:90px;
            min-height:90px;
            overflow: hidden;
            img{
              width:100%;
              height:100%;
            }
          }
          .info{
            font-size:14px;
            padding:4px 10px;
            .name{
              font-size:17px;
              font-family:PingFangSC-Medium;
              font-weight:500;
              color:rgba(26,26,26,1);
            }
            .describe{
              margin-top:10px;
              height:19px;
              font-size:14px;
              font-family:PingFangSC-Regular;
              font-weight:400;
              color:rgba(102,102,102,1);
              line-height:19px;
            }
          }
          .price-wrap{
            padding-left:10px;
            padding-top:10px;
            padding-bottom:10px;
            font-size:12px;
            color:$theme-highlight;
            text-align:right;
            .price{
              font-size:19px;
            }
          }
          .input-num{
            bottom:0px;
            right:0px;
          }
        }
      }
    }
    .nav-wrap{
        border-top: 1px solid rgba(246,248,251,1);
        background-color:#fff;
        position:fixed;
        width:100%;
        bottom:0;
        left:0;
        background:linear-gradient(360deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0.8) 100%);
        // box-shadow:0px -1px 0px 0px rgba(0,0,0,0.2);
        .nav{
          display: flex;
          padding: 10px;
          &>div{
            button{
              margin:0 20px;
              height:40px;
              line-height:40px;
              font-size:16px;
              font-family:PingFangSC-Medium;
              font-weight:500;
              background-color:#fff;
            }
            button.book{
              background:rgba(225,11,34,1);
              color:rgba(255,255,255,1);
            }
          }
          .left{
            flex:1;
            display: flex;
            align-items: center;
            justify-content: center;
            .price-wrap{
              font-size:12px;
              color:$theme-color;
              text-align:center;
              .price{
                font-size:24px;
                font-weight:500;
              }
            }
          }
          .right{
            min-width:50%;
            ul{
              display:flex;
              li{
                margin-left: 10px;
                font-size:12px;
                text-align: center;
                .image-wrap{
                  width:40px;
                  height:40px;
                  border-radius: 50%;
                  background-color: $theme-gray;
                  overflow: hidden;
                }
              }
            }
          }
        }
    }
    .ordering-info{
        position:fixed;
        margin:20px;
        width:336px;
        height:45px;
        bottom:80px;
        background:rgba(255,255,255,1);
        box-shadow:0px 5px 10px 0px rgba(0,0,0,0.3);
        .ordering-wrap{
          height:100%;
          padding:0 10px 0 20px;
          display:flex;
          align-items:center;
          .pieces-wrap{
            width:32px;
            height:32px;
            line-height:32px;
            text-align:center;
            background:$theme-color;
            border-radius:50%;
            color:#fff;
            font-size:15px;
          }
          .center{
            flex:1;
            padding: 0 20px;
            display:flex;
            justify-content:space-around;
            align-items: center;
            color:rgba(255,97,97,1);
            .name{
              font-size:15px;
              font-family:PingFangSC-Regular;
              font-weight:400;
              color:rgba(1,1,1,1);
            }
            .icon-wrap{
              display:flex;
              justify-content:space-around;
              align-items: center;
              font-size: 24px;
              .icon-plus{
                width: 30px;
                height: 26px;
                display:inline-block;
                position: relative;  /*方便相对于父元素进行定位*/
              }
              .icon-plus::before,
              .icon-plus::after{
                background:rgba(255,97,97,1);
                content: "";
                position: absolute;  /*方便进行定位*/
                height: 12px;
                width: 2px;
                top: 7px;
                right: 14px;  /*设置top和right使图像在20*20框中居中*/
              }
              .icon-plus::before{
                  transform: rotate(0deg);  /*进行旋转*/
              }
              .icon-plus::after{
                  transform: rotate(-90deg);
              }
            }
            
          }
          .right{
            display:flex;
            justify-content:space-around;
            align-items: center;
            .icon-right{
                width: 30px;
                height: 26px;
                display:inline-block;
                position: relative;  /*方便相对于父元素进行定位*/
              }
              .icon-right::before,
              .icon-right::after{
                background:$theme-color;
                content: "";
                position: absolute;  /*方便进行定位*/
                height: 10px;
                width: 2px;
                top: 5px;
                right: 14px;  /*设置top和right使图像在20*20框中居中*/
              }
              .icon-right::before{
                  transform: rotate(-45deg);  /*进行旋转*/
                  top:6px;
              }
              .icon-right::after{
                  top:12px;
                  transform: rotate(45deg);
              }
          }
        }
    }
  }
  
</style>
