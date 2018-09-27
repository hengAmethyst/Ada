<template>
    <div class="input-num" :value="value" v-if="iconShow">
    	<div class="pieces">{{pieces}}</div>
        <div class="icon-wrap" @click="bingclick">
        	<i :class="iconState"></i>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            pieces: {
                type: Number,
                default: ''
            }
        },
        data () {
            return {
                visible: 0
            }
        },
        computed: {
		  	iconState: function () {
		    	if (this.pieces === 0 || this.pieces === '' || this.pieces === null) {
		    		return "icon-plus";
		    	}else if (this.pieces === 1) {
		    		return "icon-cross";
		    	}else{
		    		return "icon-minus";
		    	}			  	
		    },
		    iconShow: function () {
		    	if ( this.pieces === '' || this.pieces === null) {
		    		return false;
		    	}else{
		    		return true;
		    	}			  	
		    }
		},
        methods: {
            cancel(){
                this.visible = false;
                console.log('$emit(input');
                this.$emit('input', this.visible);
            }
        },
    }
</script>
<style lang="scss">
  @import "@/sass/common.scss";
  .input-num{
  		min-width:65px;
		height:26px;
		line-height:26px;
		background:$theme-color;
		font-size:14px;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		display:flex;
		justify-content: space-around;
		align-items: center;
		position:absolute;
		.pieces{
			flex:1;
			text-align:center;
		}
		.icon-wrap{
		  display:inline-block;
		  width:30px;
		  height:26px;
		  position:relative;
		  .icon-cross,
		  .icon-plus,
		  .icon-minus{
			  width: 30px;
			  height: 26px;
			  position: absolute;  /*方便相对于父元素进行定位*/
			}
			.icon-cross::before,
			.icon-cross::after,
			.icon-plus::before,
			.icon-plus::after,
			.icon-minus::before,
			.icon-minus::after{
				background:rgba(255,255,255,1);
			  	content: "";
			  	position: absolute;  /*方便进行定位*/
			  	height: 12px;
			  	width: 2px;
			  	top: 7px;
			  	right: 14px;  /*设置top和right使图像在20*20框中居中*/
			}
			.icon-cross::before{
			  	transform: rotate(45deg);  /*进行旋转*/
			}
			.icon-cross::after{
			  	transform: rotate(-45deg);
			}
			.icon-plus::before{
			  	transform: rotate(0deg);  /*进行旋转*/
			}
			.icon-plus::after{
			  	transform: rotate(-90deg);
			}
			.icon-minus::before{
			  	transform: rotate(90deg);  /*进行旋转*/
			}
			.icon-minus::after{
			  	transform: rotate(-90deg);
			}
		}
  	}
</style>
