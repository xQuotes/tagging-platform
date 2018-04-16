  <template>
  <div class="fontsplit" v-title="'字框切分注'">
   字框切分注
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
  ,
  mounted:function(){
    this.$http.get("http://localhost:8280/list").then(Response=>{ console.log(Response.data)},Response=>{console.log("error")})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
