/*
    fly配置文件
    by:David 2018.6.14
*/
//引入 fly
var Fly = require("flyio/dist/npm/wx")
var fly = new Fly;
import config from './config'
//配置请求基地址
// //定义公共headers
// fly.config.headers={xx:5,bb:6,dd:7}
// //设置超时
fly.config.timeout = config.timeout;
// //设置请求基地址
fly.config.baseURL = config.host

//添加请求拦截器
fly.interceptors.request.use((request) => {
    wx.showLoading({
        title: "加载中",
        mask:true
    });
    //给所有请求添加自定义header
    request.headers = {
        "X-Tag": "flyio",
        'content-type': 'application/json'
    };
    //打印出请求体
    // console.log(request.body)
    //终止请求
    //var err=new Error("xxx")
    //err.request=request
    //return Promise.reject(new Error(""))
    // let authParams = {
    //     //公共参数
    //     "categoryType": "SaleGoodsType@sim",
    //     "streamNo": "wxapp153570682909641893",
    //     "reqSource": "MALL_H5",
    //     "appid": "string",
    //     "timestamp": new Date().getTime(),
    //     "sign": "string"
    // };

    // request.body && Object.keys(request.body).forEach((val) => {
    //     if(request.body[val] === ""){
    //         delete request.body[val]
    //     };
    // });
    // request.body = {
    //     ...request.body,
    //     ...authParams
    // }
    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use((response) => {
        wx.hideLoading();
        //只将请求结果的data字段返回
        return response.data
    },
    (err) => {
        console.log(err);
        wx.hideLoading();
        if(err){
          return "请求失败";
        };
        //发生网络错误后会走到这里
        //return Promise.resolve("ssss")
    }
)
// Vue.prototype.$http=fly //将fly实例挂在vue原型上

export default fly