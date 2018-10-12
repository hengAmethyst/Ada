<template>
	<div v-if="welcomeShow">
	  <div class="invitation">
	  	<div class="invit-wrap">
		  	<div class="titile">
		  		欢迎光临
		  	</div>
		  	<div>
		  		<ul>
		  			<li class="name">
		  				蜀都飘香火锅酒楼
		  			</li>
		  			<li class="t">
		  				<span v-if="firends">您和您的朋友已经提前点好了菜品</span>
		  			</li>
		  		</ul>
		  	</div>
			<div class="btn">
				我也要先点餐
			</div>	 
			<div class="close">
		  		<div class="icon-wrap">
		  			<i></i>
		  		</div>
		  	</div> 		
	  	</div>
	  </div>
  </div>
</template>

<script>

export default {
  	props: ['welcomeShow'],
  	data () {
    	return {
    		firends:0,
	    	friendsList:[
		        {
		          image:'http://cdn.awbchina.com/wximage/default.png',
		          name:'Trista'
		        },
		        {
		          image:'http://cdn.awbchina.com/wximage/default.png',
		          name:'Kity'
		        },
		        {
		          image:'http://cdn.awbchina.com/wximage/default.png',
		          name:'大寻'
		        },
		        {
		          image:'http://cdn.awbchina.com/wximage/default.png',
		          name:'黄小波'
		        },
	      	]
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
  .invitation{
  	position:fixed;
  	top:0;
  	left:0;
  	bottom:0;
  	right:0;
	z-index:98;
	background:rgba(0,0,0,0.8);
	display:flex;
	justify-content:center;
	padding-left:20px;
	padding-right:20px;
	padding-top:80px;
	box-sizing:border-box;
	.invit-wrap{
		width:100%;
		background-color:#fff;
		box-sizing:border-box;
		height: 290px;
		padding:30px;
		padding-top:60px;
		position:relative;
		text-align:center;
		.titile{
			font-size:34px;
			font-family:PingFangSC-Regular;
			font-weight:400;
			color:rgba(1,1,1,1);
			margin-bottom:20px;
		}
		.name{
			font-size:17px;
			font-family:PingFangSC-Regular;
			font-weight:400;
			color:rgba(1,1,1,1);
			margin-bottom:10px;
		}
		.t{
			font-size:17px;
			font-family:PingFangSC-Regular;
			font-weight:400;
			height:20px;
			color:rgba(153,153,153,1);
			margin-bottom:40px;
		}
		.btn{
			width:100%;
			height:50px;
			margin-top:12px;
			line-height:50px;
			text-align:center;
			background:rgba(225,11,34,1);
			font-size:19px;
			font-family:PingFangSC-Medium;
			font-weight:500;
			color:rgba(255,255,255,1);
		}
		.close{
			position:absolute;
			width:50px;
			height:50px;
			background:rgba(255,255,255,1);
			opacity:0.6;
			z-index:99;
			border-radius:50%;
			left:50%;
			margin-left:-25px;
			bottom:-65px;
			.icon-wrap{
				width:100%;
				height:100%;
				background-size:100% 100%;
			}
		}
	}

  }
</style>
