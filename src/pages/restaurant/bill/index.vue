<template>
  <div class="bill">
    <div class="top">
      <div class="title"><span>买单</span></div>
      <div class="name"><span>{{bill.name}}</span></div>
    </div>
    <div class="content">
      <div>
        <div class="backg"></div>
        <div class="bill-wrap">
          <div class="seat">
            {{bill.seat}}
          </div>
          <div class="list">
            <div v-for="(bi, biIndex) in bill.list" :key="biIndex" class="info">
              <div class="name">{{bi.name}}</div>
              <div class="pieces">{{bi.pieces}}</div>
              <div class="price-wrap">
                <span>￥</span><span class="price">{{bi.price}}</span>
              </div>
            </div>
          </div>
          <div class="total">
            <div class="price">
              {{bill.price}}
            </div>
            <div class="people">
              <span>{{bill.people}}</span><span>人</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      bill:{
        name:'A Boluza 阿波罗意大利餐厅',
        seat:'A8',
        people:5,
        price:524.8,
        list:[
          {
            name:'火锅牛排',
            pieces:1,
            price:'78'
          },
          {
            name:'冰冻鳕鱼',
            pieces:4,
            price:'78'
          },
          {
            name:'鲳鱼',
            pieces:1,
            price:'78'
          },
          {
            name:'鲳鱼',
            pieces:1,
            price:'78'
          },
          {
            name:'鲳鱼',
            pieces:1,
            price:'78'
          },
          {
            name:'南瓜饼',
            pieces:1,
            price:'78'
          }
        ]
      }

    }
  },

  components: {
  },

  methods: {
  },

  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/common.scss";
  .bill{
    padding-bottom:60px;
    .top{
      z-index:98;
      width:100%;
      color:rgba(253,253,253,1);
      background:rgba(225,11,34,1);
      padding-top:20px;
      padding-left:30px;
      padding-bottom:80px;
      position: relative;
      box-sizing: border-box;
      .title{
        font-size:48px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(253,253,253,1);
      }
      .name{
        font-size:18px;
        margin-top:20px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(253,253,253,1);
      }
    }
    .content{
      z-index:99;
      padding:0 24px;
      position:relative;
      .backg{
        margin-top:-60px;
        height:89px;
        background:rgba(26,26,26,1);
        box-shadow:0px 1px 1px 0px rgba(15,21,34,0.14);
      }
      .bill-wrap{
        margin:0 20px;
        margin-top:-40px;
        background:rgba(255,255,255,1);
        box-shadow:0px 8px 19px 0px rgba(129,140,166,0.15);
        .seat{
          height:80px;
          line-height:80px;
          font-size:45px;
          font-family:NfOSWJ|sOS;
          color:rgba(225,11,34,1);
          text-align:center;
          border-bottom:2px solid rgba(242,242,242,1);
        }
        .list{
          padding:20px;
          .info{
            display:flex;
            font-size:15px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(26,26,26,1);
            margin-bottom:10px;
            .name{
              flex:1;
            }
            .pieces{
              width:80px;
            }
          }
        }
        .total{
          display:flex;
          padding:20px;
          justify-content: space-between;
          font-size:18px;
          font-family:PingFangSC-Medium;
          font-weight:500;
          color:rgba(26,26,26,1);
          .price{
            font-size:25px;
            font-weight:500;
            color:rgba(225,11,34,1);
          }
        }
      }
    }
  }
</style>
