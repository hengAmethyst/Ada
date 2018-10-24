<template>
  <div class="call">
    <div class="head">
     <div class="icon-wrap icon-avatar">
        <i></i>
      </div>
      <div class="icon-wrap icon-name">
        <i></i>
      </div>
    </div>
    <div class="content">
      <ul>
        <li class="service1">
          <span>告诉我您的需求，Ada帮你转给服务</span>
        </li>
        <li class="service2">
          <span>轻拍一下Ada，呼叫服务员</span>
        </li>
        <li class="service3">
          <span>
            <span>您也可以</span><span class="click-me"><span>点我</span></span><span>直接呼叫服务员</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="icon-voice-wrap">
      <div class="icon-voice-shadow">
        <div class="icon-voice-shadow-poor">
          <div class="voice">
            <div class="icon-wrap">
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    <div class="tip">
      <div class="icon-wrap">
        <i></i>
      </div>
    </div>
    <div class="voice-pop" v-show="voicePopShow">
      <div class="con">
        <div class="title">
          您可能需要：
        </div>
        <ul>
          <li v-for="(v,vIndex) in voicePop"  :key="vIndex">{{v}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      voicePop:['我需要增加一副碗筷','我需要一包纸巾','我需要加水','我需要加辣椒'],
      voicePopShow:0
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
  .call{
    height:100%;
    width:100%;
    background-color: $theme-color;
    box-sizing: border-box;
    padding:20px;
    position:relative;
    overflow-y: hidden;
    .head{
      display: flex;
      margin-bottom: 40px;
      .icon-wrap{
        width:50px;
        height:50px;
        margin-right: 20px;
        background-size:cover;
      }
      .icon-avatar{
        background-image:url($image-url + 'images/restaurant/details/avatar@2x.png');
      }
      .icon-name{
        width:80px;
        background-size:100%;
        background-repeat:no-repeat;
        background-position:center center;
        background-image:url($image-url + 'images/restaurant/voice/ada@2x.png');
      }
    }
    .content{
      ul{
        li{
          width:100%;
          height:60px;
          line-height:60px;
          box-shadow:0px 8px 19px 0px rgba(129,140,166,0.15);
          border-radius:0px 10px 10px 10px;
          margin-bottom:10px;
          font-size:18px;
          color:rgba(255,255,255,1);
          border:1px solid rgba(233,233,233,1);
          text-align: center;
          letter-spacing: 1.5px;
        }
        li.service1{
          background:rgba(246,248,251,1);
          color:rgba(1,1,1,1);
        }
        li.service3{
          &>span{
            border-bottom:1px solid #fff;
          }
          border-bottom:1px solid #fff;
          .click-me{
            background: $theme-highlight;
            padding:10px 0;
            text-align:center;
            span{
              padding:0 10px;
              border-bottom:1px solid #fff;
            }
          }
        }
      }
    }
    
    .icon-voice-wrap{
      width:100%;
      display:flex;
      justify-content:center;
      position: absolute;
      bottom: -72px;
      left:0;
      .icon-voice-shadow{
        border-radius:50%;
        width:290px;
        height:290px;
        background:rgba(248,79,68,0.1);
        box-shadow:0px 6px 20px 0px rgba(0,0,0,0.5);
        display:flex;
        justify-content:center;
        align-items:center;
        .icon-voice-shadow-poor{
          border-radius:50%;
          width:190px;
          height:190px;
          background:rgba(248,79,68,0.2);
          box-shadow:0px 6px 20px 0px rgba(0,0,0,0.5);
          display:flex;
          justify-content:center;
          align-items:center;
          .voice{
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
    }
    
    .tip{
      position: fixed;
      left:20px;
      bottom: 20px;
      .icon-wrap{
        border-radius:50%;
        width: 25px;
        height: 25px;
        background:#fff;
        background-size:cover;
        background-image:url($image-url + 'images/restaurant/voice/question@2x.png');
      }
    }
    .voice-pop{
      position:fixed;
      background:rgba(0,0,0,0.9);
      top:0;
      left:0;
      bottom:0;
      right:0;
      .con{
        width:100%;
        height:100%;
        padding:40px;
        box-sizing:border-box;
        .title{
        font-size:30px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        }
        ul{
          margin-top:40px;
          li{
            text-align:center;
            padding:30px;
            font-size:18px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
          }
        }
      }
    }
  }
</style>
