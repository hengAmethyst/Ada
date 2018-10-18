<template>
  <div class="location">
    <map
      id="myMap"
      style="width: 100%; height: 100%;"
      show-location
    ></map>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // latitude: 23.099994,
      // longitude: 113.324520,
      // markers: [{
      //   id: 1,
      //   latitude: 23.099994,
      //   longitude: 113.324520,
      //   name: 'T.I.T 创意园'
      // }],
      // covers: [{
      //   latitude: 23.099994,
      //   longitude: 113.344520,
      //   iconPath: '/image/location.png'
      // }, {
      //   latitude: 23.099994,
      //   longitude: 113.304520,
      //   iconPath: '/image/location.png'
      // }]
    }
  },

  components: {
  },

  methods: {
    moveToLocation: function () {
      this.mapCtx.moveToLocation()
    },
  },

  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },  
  mounted(){
   this.moveToLocation()
  }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/common.scss";
  .location{
    width:100%;
    height:100%;
  }
</style>
