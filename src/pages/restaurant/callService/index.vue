<template>
  <div class="call">
    <div class="head">
      <div class="image-wrap">
        <img src="" alt="">
      </div>
      <div class="image-wrap">
        <img src="" alt="">
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
          <span>您也可以</span><span class="click-me">点我</span><span>直接呼叫服务员</span>
        </li>
      </ul>
    </div>
    <div class="vioce">
      <div class="image-wrap">
        <img src="" alt="">
      </div>
    </div>
    <div class="tip">
      <div class="image-wrap">
        <img src="" alt="">
      </div>
    </div>
    <div class="vioce-tip" v-show="vioceTipShow">
      <div class="con">
        <div class="title">
          您可能需要：
        </div>
        <ul>
          <li v-for="(v,vIndex) in vioceTip"  :key="vIndex">{{v}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      vioceTip:['我需要增加一副碗筷','我需要一包纸巾','我需要加水','我需要加辣椒'],
      vioceTipShow:0
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
    .head{
      display: flex;
      margin-bottom: 40px;
      .image-wrap{
        width:50px;
        height:50px;
        background-color: #fff;
        margin-right: 10px;
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
          text-decoration:underline ;
          .click-me{
            background: $theme-highlight;
            padding:10px;
            text-align:center;
          }
        }
      }
    }
    .vioce{
      background-color:$theme-highlight;
      position: fixed;
      bottom:40px;
      width: 72px;
      height: 72px;
      border-radius:50%;
      left: 50%;
      margin-left: -36px;
    }
    .tip{
      background:#fff;
      position: fixed;
      left:30px;
      bottom: 20px;
      width: 25px;
      height: 25px;
      border-radius:50%;
    }
    .vioce-tip{
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
