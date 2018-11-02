<template>
    <div class="box">
        <div class="content">
            <div class="scan-wrap" v-if="scanTypeActive == 0">
                <div class="scan-box">
                    <img mode="widthFix" :src="imgSrc" class="result-photo" v-show="showCameraResult"/>
                </div>
            </div>
            
            <div class="camera-wrap" v-if="scanTypeActive == 1">
                <div class="camera-box">
                    <camera device-position="back" flash="off" binderror="error" class="camera" v-show ="!showCameraResult"></camera>
                    <img mode="widthFix" :src="imgSrc" class="result-photo" v-show="showCameraResult"/>
                    <div class="camera-box-back"></div>
                </div>
                <div class="take-photo-icon" @click="takePhoto">
                    <div class="icon-wrap">
                        <i class="icon-1"></i>
                        <i class="icon-2">
                            <i class="icon-3"></i>
                        </i>
                    </div>
                </div>
            </div>
            
            <div class="photo-album" @click="chooseImg">相册</div>
        </div>
        <div class="section-4">
            <div class="section-4-1" @click="bindScanType(0)" :class="{'active':scanTypeActive == 0}">
                <div class="section-4-1-1"></div>
                <div class="icon-spot"></div>
                <div class="section-4-1-2">扫码</div>
            </div>
            <div class="section-4-2" @click="bindScanType(1)" :class="{'active':scanTypeActive == 1}">
                <div class="section-4-2-1"></div>
                <div class="icon-spot"></div>
                <div class="section-4-2-2">这是什么菜?</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            scanTypeActive:1,
            imgSrc:null,
            showCameraResult: false,
        }
    },
    methods:{
        bindScanType(index){
            this.scanTypeActive = index;
            // wx.setNavigationBarTitle({
            //     title: res.data.nav_name,
            // }) 
        },
        chooseImg(){
            let _this = this;
            wx.chooseImage({
                count: 1,
                sizeType: ['compressed'],
                sourceType: ['album', 'camera'],
                success: (res) => {
                    // tempFilePath可以作为img标签的src属性显示图片
                    const tempFilePath = res.tempFilePaths[0]
                    if(res.tempFiles[0].size > 512000){
                        wx.showToast({
                            title: '图片过大',
                            icon: 'none',
                            duration: 2000
                        })
                        _this.showCameraResult = false;
                        return false
                    }
                    _this.showCameraResult = true;
                    wx.showLoading({
                        title: '识别中...',
                        mask: true
                    })
                    _this.imgSrc = tempFilePath
                    _this.uploadImg(tempFilePath)
                }
            })
        },
        takePhoto() {
            let _this = this;
            const ctx = wx.createCameraContext()
            ctx.takePhoto({
                quality: 'high',
                success: (res) => {
                    _this.showCameraResult = true;
                    wx.showLoading({
                        title: '识别中...',
                        mask: true
                     })
                    _this.imgSrc = res.tempImagePath
                    _this.uploadImg(res.tempImagePath)
                }
            })
        },
        uploadImg(imgUrl){
            let _this = this;
            wx.uploadFile({
                url: 'http://api.codkui.com/?service=Menu.Menu.Distinguish',
                filePath: imgUrl,
                name: 'file',
                success: (r)=>{
                    wx.hideLoading()
                    let data = JSON.parse(r.data)
                    let result = data.data.result
                   
                    let dishInfo = {
                        url: _this.imgSrc,
                        result: result
                    }
                    _this.$store.commit('DISHINFO',dishInfo)
                    wx.navigateTo({url: '/pages/restaurant/scanQR/dishResult/main'})
                }
            })
        }
    },
    onHide(){
        this.showCameraResult = false
    }
}
</script>
<style scoped lang="scss">
  @import "@/sass/common.scss";
    .box{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: #fff;
        .content{
            width: 100%;
            height: 100%;
            background-color:rgba(0,0,0,0.6);
            .scan-wrap{
                padding-top:72px;
                .scan-box{
                    margin:0 auto;
                    background-size: 100%;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    background-image:url($image-url + 'images/restaurant/scan/1/Group@2x.png');
                    background-position: center center;
                    background-repeat: no-repeat;
                    width: 284px; 
                    height: 284px; 
                    background-color:rgba(0,0,0,0.6);
                    overflow: hidden;
                    .result-photo{
                        width:100%;
                    }
                }
            } 
            .camera-wrap{
                padding-top:72px;
                .camera-box{
                    margin:0 auto;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width: 284px; 
                    height: 284px; 
                    background-color:rgba(0,0,0,0.6);
                    overflow: hidden;
                    position:relative;
                    z-index:1;
                    .camera{
                        width:100%;
                        height:100%;
                        z-index:2;
                    }
                    .result-photo{
                        width:100%;
                    }
                    .camera-box-back{
                        position:absolute;
                        width:100%;
                        height:100%;
                        background-image:url($image-url + 'images/restaurant/scan/2/ava@2x.png');
                        background-size: 100%;
                        background-position: center center;
                        background-repeat: no-repeat;
                        z-index:3;
                    }
                }
                .take-photo-icon{
                    margin: 0 auto;
                    margin-top: 40px;
                    width: 80px;
                    height: 80px;
                    border-radius: 100%;
                    background-color:$theme-highlight;
                    .icon-wrap{
                        width:100%;
                        height:100%;
                        display:flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        .icon-1{
                            width:18px;
                            height:3px;
                            margin-bottom: 4px;
                            background:rgba(255,255,255,1);
                            box-shadow:0px 1px 2px 0px rgba(180,6,25,1);
                        }
                        .icon-2{
                            width:42px;
                            height:27px;
                            background:rgba(255,255,255,1);
                            box-shadow:0px 1px 2px 0px rgba(180,6,25,1);
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            .icon-3{
                                width:18px;
                                height:18px;
                                border-radius:50%;
                                background:rgba(225,11,34,1);
                            }
                        }
                    }

                }
                .section-2{
                    margin: 0 auto;
                    margin-top: 60px;
                    width: 570rpx;
                    height: 570rpx;
                    background: red;
                }
            }
            .photo-album{
                position: fixed;
                top: 50rpx;
                right: 50rpx;
                font-size: 34rpx;
                color: #fff;
            }
        }
        .section-4{
            position: fixed;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: space-around;
            width: 100%;
            height: 100px;
            background:rgba(26,26,26,0.8);
            .section-4-1{
                display: flex;
                flex-direction: column;
                justify-content:center;
                align-items:center;
                width: 80px;
                height: 100%;
                opacity:0.6;
                .section-4-1-1{
                    background-image:url($image-url + 'images/restaurant/scan/1/Group2@2x.png');
                    width: 30px;
                    height: 30px;
                    background-size: 100%;
                    background-position: center center;
                    background-repeat: no-repeat;
                }
                .icon-spot{
                    width:4px;
                    height:4px;
                    margin:8px 0;
                }
                .section-4-1-2{
                    font-size: 12px;
                    color: #fff;
                }
            }    
            .section-4-2{
                display: flex;
                flex-direction: column;
                justify-content:center;
                align-items:center;
                width: 80px;
                height: 100%;
                opacity: 0.6;
                .section-4-2-1{
                    background-image:url($image-url + 'images/restaurant/scan/2/Rectangle10@2x.png');
                    width: 30px;
                    height: 30px;
                    background-size: 84%;
                    background-position: center center;
                    background-repeat: no-repeat;
                }
                .icon-spot{
                    width:4px;
                    margin:8px 0;
                    height:4px;
                }
                .section-4-2-2{
                    font-size: 12px;
                    color: #fff;
                }
            }  
            .active{
                opacity:1;
                 .icon-spot{
                    background-color:#fff;
                }
            }   
        }
    }
</style>


