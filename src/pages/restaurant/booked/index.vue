<template>
  <div class="wrap">
  	<div class="head">
  		<div class="success">
  			<span>预订成功</span>
  		</div>
  		<div class="text">
  			<span>您的餐位已被确定，请你按时到店就餐，最晚为您保留至</span>
  			<span>{{bookedInfo.deadline}}</span>
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
  				<div>
  					<span>{{bookedInfo.adress}}</span>
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
  					<div class="icon-wrap"><i></i></div>
  					<div>取消</div>
  				</div>
  				<div>
  					<div class="icon-wrap"><i></i></div>
  					<div>留言</div>
  				</div>
  				<div>
  					<div class="icon-wrap"><i></i></div>
  					<div>分享</div>
  				</div>
  			</li>
  			<li class="ordering-wrap">
  				<div class="ordering">
  					点餐
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
    	bookedInfo:{
    		deadline:'20:00',
    		image:'http://cdn.awbchina.com/wximage/timg.png',
    		name:"A Boluza 阿波罗意大利餐厅",
    		day:"2月19日",
    		week:"周三 ",
    		time:'19:30',
    		adress:"蜀汉大道82号奥克斯广场5楼1809号",
    		numberPeople:"5",
    		seat:"A8",
    	}
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
  .wrap{
  	.head{
  		background-color: $theme-color;
  		color: #fff;
  		padding:40px;
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
				.icon-wrap{
					width:24px;
					height: 24px;
					position: absolute;
					right: 20px;
					background-color: $theme-highlight;
					top:20px;
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
  						width: 34px ;
  						height: 34px ;
  						background-color: $theme-color;
  					}
  				}
  			}
  			li.ordering-wrap{
  				padding: 0 20px;
  			}
  		}
  	}
  }
</style>
