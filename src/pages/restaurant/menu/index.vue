<template>
  <div class="wrap">
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
          <li v-for="(men, menIndex) in menuType" :key="menIndex"  :class="{'active':menuTypeActive == men.id}">
            {{men.name}}
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <ul>
          <li v-for="(menu, menuIndex) in menuList" :key="menuIndex">
            <div class="image-wrap">
              <img :src="menu.image" alt="">
            </div>
            <div class="info">
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
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-wrap">
        <div class="nav">
          <div>
            <button>邀请好友点餐</button>
          </div>
          <div>
            <button class="book">现在点餐</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      specialCuisine:[
        {
          id:1,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'火锅牛排',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'78'
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'冰冻鳕鱼',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'46'
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'冰冻鳕鱼',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'46'
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'冰冻鳕鱼',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'46'
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'冰冻鳕鱼',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'46'
        }
      ],
      menuList:[
        {
          id:1,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'火锅牛排',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'78'
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'冰冻鳕鱼',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'46'
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'冰冻鳕鱼',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'46'
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'冰冻鳕鱼',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'46'
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'冰冻鳕鱼',
          describe:'兔兔、老姜、麻辣，上层原材料制作，挑战你的味蕾',
          price:'46'
        }
      ],
      menuType:[
        {
          id:1,
          name:'特色菜'
        },
        {
          id:2,
          name:'必点'
        },
        {
          id:3,
          name:'时蔬'
        },
        {
          id:4,
          name:'酒水'
        },
        {
          id:5,
          name:'小吃'
        }
      ],
      menuTypeActive:1
    }
  },

  components: {
  },

  methods: {
  },

  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/common.scss";
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
          margin-right:20px;
          font-size:15px;
          padding:10px 0;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:rgba(153,153,153,1);
          border-bottom:2px solid #fff;
        }
        li.active{
          border-bottom-color:$theme-highlight;
          color:$theme-highlight;
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
          padding:10px;
          font-size:12px;
          color:$theme-highlight;
          .price{
            font-size:19px;
          }
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
      .nav{
        display: flex;
        &>div{
          flex:1;
          margin:10px;
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
      }
    }
</style>
