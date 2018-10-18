<template>
  <div class="recommend">
  	<div class="head">
      <div class="image-wrap">
        <img src="" alt="">
      </div>
      <div class="image-wrap">
        <img src="" alt="">
      </div>
    </div>
    <div class="content">
	    <div class="title">
	    	Ada已帮你点了几个本店特色菜，您看可以吗？
	    </div>
     	<div v-for="(rec, recIndex) in recommenData" :key="recIndex" class="recommend-warp">
            <div class="left">
              <div class="info" @click.stop="bindMenuList(recIndex)">
                <div class="image-wrap">
                  <img :src="rec.image" alt="">
                </div>
                <div class="name">
                  <span>{{rec.name}}</span>
                </div>
                <div class="price-wrap">
                  <span>￥</span><span class="price">{{rec.price}}</span>
                </div>
              </div>
              <div class="zero" v-if="rec.pieces === 0"></div>
            </div>
            <div class="right">
              <input-num :pieces="rec.pieces"  @bindInputNum="bindInputNum(recIndex)"></input-num>
            </div>
      	</div>
    </div>
    <div class="nav-wrap">
      <div class="left">
        <div class="btn">
        	我都不要
        </div>
      </div>
      <div class="right">
        <div class="btn" @click="bindToMeal">
        	好的谢谢
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
      recommenData:[
      	{
          id:1,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'火锅牛排',
          price:'78',
          pieces:0
        },
        {
          id:2,
          image:'http://cdn.awbchina.com/wximage/timg.png',
          name:'火锅牛排',
          price:'78',
          pieces:4
        }
      ]
    }
  },

  components: {
    InputNum
  },

  methods: {
    bindMenuList(recIndex){
      
      this.recommenData[recIndex].pieces ++ ;
    },
    bindInputNum(recIndex){
      if (this.recommenData[recIndex].pieces > 0) {
        this.recommenData[recIndex].pieces -- ;
      }else{
        this.recommenData[recIndex].pieces ++ ;
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
  .recommend{
    padding:20px 20px 80px 20px;
    background:rgba(242,242,242,1);
    box-sizing: border-box;
    min-height:100%;
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
    .title{
      	width:100%;
		height:60px;
		line-height:60px;
		background:rgba(26,26,26,1);
		color:rgba(255,255,255,1);
		box-sizing:border-box;
		font-size:15px;
		text-align:center;
		font-family:PingFangSC-Medium;
		font-weight:500;
		border-radius:0px 10px 10px 10px;
		box-shadow:0px 8px 19px 0px rgba(129,140,166,0.15);
      	margin-bottom:20px;
  	}
    .recommend-warp{
      display:flex;
      align-items:center;
      margin-bottom:10px;
      .left{
        padding-right:10px;
        position:relative;
        .info{
          box-sizing: border-box;
          padding:0 20px;
          display:flex;
          align-items:center;
          width:236px;
          height:60px;
          background:rgba(255,255,255,1);
          box-shadow:0px 4px 10px 0px rgba(129,140,166,0.15);
          border-radius:0px 10px 10px 10px;
          .name{
            flex:1;
            padding-left:20px;
            font-size:16px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(26,26,26,1);
          }
          .price-wrap{
            font-size:12px;
            color:$theme-color;
            font-weight:500;
            text-align:center;
            .price{
              font-family:PingFangSC-Medium;
              font-size:13px;
            }
          }
        }
        .zero{
          position:absolute;
          left:-8px;
          top:30px;
          width:256px;
          height:2px;
          background:rgba(225,11,34,1);
          box-shadow:0px 3px 5px 0px rgba(177,124,130,0.8);
        }
      }
      .right{
        height:60px;
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      .image-wrap{
	      width:40px;
	      height:40px;
	      border-radius:50%;
	      overflow: hidden;
	      img{
	        width:100%;
	        height:100%;
	      }
	    }
    }
    
    .nav-wrap{
      border-top: 1px solid rgba(246,248,251,1);
      background-color:#fff;
      position:fixed;
      width:100%;
      height:60px;
      bottom:0;
      left:0;
      background:linear-gradient(360deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0.8) 100%);
      box-shadow:0px 1px 0px 0px rgba(0,0,0,0.2);
      display:flex;
      .left,.right{
        flex:1;
        display:flex;
        align-items:center;
        justify-content:center;
     	.btn{
     		text-align:center;
	      	width:150px;
	      	font-size:17px;
			font-family:PingFangSC-Medium;
			font-weight:500;
			color:rgba(255,255,255,1);
			height:45px;
			line-height:45px;
			background:rgba(225,11,34,1);
      	}
      }
      .left{
      	.btn{
      		background-color:#fff;
      		color:rgba(43,43,43,1);
      	}
      }
    }
  }
</style>
