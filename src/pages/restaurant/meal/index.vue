<template>
  <div class="meal">
    <div class="top">
      <div class="title"><span>正在用餐</span></div>
      <div class="name"><span>{{meal.name}}</span></div>
      <div class="seat">
        <span>{{meal.seat}}</span>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>
          <div class="title">已上菜品</div>
          <div class="meal-wrap">
            <div v-for="(al, alIndex) in meal.already" :key="alIndex" class="info">
              <div class="left">
                <div class="image-wrap">
                  <img :src="al.image" alt="">
                </div>
              </div>
              <div class="right">
                <div>
                  <span>{{al.name}}</span>
                </div>
                <div class="pieces">
                  <span>{{al.pieces}}</span><span>份</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="title">制作中</div>
          <div class="meal-wrap">
            <div v-for="(be, beIndex) in meal.being" :key="beIndex" class="info">
              <div class="left">
                <div class="image-wrap">
                  <img :src="be.image" alt="">
                </div>
              </div>
              <div class="right">
                <div>
                  <span>{{be.name}}</span>
                </div>
                <div class="pieces">
                  <span>{{be.pieces}}</span><span>份</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="title">已取消</div>
          <div class="meal-wrap">
            <div v-for="(ca, caIndex) in meal.cancelled" :key="caIndex" class="info">
              <div class="left">
                <div class="image-wrap">
                  <img :src="ca.image" alt="">
                </div>
              </div>
              <div class="right">
                <div>
                  <span>{{ca.name}}</span>
                </div>
                <div class="pieces">
                  <span>{{ca.pieces}}</span><span>份</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="nav-wrap">
      <ul>
        <li>分享</li>
        <li @click="bindToBill">买单</li>
      </ul>
     <div class="voice">
       <div class="icon-wrap">
         <i></i>
       </div>
     </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      meal:{
        name:'A Boluza 阿波罗意大利餐厅',
        seat:'A8',
        already:[
            {
              image:'http://cdn.awbchina.com/wximage/timg.png',
              name:'水果拼盘',
              pieces:2,
            },
            {
              image:'http://cdn.awbchina.com/wximage/timg.png',
              name:'水果拼盘2',
              pieces:1,
            }
        ],
        being:[
          {
            image:'http://cdn.awbchina.com/wximage/timg.png',
            name:'蒜茸烹龙虾',
            pieces:2,
          },
          {
            image:'http://cdn.awbchina.com/wximage/timg.png',
            name:'蒜茸烹龙虾2',
            pieces:2,
          }
        ],
        cancelled:[
          {
            image:'http://cdn.awbchina.com/wximage/timg.png',
            name:'咖喱鸡肉',
            pieces:2,
          }
        ],
      },
    }
  },

  components: {
  },

  methods: {
    bindToBill(){
      wx.navigateTo({
        url: '/pages/restaurant/bill/main'
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
  .meal{
    padding-bottom:60px;
    .top{
      width:100%;
      color:rgba(253,253,253,1);
      background:rgba(26,26,26,1);
      padding-top:20px;
      padding-left:30px;
      padding-bottom:30px;
      position: relative;
      box-sizing: border-box;
      .title{
        font-size:48px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(253,253,253,1);
      }
      .name{
        font-size:18px;
        margin-top:20px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(253,253,253,1);
      }
      .seat{
        position: absolute;
        width:100px;
        height:50px;
        font-size:40px;
        line-height:50px;
        text-align: center;
        background:rgba(225,11,34,1);
        right: 0;
        top:30px;
      }
    }
    .content{
      padding-top:20px;
      padding-left:30px;
      .title{
        height:21px;
        font-size:15px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:21px;
      }
      ul{
        li{
          .meal-wrap{
            height: 84px;
            width:100%;
            overflow-x:scroll;
            overflow-y:hidden;
            margin-top: 15px;
            margin-bottom: 15px;
            display:flex;
            .info{
              display:flex;
              min-width:221px;
              height:77px;
              background:rgba(255,255,255,1);
              box-shadow:0px 1px 6px 0px rgba(0,0,0,0.11);
              margin-right:15px;
              .left{
                position:relative;
                width:108px;
                .image-wrap{
                  width:84px;
                  height:84px;
                  overflow: hidden;
                  position:absolute;
                  left:4px;
                  top:-4px;
                  img{
                    width:100%;
                    height:100%;
                  }
                }
              }
              .right{
                font-size:15px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(56,56,56,1);
                padding-top:15px;
                .pieces{
                  font-size:12px;
                  font-family:PingFangSC-Medium;
                  font-weight:500;
                  margin-top:10px;
                  color:rgba(225,11,34,1);
                }
              }
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
      height:60px;
      padding-left:20px;
      padding-right:20px;
      box-sizing:border-box;
      bottom:0;
      left:0;
      background:linear-gradient(360deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0.8) 100%);
      box-shadow:0px -1px 0px 0px rgba(0,0,0,0.2);
      opacity:0.8;
      display:flex;
      ul{
        height:100%;
        width:65%;
        display:flex;
        justify-content:center;
        align-items:center;
        li{
          flex:1;
          font-size:18px;
          font-family:PingFangSC-Medium;
          font-weight:500;
          text-align:center;
          color:rgba(26,26,26,1);
        }
      }
      .voice{
        position:absolute;
        top:-36px;
        right:36px;
        .icon-wrap{
          border-radius:50%;
          width: 72px;
          height: 72px;
          background-size:cover;
          background-image:url($image-url + 'images/restaurant/voice/technology@2x.png');
        }
      }
    }
  }
</style>
