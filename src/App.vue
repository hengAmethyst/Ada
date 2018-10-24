<script>
  // import { login } from '@/http/api'
  import { mapState, mapMutations } from 'vuex'
  import { SET_OPEN_ID } from './store/mutation-types'
  const App = getApp();
  export default {
    data: {
        globalData: {}
    },
    computed: {
      ...mapState([
        'openId',
        'locationInfo'
      ]),
    },
    methods: {
      ...mapMutations({
          setOpenId: 'SET_OPEN_ID',
          setLocation: 'SET_LOCATION'
      }),
      // 使用了async+await的语法，用同步的方式写异步脚本
      // async login(code) {
      //     let _this = this;
      //     try {
      //         const resData = await login({ code: code });
      //         if (resData.returnCode == 200) {
      //             _this.setOpenId(resData.data.accountId)
      //         }
      //     } catch (err) {
      //         console.error(err);
      //     }
      // },
      // 拆分wx.login，结构更清晰
      _login() {
          let _this = this;
          wx.login({
              success(res) {
                  if (res.code) {
                      console.log('wx.login成功,code:', res.code);
                      let code = res.code;
                      console.log(res)
                      _this.setOpenId(res.code)
                      // _this.login(code)
                  } else {
                      // _this.$tips.toast('微信登录失败')
                  }
              }
          });
      },
      fetchtLocation(){
        let _this = this;
        wx.getLocation({
          success: function(res) {
            _this.setLocation(res)
          },
          fail: function () {
            wx.showToast({
              title: '位置授权失败',
              icon: 'success',
              duration: 3000
            })
          }
        })
      }
    },
    onLaunch() {
        this._login()
        this.fetchtLocation()
    }
  }
</script>

<style lang="scss">
  .container {
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
  page{
    height: 100%;
  }
  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
    box-sizing: border-box;
  }
</style>
