<template>
  <div class="screen">
  	<div class="tab">
  		<div class="t-wrap">
  			<div class="t" v-for="(ta, taIndex) in tabs" :key="taIndex" @click="bindTab(ta.id,taIndex)">
  				<span>{{ta.name}}</span>
  				<div class="icon-wrap" :class="{'icon-wrap-active': curActive === taIndex }">
  					<i class="icon-triangle"></i>
            <i class="icon-triangle-shadow"></i>
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
  				margin-left:15px;
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
            border-width:10px 7px 0 7px;
            border-style:solid;  /*ie6下会出现不透明的兼容问题*/
            border-color:rgba(222,218,217,1) transparent transparent transparent;
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
            border-width:10px 7px 0px 7px;
            border-style:solid;  /*ie6下会出现不透明的兼容问题*/
            border-color:rgba(117,108,103,1) transparent transparent transparent;
          }
  			}
			  .icon-wrap-active{
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
            border-width:0 7px 10px 7px;
            border-style:solid;  /*ie6下会出现不透明的兼容问题*/
            border-color: transparent transparent rgba(222,218,217,1) transparent;
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
            border-width:0 7px 10px 7px;
            border-style:solid;  /*ie6下会出现不透明的兼容问题*/
            border-color: transparent transparent rgba(117,108,103,1) transparent;
          }
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
