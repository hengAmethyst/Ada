<template>
  <div class="screen">
  	<div class="tab">
  		<div class="t-wrap">
  			<div class="t">
  				<span>地区</span>
  				<div class="icon-wrap">
  					<i></i>
  				</div>  				
  			</div>
  			<div class="t">
  				<span>美食</span>
  				<div class="icon-wrap">
  					<i></i>
  				</div>
  			</div>
  			<div class="t">
  				<span>排序</span>
  				<div class="icon-wrap">
  					<i></i>
  				</div>
  			</div>
  		</div>
  	</div>
  	<!-- <div class="option">
		<ul>
			<li v-for="(op, opIndex) in options" :key="opIndex">
				<span>{{op.name}}</span>
			</li>
		</ul>
	</div> -->
  </div>
</template>

<script>

export default {
  data () {
    return {
    	options:[
    		{
    			name:'全部美食'
    		},
    		{
    			name:'火锅'
    		},
    		{
    			name:'日本料理'
    		},
    		{
    			name:'韩国料理'
    		},
    		{
    			name:'西餐'
    		},
    		{
    			name:'川菜'
    		}
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
  .screen{
  	width:100%;
	position:relative;
  	.t-wrap{
  		display:flex;
  		.t{
			font-size:15px;
			color:rgba(253,253,253,1);
			font-family:PingFangSC-Regular;
			font-weight:400;
			padding-right:20px;
			height:20px;
			line-height:20px;
			display:flex;
			align-items:center;
			.icon-wrap{
				width:20px;
				height:10px;
				background-color:#fff;
				margin-left:10px;
			}
			
  		}
  	}
  	.option{
		position:fixed;
		width:100%;
		background-color:#fff;
		z-index:99;
		left:0;
		right:0;
		background:rgba(255,255,255,1);
		box-shadow:0px 4px 8px 0px rgba(0,0,0,0.1);
		ul{
			padding: 10px 20px;
			li{
				width:100%;
				font-size:13px;
				font-family:PingFangSC-Regular;
				font-weight:400;
				color:rgba(1,1,1,1);
				padding-top:12px;
				padding-bottom:12px;
				border-bottom:1px solid rgba(233,233,233,1);
			}
		}
	}
  }
</style>
