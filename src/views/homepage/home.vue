<template>
  <div class="home" v-title="'首页'">
    <div class="sidebar">
     <ul class="sidebar-menu">
        <li><router-link to="/xia">下载标注说明文档</router-link></li>
         <li><router-link to="/video" class="wa">查看往期培训视频</router-link></li>
      </ul>
    </div>
    <div class="content">
    <p>感恩随喜各位师兄用功功德</p>
    <p>您的每一次时心、细心的标注都是在为大藏经编修事业添砖加瓦</p>
    <p>此次标注(务有2项,分别是列切分标注和字框切分标注</p>
    <p>请分别点击这2项任务进行标注</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted(){

  },
  methods:{
    linkto(path){

    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
a:first-child{
  color: white;
}
li:last-child a{
  color: #5C9ACF;
}

.sidebar{
  width: 160px;
  float: left;
  position: relative;
  margin-right: -100%;
}


li:first-child {
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 5px;
  width: 260px;
  background-color: #5C9ACF;
  color: white;
  border-color: #5C9ACF;
  height: 30px;
  
  }
  li:last-child{
    border: 1px solid #ccc;
    text-align: center;
    color: #5C9ACF;
    border-color: #cdcdcd;
    position: relative;
    left: 290px;
    top: -36.8px;
    padding-top: 5px;
    width: 260px;
    height: 30px;  
  }
  .content p{
   position: relative;
   bottom: -100px;
  }
</style>
