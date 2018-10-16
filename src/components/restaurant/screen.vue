<template>
  <div class="screen">
  	<div class="tab">
  		<div class="t-wrap">
  			<div class="t" v-for="(ta, taIndex) in tabs" :key="taIndex" @click="bindTab(ta.id,taIndex)">
  				<span>{{ta.name}}</span>
  				<div class="icon-wrap" :class="{'icon-wrap-active': curActive === taIndex }">
  					<i></i>
  				</div>  				
  			</div>
  		</div>
  	</div>
  	<div class="option" v-show="optionsShow">
  		<ul>
  			<li v-for="(op, opIndex) in options" :key="opIndex"  @click="bindOption">
  				<span>{{op.name}}</span>
  			</li>
  		</ul>
  	</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tabs:[
        {
          id:1,
          name:'地区'
        },
        {
          id:2,
          name:'美食'
        },
        {
          id:3,
          name:'排序'
        }
      ],
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
      ],
      optionsShow:0,
      curActive:null
    }
  },

  components: {
  },

  methods: {
    bindTab(id,index){
      let oldIndex = this.curActive;
      if (this.optionsShow & oldIndex === index) {
        this.optionsShow = 0;
        this.curActive = null;
      }else{
        this.optionsShow = 1;
        this.curActive = index;
      }
    },
    bindOption(){
      this.optionsShow = 0;
      this.curActive = null;
    }
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
    padding-left: 15px;
    padding-bottom: 10px;
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
  				margin-left:15px;
  			}
			  .icon-wrap-active{
          background-color:$theme-highlight;
        }
  		}
  	}
  	.option{
  		position:absolute;
  		width:100%;
  		background-color:#fff;
  		z-index:99;
  		left:0;
  		right:0;
      top:30px;
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
