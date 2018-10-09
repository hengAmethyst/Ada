const toBase64 = (_this) => {
    wx.chooseImage({
        // sourceType: ['camera '],
        success: res => {
        wx.getFileSystemManager().readFile({
            filePath: res.tempFilePaths[0], //选择图片返回的相对路径
            // filePath: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538808572644&di=aadc442de78d97fd754d360eb8fe5b13&imgtype=0&src=http%3A%2F%2Fwww.qnong.com.cn%2Fuploadfile%2F2016%2F0612%2F20160612083616448.jpg', //选择图片返回的相对路径
            encoding: 'base64', //编码格式
            success: res => { //成功的回调
              _this.postImg(res.data)
            }
          })
          //这是同步的方法，不过我不太喜欢用
          //let base64 = wx.getFileSystemManager().readFileSync(res.tempFilePaths[0], 'base64') 
          //console.log(base64)
        }
    })
}
export default toBase64