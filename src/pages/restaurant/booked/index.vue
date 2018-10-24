<template>
  <div class="wrap">
  	<div class="head">
  		<div class="success">
        <span v-if="bookedWait">等待支付</span>
        <span v-if="bookedSuccess">预订成功</span>
  			<span v-if="bookedFail">取消支付</span>
  		</div>
  		<div class="text">
        <div v-if="bookedWait">
          <span>请在15分钟内完成支付，超时后你需要重新排队剩余时间</span>
          <span>{{bookedInfo.remainingTime}}</span>
        </div>
        <div v-if="bookedSuccess">
          <span>您的餐位已被确定，请你按时到店就餐，最晚为您保留至</span>
          <span>{{bookedInfo.deadline}}</span>
        </div>
        <div v-if="bookedFail">
          <span>您已经成功取消餐位预订</span>
        </div>
  		</div>
  	</div>
  	<div class="content">
  		<div class="image-wrap">
  			<img :src="bookedInfo.image" alt="">
  		</div>
  		<div class="info-wrap">
  			<div class="name">
  				<div>
  					<span>{{bookedInfo.name}}</span>
  				</div>
  				<div class="icon-wrap">
            <i></i>
          </div>
  			</div>
  			<div class="info">
  				<div>
  					<span>{{bookedInfo.day}}</span>
  					<span>{{bookedInfo.week}}</span>
  					<span>{{bookedInfo.time}}</span>
  				</div>
  				<div class="adress">
  					<span>{{bookedInfo.adress}}</span>
            <div class="icon-wrap">
              <i class="icon-triangle"></i>
              <i class="icon-triangle-shadow"></i>
            </div>
  				</div>
  				<div>
  					<span>{{bookedInfo.numberPeople}}<span>人</span></span>
  					<span>{{bookedInfo.seat}}<span>（座位号）</span></span>
  				</div>
  			</div>
  		</div>
  	</div>
  	<div class="nav">
      <ul>
        <li class="tool">
          <div>
            <div class="icon-wrap icon-cancel"><i></i></div>
            <div>取消</div>
          </div>
          <div  v-show="bookedSuccess">
            <div class="icon-wrap icon-feedback"><i></i></div>
            <div>留言</div>
          </div>
          <div>
            <div class="icon-wrap  icon-share"><i></i></div>
            <div>分享</div>
          </div>
        </li>
        <li class="ordering-wrap" v-if="bookedWait">
          <div class="ordering" @click="pay">
            支付
          </div>
        </li>
        <li class="ordering-wrap" v-if="bookedSuccess">
          <div class="ordering" @click="bindToMenu">
            点餐
          </div>
        </li>
      </ul>
       <ul v-if="bookedFail">
        <li class="align">再次预定</li>
      </ul>
  	</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    	bookedInfo:{
        remainingTime:'13:52',
    		deadline:'20:00',
    		image:'http://cdn.awbchina.com/wximage/timg.png',
    		name:"A Boluza 阿波罗意大利餐厅",
    		day:"2月19日",
    		week:"周三 ",
    		time:'19:30',
    		adress:"蜀汉大道82号奥克斯广场5楼1809号",
    		numberPeople:"5",
    		seat:"A8",
    	},
      bookedFail:0,
      bookedSuccess:0,
      bookedWait:1,
    }
  },

  components: {
  },

  methods: {
    bindToMenu(){
      wx.navigateTo({
        url: '/pages/restaurant/menu/main'
      }) 
    },
    pay(){
      this.bookedSuccess = 1;
      this.bookedFail = 0;
      this.bookedWait = 0;
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
    height:100%;
    background:rgba(242,244,248,1);
  	.head{
  		background-color: $theme-color;
  		color: #fff;
  		padding:40px;
      min-height:120px;
  		.success{
			font-size:48px;
			font-family:PingFangSC-Medium;
			font-weight:500;
			color:rgba(253,253,253,1);
			margin-bottom:20px;
  		}
  		.text{
  			padding-right:40px;
  			font-size:15px;
  			font-family:PingFangSC-Regular;
  			font-weight:400;
  			color:rgba(253,253,253,1);
  			line-height:24px;
  		}
  	}
  	.content{
  		background:rgba(242,244,248,1);
  		padding: 15px 10px;
  		.image-wrap{
  			z-index: 99;
			height: 218px;
			margin: auto 15px;
			overflow: hidden;
			img{
				display: block;
  				z-index: 98;
				width: 100%;
			}
  		}
  		.info-wrap{
  			z-index: 100;
  			margin-top:-110px;
			height:190px;
			background:rgba(255,255,255,1);
			box-shadow:0px 2px 11px 0px rgba(0,0,0,0.11);
			.name{
				font-size:18px;
				font-family:PingFangSC-Medium;
				font-weight:500;
				color:rgba(26,26,26,1);
				padding: 20px 20px 10px 20px;
				border-bottom: 1px solid rgba(233,233,233,1);
				position: relative;
        display:flex;
        justify-content:space-between;
        align-items:center;
				.icon-wrap{
          width:24px;
          height:24px;
          background-image:url($image-url + 'images/restaurant/booked/ShapeCopy@2x.png');
          background-size:cover;
        }
			}
			.info{
				padding: 20px;
				font-family:PingFangSC-Regular;
				font-weight:400;
				font-size: 15px;
				color:rgba(153,153,153,1);
				&>div{
					margin-bottom: 10px;
					&>span{
						padding-right: 10px;
					}
				}
        .adress{
          display:flex;
          justify-content:space-between;
          align-items:center;
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
              border-color:transparent transparent transparent $theme-color;
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
              border-color:transparent transparent transparent rgba(233,233,233,1);
            }
          }
        }
        
			}
  		}
  	}
  	.nav{
  		background:rgba(242,244,248,1);
  		ul{
  			padding: 0 10px 10px 10px;
  			display: flex;
  			li{
  				display: flex;
  				justify-content: center;
  				.ordering{
  					width:105px;
					height:50px;
					font-size:18px;
					font-family:PingFangSC-Medium;
					font-weight:500;
					color:rgba(255,255,255,1);
					text-align: center;
					line-height:50px;
					background:$theme-highlight;
					box-shadow:0px 16px 34px 0px rgba(0,0,0,0.16);
  				}
  			}
  			li.tool{
  				flex: 1;
  				justify-content: space-around;
  				align-items: center;
  				&>div{
  					text-align: center;
  					font-size:14px;
  					font-family:PingFangSC-Regular;
  					font-weight:400;
  					color:rgba(153,153,153,1);
  					.icon-wrap{
  						width: 30px ;
  						height: 25px ;
              box-shadow:0px 8px 17px 0px rgba(0,0,0,0.16);
              background-size:cover;
              margin-bottom:5px;
  					}
            .icon-cancel{
              background-image:url($image-url + 'images/restaurant/booked/icon_btn_cancel_order@2x.png');
            }
            .icon-feedback{
              background-image:url($image-url + 'images/restaurant/booked/icon_btn_message@2x.png');
            }
            .icon-share{
              background-image:url($image-url + 'images/restaurant/booked/icon_btn_share@2x.png');
            }
  				}
  			}
  			li.ordering-wrap{
  				padding: 0 20px;
  			}
        li.align{
          width:100%;
          height:50px;
          line-height:50px;
          background:rgba(225,11,34,1);
          box-shadow:0px 16px 34px 0px rgba(0,0,0,0.16);
          font-size:17px;
          font-family:PingFangSC-Medium;
          font-weight:500;
          color:rgba(255,255,255,1);
        }
  		}
  	}
  }
</style>
