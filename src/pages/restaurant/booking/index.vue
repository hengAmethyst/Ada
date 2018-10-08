<template>
  <div class="wrap">
    <div class="content n-people">
      <div class="title">
        用餐人数
      </div>
      <div class="tab-center">
        <ul>
          <li v-for="(num, numIndex) in numPeople" :key="numIndex" :class="{'active':numIndex == curNumIndex}">
            <div class="s-wrap">
              <span>{{num + 1}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="content seat">
      <div class="title">
        餐位选择
      </div>
      <div class="tab-center">
        <ul>
          <li v-for="(se, seIndex) in seatList" :key="seIndex" :class="{'active':seIndex == curSeIndex}">
            <div class="s-wrap">
              <div class="name">
                <span>{{se.name}}</span>
              </div>
              <div class="dec" v-if="se.rest">
                <span>剩</span>
                <span>{{se.rest}}</span>
                <span>桌</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="content dinner-time">
      <div class="title">
        用餐时间
      </div>
      <div class="tab-center">
        <ul>
          <li v-for="(din, dinIndex) in dinnerTime" :key="dinIndex" :class="{'active':dinIndex == curDinIndex}">
            <div class="s-wrap">
              <div class="day">
                <span>{{din.day}}</span>
              </div>
              <div class="dec">
                <span>{{din.week}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="time-wrap">
        <div class="time">
          <div class="left">
            <div class="transverse"></div>
            <div class="t">09</div>
          </div>
          <div class="center">
            <div></div>
            <div></div>
          </div>
          <div class="right">
            <div class="transverse"></div>
            <div class="t">30</div>
          </div>
        </div>
      </div>
    </div>
    <div class="submit" @click="bindToBooked">
      <div class="icon-wrap">
        <i class="icon-right"></i>
      </div>
      <div class="icon-wrap icon-minus-wrap">
        <i class="icon-minus"></i>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      curNumIndex:0,
      curSeIndex:2,
      curDinIndex:0,
      numPeople:10,
      seatList:[
        {
          name:'不限',
          rest:''
        },
        {
          name:'大厅',
          rest:'10'
        },
        {
          name:'靠窗',
          rest:'9'
        },
        {
          name:'包厢',
          rest:'0'
        }
      ],
      dinnerTime:[
      {
          date:'2018-09-28',
          day:'28',
          week:'周五'
        },
        {
          date:'2018-09-29',
          day:'29',
          week:'周六'
        },
        {
          date:'2018-09-30',
          day:'30',
          week:'周日'
        },
        {
          date:'2018-10-01',
          day:'01',
          week:'周一'
        },
      ]
    }
  },

  components: {
  },

  methods: {
    bindToBooked(){
      wx.navigateTo({
        url: '/pages/restaurant/booked/main'
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
      padding-top:40px;
      padding-left:40px;
      .content{
        .title{
        font-size:19px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
        }
        .tab-center{
          overflow-x:scroll;
          margin-top:20px;
          min-width: 100%;
          margin-bottom:20px;
          height:70px;
          display:flex;
          align-items:center;
          ul{
            display:flex;
          z-index: 1;
          width:auto;
          position: relative;
            overflow: visible;
          background:rgba(246,248,251,1);
          li{
            min-width: 100px;
            height: 60px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            font-size:15px;
            z-index: 2;
            position: relative;
            .s-wrap{
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              text-align: center;
              align-items: center;
              .name,.day{
                min-width: 30px;
                color:rgba(1,1,1,1);
                line-height: 22px;
              }
              .dec{
                min-width: 30px;
                height:20px;
                font-size:13px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(153,153,153,1);
                line-height:20px;
              }
            }
            
          }
          
          li.active{
            .s-wrap{
              width: 70px;
              height: 70px;
              position: absolute;
              top:-5px;
              left:15px;
              z-index: 3;
              color:rgba(255,255,255,1);
              background:rgba(225,11,34,1);
              box-shadow:0px 6px 10px 0px rgba(134,104,104,0.15);
              .name,.day,.dec{
                color:rgba(255,255,255,1);
              }
              
            }
            }
        }
        }
        
    }
    .n-people{
      .s-wrap{
        font-size:19px;
      }
    }
    .time-wrap{
      .time{
        display: flex;
        .left,.right{
          width:85px;
          height:118px;
          background:rgba(246,248,251,1);
          position: relative;
          display: flex;
            align-items:center;
          justify-content: center;
          font-size:50px;
          font-family:Futura-Medium;
          font-weight:500;
          color:rgba(26,26,26,1);
          .transverse{
            position: absolute;
            width:80px;
            height:1px;
            background:rgba(233,233,233,1);
            top:50%;
            left:4px;
          }
          .t{
            position: absolute;
          }
        }
        .center{
          width: 20px;
          height:118px;
          display: flex;
          flex-direction: column;
            align-items:center;
          justify-content: center;
          &>div{
            width:7px;
            height:7px;
            margin: 8px 0;
            background:rgba(153,153,153,1);
          }
        }
      }
    }
    .submit{
      position:absolute;
      width:61px;
      height:61px;
      right:40px;
      bottom:20px;
      background-color:$theme-highlight;
      box-shadow:0px 6px 10px 0px rgba(134,104,104,0.15);
      .icon-wrap{
        width: 30px;
                height: 26px;
                position:absolute;
                right:10px;
                top:15px;
        .icon-right,.icon-minus{
                width: 30px;
                height: 26px;
                display:inline-block;
                position: relative;  /*方便相对于父元素进行定位*/
              }
              .icon-right::before,
              .icon-right::after,
              .icon-minus::before,
              .icon-minus::after{
                background:#fff;
                content: "";
                position: absolute;  /*方便进行定位*/
                height: 15px;
                width: 2px;
                top: 7px;
                right: 14px;  /*设置top和right使图像在20*20框中居中*/
              }
              .icon-minus::before,
              .icon-minus::after{
                height: 21px;
                top: 4px;
                right: 16px;  /*设置top和right使图像在20*20框中居中*/
              }
              .icon-right::before{
                  transform: rotate(-45deg);  /*进行旋转*/
                  top:2px;
              }
              .icon-right::after{
                  top:12px;
                  transform: rotate(45deg);
              }
          .icon-minus::before{
            transform: rotate(90deg);  /*进行旋转*/
        }
        .icon-minus::after{
            transform: rotate(-90deg);
        }
      }
      .icon-minus-wrap{
                right:14px;
      }
    }
    }
</style>
