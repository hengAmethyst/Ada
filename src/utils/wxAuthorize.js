//微信授权

export const getLocation = () => {
	return new Promise(function (resolve, reject) {
		wx.getLocation({
			success: function(res) {
				resolve(res)
			},
			fail: function () {
		      wx.showToast({
		        title: '位置授权失败',
		        icon: 'success',
		        duration: 3000
		      })
		    }
		})
	})
}
