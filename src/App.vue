<script>
export default {
  created () {
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
