<template>
  <div class="feedback">
    <div class="head">
      <div class="title">留言</div>
      <div class="dec">
        请写下你想告诉我的信息
      </div>
    </div>
    <div class="content">
      <ul>
        <li class="textarea-wrap">
          <textarea placeholder="给餐厅留言备注，我们会尽力满足您" v-model="feedbackText"></textarea>
          <div class="tip"> <span>{{feedbackTextLen}}</span><span>/</span><span>{{contentMaxLen}}</span>  </div>
        </li>
        <li class="info">
          <div v-for="(fd, fdIndex) in feedbackTips" :key="fdIndex" class="t">
            {{fd}}
          </div>
        </li>
        <li class="map">
          <div class="icon-wrap">
            <i></i>
          </div>
        </li>
      </ul>
      
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      feedbackTips:['儿童座椅','儿童座椅','生日'],
      feedbackText:'',
      contentMaxLen:30
    }
  },

  components: {

  },
  computed: {
    feedbackTextLen () {
      return this.feedbackText.length;
    }
  },
  watch: {
    feedbackText: function (val) {
      if ( this.feedbackText.length > this.contentMaxLen) {
        this.feedbackText =  String(val).slice(0,this.contentMaxLen)
      }
    }
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
  .feedback{
    .head{
      background-color:$theme-color;
      padding: 30px 30px 60px 30px;
      .title{
        font-size:48px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(253,253,253,1);
      }
      .dec{
        font-size:15px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(253,253,253,1);
        margin-top:20px;
      }
    }
    .content{
      padding:20px 10px;
      box-sizing: border-box;
      width:100%;
      ul{
        width:100%;
        height:332px;
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 11px 0px rgba(0,0,0,0.11);
        position:relative;
        li.textarea-wrap{
          height:200px;
          width:100%;
          border-bottom:1px solid rgba(153,153,153,1);
          padding:30px 60px ;
          box-sizing: border-box;
          position:relative;
          textarea{
            font-size:17px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(153,153,153,1);
            width:100%;
            height:100%;
          }
          .tip{
            position:absolute;
            font-size:15px;
            right:60px;
            color:rgba(153,153,153,1);
            bottom:30px;
          }
        }
        li.info{
          display:flex;
          padding:40px;
          .t{
            font-size:14px;
            margin-right:20px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(26,26,26,1);
            width:80px;
            height:30px;
            line-height:30px;
            text-align:center;
            border:1px solid rgba(26,26,26,1);
          }
        }
        .map{
          position:absolute;
          overflow:hidden;
          border-radius:50%;
          right:20px;
          bottom:-35px;
          box-shadow:0px 2px 11px 0px rgba(0,0,0,0.11);
          .icon-wrap{
            width:75px;
            height:75px;
            border-radius:50%;
            background-size:cover;
            background-image:url($image-url + 'images/restaurant/feedback/ButtonPrimaryCircle@2x.png');
          }
        }
      }
      
    }
  }
</style>
