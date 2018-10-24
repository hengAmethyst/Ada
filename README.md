# Ada

# 项目布局

```
.
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── dist                                        // 上线项目文件，上传小程序即可访问
├── src                                         // 源码目录
│   ├── components                              // 组件
│   │   ├── common                              // 公共组件
│   │   │   └── input-num.vue                   // 加减操作组件
│   │   ├── restaurant                           
│   │   │   ├── 
│   │   │   ├── 
│   │   │   ├── 
│   │   │   └── 
│   │   └── user                              	
│   │ 		├──
│   │ 		└──
│   ├── http									// 数据交互
│   │  	├── api.js 								// api
│   │  	├── config.js 							// api各种配置
│   │  	└── fly.js								// flyio
│   ├── pages
│   │   ├── index								// 首页
│   │   │	├── index.vue
│   │   │	└── main.js
│   │   ├── restaurant							// 餐厅
│   │   │	├── bill 							// 买单
│   │   │	├── booked 							// 支付预定
│   │   │	├── booking							// 预定 选座
│   │   │	├── callService						// 呼叫服务员
│   │   │	├── details 						// 餐厅详情
│   │   │	├── feedback 						// 留言
│   │   │	├── list 							// 餐厅列表
│   │   │	├── location						// 餐厅地图
│   │   │	├── meal							// 正在用餐
│   │   │	├── menu 							// 餐厅菜单
│   │   │	├── ordered							// 已点菜单
│   │   │	├── recommend 						// 推荐菜单
│   │   │	├── scanQR 							// 扫描识别
│   │   │	├── screen						
│   │   │	└── search 							// 搜索餐厅
│   │   └── user
│   │ 		├── login							// 登录
│   │ 		├── userInfo						// 个人信息
│   │ 		└── userOrder						// 个人订单
│   ├── sass
│   │   ├── common.scss							//公共样式 
│   │   └──
│   ├── store                                   // vuex的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── getters.js                          // 配置getters
│   │   ├── index.js                            // 引用vuex，创建store
│   │   ├── modules                             // store模块
│   │   ├── mutation-types.js                   // 定义常量muations名
│   │   └── mutations.js                        // 配置mutations
│   ├── utils
│   │   ├── index.js
│   │   ├── toBase64.js
│   │   └── wxAuthorize.js
│   ├── App.json                                // 小程序初始配置
│   ├── App.vue                                 // 页面入口
│   ├── main.js                                 // 程序入口
├── static                                  	
│   └──
.
.