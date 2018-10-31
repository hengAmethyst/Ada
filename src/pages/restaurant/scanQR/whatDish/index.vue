<template>
    <div class="box">
        <div class="section-1">相册</div>

        <div class="camera-box">
            <camera device-position="back" flash="off" binderror="error" class="camera" v-if="showCamera"></camera>
            <img mode="widthFix" :src="imgSrc" class="camera" v-if="!showCamera"/>
        </div>
        
        <div class="section-3" @click="takePhoto" v-if="showCamera"></div>

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
export default {
    data(){
        return{
           imgSrc:null,
           showCamera: true
        }
    },
    methods:{
        takePhoto() {
            this.showCamera = false
            const ctx = wx.createCameraContext()
            ctx.takePhoto({
                quality: 'high',
                success: (res) => {
                     wx.showLoading({
                        title: '识别中...',
                        mask: true
                     })
                    this.imgSrc = res.tempImagePath
                    this.uploadImg(res.tempImagePath)
                }
            })
        },
        uploadImg(imgUrl){
            wx.uploadFile({
                url: 'http://api.codkui.com/?service=Menu.Menu.Distinguish',
                filePath: imgUrl,
                name: 'file',
                success: (r)=>{
                     wx.hideLoading()
                    let data = JSON.parse(r.data)
                    let name = data.data.result[0].name
                   
                    let dishInfo = {
                        url: this.imgSrc,
                        name: name
                    }
                    this.$store.commit('DISHINFO',dishInfo)
                    
                    wx.navigateTo({url: '/pages/restaurant/scanQR/dishResult/main'})
                }
            })
        }
    },
    onHide(){
        this.showCamera = true
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
        .camera-box{
            margin:0 auto;
            margin-top:130rpx;
            width: 572rpx; 
            height: 572rpx; 
            border-radius: 100%;
            overflow: hidden;
            .camera{
                width:100%;
                height:100%;
            }
        }
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


