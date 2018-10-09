<template>
    <div class="box">


        <!-- <camera device-position="back" flash="off" binderror="error" style="width: 100%; height: 300px;"></camera>
<button type="primary" @click="takePhoto">拍照</button>
<view>预览</view>
<image mode="widthFix" :src="src"/> -->

        <div class="section-1">相册</div>
        <div class="section-2"></div>
        <div class="section-3" @click="chooseImg"></div>
        <div class="section-4">
            <div class="section-4-1">
                <div class="section-4-1-1"></div>
                <div class="section-4-1-2">扫码</div>
            </div>
            <div class="section-4-2">
                <div class="section-4-2-1"></div>
                <div class="section-4-2-2">这是什么菜?</div>
            </div>
        </div>
        <div class="section-5">

        </div>
    </div>
</template>
<script>
import toBase64 from '@/utils/toBase64'
export default {
    data(){
        return{
            access_token: '',
            imageBaseCode: "",
            src: ''
        }
    },
    methods:{
        takePhoto() {
		const ctx = wx.createCameraContext()
		ctx.takePhoto({
			quality: 'high',
			success: (res) => {
				this.src = res.tempImagePath
                console.log(res)
                wx.getFileSystemManager().readFile({
                    filePath: res.tempImagePath, //选择图片返回的相对路径
                    encoding: 'base64', //编码格式
                    success: res => { //成功的回调
                    console.log(res.data)
                        this.postImg(res.data)
                    }
                })
			}
		})
	},
        getToken(){
            let obj = {
                url: 'https://aip.baidubce.com/oauth/2.0/token',
                grant_type: 'client_credentials',
                client_id: 'QREE7asD4si5DHC5PlHAYCZa',
                client_secret: 'RF4xG67hdScDkDxoHcbnEokS0xaLLxiu'
            }
            let url = `${obj.url}?grant_type=${obj.grant_type}&client_id=${obj.client_id}&client_secret=${obj.client_secret}`
            wx.request({
              url: url,
              method: 'POST',
              success: (res) => {
                  console.log(res.data.access_token)
                  this.access_token = res.data.access_token
              }
            })
        },
        postImg(baseCode){
            let obj = {
                url: 'https://aip.baidubce.com/rest/2.0/image-classify/v2/dish',
                access_token: this.access_token
            }
            let data = {
                image: encodeURI(baseCode),
                filter_threshold: 0.95
            }
            let url = `${obj.url}?access_token=${obj.access_token}`
            wx.request({
              url: url,
              method: 'POST',
              header: {'Content-Type': 'application/x-www-form-urlencoded'},
              data: data,
              success: (res) => {
                  console.log(res.data)
              }
            })
        },
        chooseImg(){
            toBase64(this)
        }
    },
    created(){
        this.getToken()
    }
}
</script>
<style scoped lang="scss">
    .box{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: pink;
        .section-1{
            position: fixed;
            top: 50rpx;
            right: 50rpx;
            font-size: 34rpx;
            color: #fff;
        }
        .section-2{
            margin: 0 auto;
            margin-top: 138rpx;
            width: 570rpx;
            height: 570rpx;
            background: red;
        }
        .section-3{
            margin: 0 auto;
            margin-top: 90rpx;
            width: 160rpx;
            height: 160rpx;
            border-radius: 100%;
            background: yellowgreen;
        }
        .section-4{
            position: fixed;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: space-around;
            width: 100%;
            height: 200rpx;
            background:rgba(26,26,26,0.8);
            .section-4-1{
                display: flex;
                flex-direction: column;
                width: 60rpx;
                height: 100%;
                .section-4-1-1{
                    margin-top: 46rpx;
                    width: 55rpx;
                    height: 55rpx;
                    background: red;
                }
                .section-4-1-2{
                    margin-top: 46rpx;
                    font-size: 24rpx;
                    color: #fff;
                }
            }    
            .section-4-2{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 160rpx;
                height: 100%;
                .section-4-2-1{
                    margin-top: 46rpx;
                    width: 55rpx;
                    height: 55rpx;
                    background: red;
                }
                .section-4-2-2{
                    margin-top: 46rpx;
                    font-size: 24rpx;
                    color: #fff;
                }
            }     
        }
    }
</style>


