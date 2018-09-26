<template>
  <div class="wrap">
    <div class="search">
      <div class="left">
        <i class="icon" @tap="bindSearch"></i>
        <input type="text" @input="bindInput" placeholder="请输入餐厅信息" v-model="searchValue">
      </div>
      <div class="right">
        <button>取消</button>
      </div>
    </div>
    <div class="content">
      <div class="lately" v-if="lately">
        <div class="tip">
          最近搜索
        </div>
        <ul>
          <li v-for="(lat, latIndex) in latelyData" :key="latIndex">
            {{lat}}
          </li>
        </ul>
      </div>
      <div class="entering" v-if="entering">
        <div>
          <ul>
            <li v-for="(ent, entIndex) in enteringData" :key="entIndex">
              <div class="left">
                <div class="image-wrap">
                  <img :src="ent.iamge" alt="">
                </div>
              </div>
              <div class="center">
                <div class="info">
                  <span class="name">{{ent.name}}</span>
                  <span class="been" v-if="ent.been">去过</span>
                </div>
              </div>
              <div class="right">
                <span>{{ent.range}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="restaurant-list"  v-if="restaurant">
        <ul>
          <li v-for="(rest, restIndex) in restaurantList" :key="restIndex">
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
  </div>
</template>

<script>

export default {
  data () {
    return {
      searchValue:'',
      lately:1,
      entering:0,
      restaurant:0,
      latelyData:['太古里','gentlemonster','翠园','星巴克','翠园','星巴克'],
      enteringData:[
        {
          id:1,
          iamge:'',
          name:'瘾食电影主题餐厅 双楠店瘾食电影主题餐厅 双楠店',
          been:1,
          range:'1.7km'
        },
        {
          id:2,
          iamge:'',
          name:'瘾食电影主题餐厅',
          been:0,
          range:'2.5km'
        }
      ],
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
    bindSearch(){
      if (this.searchValue) {
        this.lately = 0
        this.entering = 0
        this.restaurant = 1
      }
    },
    bindInput(){
      if (this.searchValue) {
        this.lately = 0
        this.entering = 1
        this.restaurant = 0
      }else{
        this.lately = 1
        this.entering = 0
        this.restaurant = 0
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
  .wrap{
    .search{
      display:flex;
      padding:20px;
      .left{
        flex:1;
        background:rgba(246,248,251,1);
        display:flex;
        align-items:center;
        padding-left:10px;
        input{
          font-size:14px;
          height:40px;
          line-height:40px;
          padding-left:10px;
          font-family:SFNSDisplay;
          color:rgba(153,153,153,1);
        }
        .icon{
          width:32px;
          height:32px;
          background-color:$theme-gray;
        }
      }
      .right{
        height:40px;
        line-height:40px;
        button{
          font-size:14px;
          font-family:MicrosoftYaHeiUI;
          color:rgba(1,1,1,1);
          background-color:#fff;
          text-align:right;
          padding-left:20px;
          padding-right:0;
        }
      }
    }
    .content{
      .lately{
        padding:0 20px;
        .tip{
          font-size:14px;
          font-family:SFNSDisplay;
          color:rgba(153,153,153,1);
        }
        ul{
          display:flex;
          flex-wrap:wrap;
          li{
            text-align:center;
            height:30px;
            line-height:30px;
            font-size:14px;
            padding:0 10px;
            background:rgba(233,233,233,1);
            font-family:SFNSDisplay;
            color:rgba(1,1,1,1);
            margin-right:10px;
            margin-top:10px;
          }
        }
      }
      .entering{
        padding:0 20px;
        ul{
          li{
            display:flex;
            height:80px;
            align-items:center;
            border-bottom:1px solid rgba(233,233,233,1);
            .left{
              .image-wrap{
                width:30px;
                height:30px;
                border-radius:50%;
                background-color:$theme-gray;
                img{
                  width:100%;
                  height:100%;
                }
              }
            }
            .center{
              flex:1;
              padding: 0 10px;
              font-size:15px;
              font-family:PingFangSC-Regular;
              font-weight:400;
              color:rgba(1,1,1,1);
              .info{
                display:flex;
                align-items:center;
                 .name{
                  flex:1;
                }
                .been{
                  display:inline-block;
                  margin-left:10px;
                  width:45px;
                  text-align:center;
                  height:20px;
                  line-height:20px;
                  font-size:12px;
                  font-family:PingFangSC-Regular;
                  font-weight:400;
                  color:rgba(255,255,255,1);
                  background:rgba(225,11,34,1);
                }
              }
             
            }
            .right{
              font-size:14px;
              font-family:PingFangSC-Regular;
              font-weight:400;
              color:rgba(153,153,153,1);
            }
          }
        }
      }
      .restaurant-list{
        width: 100%;
        box-sizing: border-box;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 20px;
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
  }
  
</style>
