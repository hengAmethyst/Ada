<template>
  <div class="enlarge-wrap" v-if="enlargeImageShow" @click.stop="bindClose">
    <div class="swiper-wrap">
        <swiper :indicator-dots="indicatorDots"
          :autoplay="autoplay" :interval="interval" :duration="duration" :current="current" :circular="true" @change="bindchange">
          <block v-for="(enl, enlIndex) in enlargeImageList"  :key="enlIndex">
            <swiper-item>
              <image :src="enl" class="slide-image"/>
            </swiper-item>
          </block>
        </swiper>
        <div class="nav">
          <span>{{current + 1}}</span>
          <span>/</span>
          <span>{{enlargeImageList.length}}</span>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      current:0,
    }
  },
  props: ['enlargeImageShow','enlargeImageList'],
  components: {
  },

  methods: {
    bindchange(e){
      this.current = e.target.current
    },
    bindClose(){
      this.$emit('bindClose');
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/common.scss";
  .enlarge-wrap{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.8);
    display:flex;
    justify-content:center;
    align-itmes:center;
    .swiper-wrap{
      width:100%;
      height:100%;
      display:flex;
      flex-direction: column;
      justify-content:center;
      align-itmes:center;
      swiper{
        width:100%;
        height: 210px;
      }
      .slide-image{
        width:100%;
      }
    }
    .nav{
      text-align:center;
      height:48px;
      font-size:17px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:48px;
    }
  }
</style>
