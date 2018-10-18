<template>
  <div class="wrap">
    <div class="content n-people">
      <div class="title">
        用餐人数
      </div>
      <div class="tab-center">
        <ul>
          <li v-for="(num, numIndex) in numPeople" :key="numIndex" :class="{'active':numIndex == curNumIndex}">
            <div class="s-wrap" @click="bindNumPeople(numIndex)">
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
            <div class="s-wrap" @click="bindSeatList(seIndex)">
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
            <div class="s-wrap" @click="bindDinnerTime(dinIndex)">
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
          <div class="left" data-type ="h" @touchstart="bindTouchstart" @touchend="bindTouchEnd">
            <div class="transverse"></div>
            <div class="t">{{hourText}}</div>
          </div>
          <div class="center">
            <div></div>
            <div></div>
          </div>
          <div class="right" data-type ="m" @touchstart="bindTouchstart" @touchend="bindTouchEnd">
            <div class="transverse"></div>
            <div class="t">{{minText}}</div>
            <div class="pm-am">
              <span>{{PMorAM}}</span>
            </div>
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
      ],
       touchDotX: 0,
      touchDotY: 0,
      interval: null,
      time: 0,
      hour:9,
      min:30
    }
  },

  components: {
    
  },
  computed: {
    hourText(){
      let t = this.hour ;
      if (t > 12) {
        t = t - 12 ; 
      }
      if (t == 0) {
        t = 12
      }
      if (t < 10) {
        return '0' + t;
      }else{
        return t;
      }
    },
    minText(){
      let t = this.min ;
      if (t < 10) {
        return '0' + t;
      }else{
        return t;
      }
    },
    PMorAM(){
      let t = this.hour ;
      if (t < 12) {
        return 'AM';
      }else{
        return 'PM';
      }    
    }
  },
  methods: {
    bindToBooked(){
      wx.navigateTo({
        url: '/pages/restaurant/booked/main'
      }) 
    },
    bindTouchstart: function(e) {
      let _this = this;
      e = e.mp;
      _this.touchDotX = e.touches[0].pageX; // 获取触摸时的原点
      _this.touchDotY = e.touches[0].pageY;
      // 使用js计时器记录时间    
      _this.interval = setInterval(function() {
        _this.time++;
      }, 100);
    },
    // 触摸结束事件
    bindTouchEnd: function(e) {
      let _this = this;
      e = e.mp;
      let type = e.currentTarget.dataset.type;
      let touchMoveX = e.changedTouches[0].pageX;
      let touchMoveY = e.changedTouches[0].pageY;
      let tmX = touchMoveX - _this.touchDotX;
      let tmY = touchMoveY - _this.touchDotY;
      if (_this.time < 20) {
        let absX = Math.abs(tmX);
        let absY = Math.abs(tmY);
        // if (absX > 2 * absY) {
        //   if (tmX<0){
        //     console.log("左滑=====")
        //   }else{
        //     console.log("右滑=====")
        //   }
        // }
        if (absY > absX * 2) {
          if ( tmY<0) {
            //上滑
            if (type == 'h') {
              _this.hourSubtract()
            }else if (type == 'm'){
              _this.minSubtract()
            }
          }else{
            //下滑
            if (type == 'h') {
              _this.hourAdd()
            }else if (type == 'm'){
              _this.minAdd()
            }
          }
        }
      }
      clearInterval(_this.interval); // 清除setInterval
      _this.time = 0;
    },
    hourAdd(){
      if (this.hour < 23 && this.hour >= 0) {
        this.hour ++
      }else if(this.hour == 23) {
        this.hour = 0
      }
    },
    hourSubtract(){
      if (this.hour <= 23 && this.hour > 0) {
        this.hour --
      }else if(this.hour == 0) {
        this.hour = 23
      }
    },
    minAdd(){
      let min = this.min;
      if (this.min < 60 && this.min >= 0) {
        if ( min >= 45 ) {
          this.min = 60
        }else{
          this.min = min + 15;
        }
      }
    },
    minSubtract(){
      let min = this.min;
      if (this.min <= 60 && this.min > 0) {
        if ( min <= 15 ) {
          this.min = 0
        }else{
          this.min = min - 15
        }
      }
    },
    bindNumPeople(index){
      this.curNumIndex = index;
    },
    bindSeatList(index){
      this.curSeIndex = index;
    },
    bindDinnerTime(index){
      this.curDinIndex = index;
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
          overflow: hidden;
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
          .pm-am{
            position:absolute;
            background-color:#fff;
            box-sizing: border-box;
            width:30px;
            height:30px;
            line-height:30px;
            font-size:15px;
            text-align:center;
            font-family:PingFangSC-Semibold;
            font-weight:600;
            color:rgba(102,102,102,1);
            border-radius:50% 0 0 0;
            bottom:0;
            right:0;
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
