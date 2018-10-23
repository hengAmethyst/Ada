<template>
  <div class="wrap">
      <div class="info">
        <div class="name">
            {{details.name}}
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
          <!-- 餐厅图 -->
            <div class="image-list">
              <ul>
                <li v-for="(rest, restIndex) in restaurantImage.image" :key="restIndex" @click="bindEnlargeImage">
                    <div class="image-wrap">
                      <img :src="rest" alt="">
                    </div>
                </li>
              </ul>
            </div>
            <div class="ada-btn">
              <button>
                <span>{{restaurantImage.address}}</span>
                <div class="icon-wrap">
                  <i class="icon-triangle"></i>
                  <i class="icon-triangle-shadow"></i>
                </div>
              </button>
            </div>
          </div>
          <div class="tab2 con" v-show="tabCurShow == 'tab2'">
          <!-- 全景图 -->
            <div class="image-list">
               <ul>
                <li v-for="(pan, panIndex) in panorama.image" :key="panIndex">
                    <div class="image-wrap">
                      <img :src="pan" alt="">
                    </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="tab3 con" v-show="tabCurShow == 'tab3'">
            <div class="image-list">
              <ul>
                <li v-for="(spe, speIndex) in specialCuisine" :key="speIndex" @click="bindToMenu">
                    <div class="image-wrap">
                      <img :src="spe.image" alt="">
                    </div>
                    <div class="name">
                      {{spe.name}}
                    </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="tab4 con"  v-show="tabCurShow == 'tab4'">
            <!-- 座位类型 -->
            <div class="image-list">
               <ul>
                <li v-for="(sea, seaIndex) in seat.image" :key="seaIndex">
                    <div class="image-wrap">
                      <img :src="sea" alt="">
                    </div>
                </li>
              </ul>
            </div>
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
      <imageEnlarge :enlargeImageShow="enlargeImageShow" :enlargeImageList="restaurantImage.image" @bindClose="bindClose"></imageEnlarge>
  </div>
</template>

<script>
  import imageEnlarge from '@/components/restaurant/image-enlarge';
  export default {
    data () {
      return {
        tabCurShow:'tab1',
        details:{
          name:'A Boluza 阿波罗意大利餐厅',
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
        },
        panorama:{
          image:[
            'http://cdn.awbchina.com/wximage/timg.png'
          ]
        },
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
        seat:{
          image:[
            'http://cdn.awbchina.com/wximage/timg.png'
          ]
        },
        enlargeImageShow:false
      }
    },

    components: {
      imageEnlarge
    },

    methods: {
      bindEnlargeImage(){
        this.enlargeImageShow = true;
      },
      bindClose(){
        this.enlargeImageShow = false;
      },
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
      .name{
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
                .image-wrap{
                  width:287px;
                  overflow:hidden;
                  height:155px;
                  img{
                    width:100%;
                  }
                }
              }
              li:not(:first-child){
                margin-left:10px;
              }
            }
          }
        }
        .tab2,.tab4{
          .image-list{
            ul{
              li{
                width:100%;
                .image-wrap{
                  width:100%;
                  height:210px;
                }
              }
              li:not(:first-child){
                margin-left:0;
              }
            }
          }
        }
        .tab3{
          .image-list{
            ul{
              li{
                width:100%;
                .image-wrap{
                  width:170px;
                  height:170px;
                }
                .name{
                  background:rgba(255,255,255,1);
                  font-size:14px;
                  font-family:PingFangSC-Medium;
                  font-weight:500;
                  text-align:center;
                  height:48px;
                  line-height:48px;
                  color:rgba(26,26,26,1);
                }
              }
              li:not(:first-child){
                margin-left:10px;
              }
            }
          }
        }
        .ada-btn{
          width:100%;
          box-sizing: border-box;
          padding:20px;
          button{
            width:100%;
            display:flex;
            justify-content:space-between;
            align-items:center;
            height:55px;
            line-height:55px;
            background:rgba(255,255,255,1);
            box-shadow:0px 8px 10px 0px rgba(129,140,166,0.08),0px 1px 0px 0px rgba(0,0,0,0.05);
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(26,26,26,1);
            border-radius:0;
            text-align: left;
            padding:0 20px;
            span{
              flex:1;
            }
            .icon-wrap{
              width:20px;
              height:10px;
              position:relative;
              .icon-triangle{
                position: absolute;
                top:0;
                left:0;
                width:0;
                height:0;
                z-index:2;
                overflow:hidden;
                font-size: 0;     /*是因为, 虽然宽高度为0, 但在IE6下会具有默认的 */
                line-height: 0;  /* 字体大小和行高, 导致盒子呈现被撑开的长矩形 */
                border-width: 7px 0 7px  10px ;
                border-style:solid;  /*ie6下会出现不透明的兼容问题*/
                border-color:transparent transparent transparent rgba(225,11,34,1);
              }
              .icon-triangle-shadow{
                position: absolute;
                top:2px;
                left:2px;
                width:0;
                z-index:1;
                height:0;
                overflow:hidden;
                font-size: 0;     /*是因为, 虽然宽高度为0, 但在IE6下会具有默认的 */
                line-height: 0;  /* 字体大小和行高, 导致盒子呈现被撑开的长矩形 */
                border-width:7px 0 7px  10px ;
                border-style:solid;  /*ie6下会出现不透明的兼容问题*/
                border-color:transparent transparent transparent rgba(225,11,34,0.2);
              }
            }
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
