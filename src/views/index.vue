<template>
  <div class="index">
    <div class="index-in w">
      <div class="page-wrapper">
        <div class="header clearfix">
          <div class="left fl"><span>欢迎登录藏经图文标注管理平台,&nbsp;</span><em>深入经藏智慧如海!</em></div>
          <div class="right fr">
            <el-dropdown :hide-on-click="false" trigger="click">
              <span class="el-dropdown-link">
                12345678@qq.com<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="container clearfix">
          <div class="sidebar-wrapper">
            <div class="sidebar">
              <ul class="sidebar-menu">
                <li :class="{active:linkTo('/home')}">
                  <router-link to="/home">
                    首页
                  </router-link>
                </li>
                <li :class="{active:linkTo('/pagesplit')}">
                  <router-link to="/pagesplit">
                    页切分标注
                  </router-link>
                </li>
                <li :class="{active:linkTo('/columnsplit')}">
                  <router-link to="/columnsplit">
                    列切分标注
                  </router-link>
                </li>
                <!--<li>字框切分标注</li>-->
                <!--<li>文本识别标注</li>-->
              </ul>
            </div>
          </div>
          <div class="content-wrapper">
            <div class="main-content">
              <!--组件渲染-->
              <router-view></router-view>
              <!--./组件渲染-->
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
      msg: ''
    }
  },
  mounted(){

  },
  methods:{
     linkTo(path){
       var route_link = this.$route.path;
       if(path === route_link){
         return true
       }
     }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .index-in{
    .page-wrapper{
      position:relative;
      margin-top:50px;
      min-height:550px;
      background-color: #fff;
      .header{
        height:50px;
        line-height:50px;
        background-color: #5C9ACF;
        padding:0 10px;
        .left{
          span{
            color: #fff;
            font-size:14px;
          }
          em{
            color: #fff;
            font-size:14px;
          }
        }
        .right{
          .el-dropdown{
            .el-dropdown-link{
              cursor: pointer;
              color:#fff;
            }
          }
        }
      }
      .container{
        margin-top:20px;
        .sidebar-wrapper{
          .sidebar{
            width: 180px;
            float: left;
            position: relative;
            margin-right: -100%;
            .sidebar-menu{
              border-left:1px solid #ccc;
              li{
                padding:0 10px;
                height:36px;
                line-height:36px;
                text-align: center;
                border:1px solid #ccc;
                border-left:0 none;
                margin-bottom:15px;
                &.active{
                  background-color: #5C9ACF;
                  border-color: #5C9ACF;
                  a{
                    color: #fff;
                  }
                }
                &.router-link-active{
                  background-color: #5C9ACF;
                  border-color: #5C9ACF;
                  color: #fff;
                  a{
                    color: #fff;
                  }
                }
              }
            }
          }
        }
        .content-wrapper{
          float: left;
          width: 100%;
          .main-content{
            margin-left: 180px;
            padding: 0 0 0 20px;
          }
        }
      }
    }
  }
</style>
