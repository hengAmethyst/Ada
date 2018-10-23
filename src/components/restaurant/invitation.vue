<template>
	<div v-if="invitationShow">
	  <div class="invitation">
	  	<div class="invit-wrap">
			<div class="titile">
				<span>诚邀您一起用餐</span>
				<div class="user-avatar">
					<div class="avatar-wrap">
						<img src="http://insurance.awbchina.com/ada/images/restaurant/invitation/Page1@2x.png" alt="">
					</div>
				</div>
			</div>
			<div class="content">
				<ul class="info-wrap">
					<li class="info">
						<div class="avatar">
							<div class="avatar-wrap">
								<img src="http://cdn.awbchina.com/wximage/default.png" alt="">
							</div>
						</div>
						<div class="name-wrap">
							<div class="name">隐士电影主题餐厅(双楠店)</div>
							<div class="icon-wrap">
					        	<i></i>
					      	</div>
						</div>
					</li>
					<li class="seat">
						<span>5人</span> <span>大厅A8 （座位号）</span>
					</li>
					<li class="time">
						<span>2月19日 周三 19:30</span>
					</li>
					<li class="address-wrap">
						<div class="address">蜀汉大道82号奥克斯广场5楼</div>
						<div class="icon-wrap">
				        	<i></i>
				      	</div>
					</li>
				</ul>
				<div class="firends">
					<div v-if="firends">
						<div class="t">您可以看有想吃的，先点上吧</div>
						<ul>
			              <li v-for="(fri, friIndex) in friendsList" :key="friIndex">
			                <div class="image-wrap">
			                  <img :src="fri.image" alt="">
			                </div>
			                <div>
			                  <span>{{fri.name}}</span>
			                </div>
			              </li>
			            </ul>
					</div>
					<div v-else>
						<span class="t">您可以看有想吃的，先点上吧</span>
					</div>
				</div>
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
  	props: ['invitationShow'],
  	data () {
    	return {
    		firends:1,
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
	padding-top:10px;
	box-sizing:border-box;
	.invit-wrap{
		width:100%;
		background-color:#fff;
		box-sizing:border-box;
		height: 510px;
		padding:30px;
		position:relative;
		.titile{
			font-size:19px;
			font-family:PingFangSC-Medium;
			font-weight:500;
			color:rgba(1,1,1,1);
			text-align:center;
			padding-bottom:12px;
			border-bottom:1px solid rgba(153,153,153,1);
			position:relative;
			.user-avatar{
				position:absolute;
				right:0;
				bottom:5px;
				.avatar-wrap{
					width:35px;
					height:35px;
					overflow: hidden;
					img{
						width:100%;
						height:100%;
					}
				}
			}
		}
		.content{
			ul.info-wrap{
				li{
					text-align:center;
					font-size:15px;
					padding-top:12px;
					padding-bottom:12px;
					border-bottom:1px solid rgba(233,233,233,1);
					padding-right:20px;
					span{
						padding-right:8px;
					}
				}
				li.info{
					.avatar{
						display:flex;
						justify-content:center;
						margin-bottom:12px;
						.avatar-wrap{
							width:60px;
							height:60px;
							background:rgba(255,255,255,1);
							border:1px solid rgba(233,233,233,1);
							border-radius:50%;
							overflow: hidden;
							img{
								width:100%;
								height:100%;
							}
						}
					}
					.name-wrap{
						font-size:17px;
						font-family:PingFangSC-Medium;
						font-weight:500;
						display:flex;
			          	justify-content:space-between;
			          	align-items:center;
						.name{
							flex:1;
						}
						.icon-wrap{
  							width: 10px ;
  							height: 16px ;
			              	background-size:cover;
          					background-image:url($image-url + 'images/restaurant/invitation/CombinedShape@2x.png');
	  					}
					}
				}
				li.address-wrap{
					display:flex;
		          	justify-content:space-between;
		          	align-items:center;
		          	.address{
						flex:1;
		          	}
		          	.icon-wrap{
						width: 10px ;
						height: 16px ;
		              	background-size:cover;
      					background-image:url($image-url + 'images/restaurant/invitation/CombinedShape@2x.png');
  					}
				}
			}
			.firends{
				text-align:center;
				padding-top:12px;
				padding-bottom:12px;
				.t{
					font-size:13px;
					color:rgba(153,153,153,1);
				}
				ul{
	              display:flex;
				  padding-top:12px;
	              justify-content:center;
	              li{
	                margin-left: 12px;
	                font-size:12px;
	                width:auto;
	                text-align: center;
	                .image-wrap{
	                  width:40px;
	                  height:40px;
	                  border-radius: 50%;
	                  background-color: $theme-gray;
	                  overflow: hidden;
	                  img{
						width:100%;
						height:100%;
					}
	                }
	              }
	            }
			}
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
				background-size:cover;
				background-image:url($image-url + 'images/restaurant/invitation/Group7@2x.png');
			}
		}
	}

  }
</style>
