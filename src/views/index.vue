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
      margin-top:30px;
      min-height:550px;
      .header{
        height:50px;
        line-height:50px;
        background-color: #D89020;
        padding:0 10px;
        border-top-left-radius:5px;
        border-top-right-radius:5px;
        box-shadow: 0 2px 15px 0 rgba(0,0,0,.1);
        .left{
          span{
            color: #fff;
            font-size:14px;
          }
          em{
            color: #ec0000;
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
        padding:20px 0 50px 0;
        min-height:520px;
        margin-bottom:150px;
        background:#fff;
        border-bottom-left-radius:5px;
        border-bottom-right-radius:5px;
        box-shadow: 0 2px 15px 0 rgba(0,0,0,.1);
        .sidebar-wrapper{
          .sidebar{
            width: 145px;
            float: left;
            position: relative;
            margin-right: -100%;
            .sidebar-menu{
              border-left:1px solid #e6e6e6;
              li{
                padding:0 10px;
                height:36px;
                line-height:36px;
                /*text-align: center;*/
                border:1px solid #e6e6e6;
                border-left:0 none;
                margin-bottom:10px;
                font-size:14px;
                background:#f9f9f9;
                a{
                  display: block;
                }
                &.active{
                  background-color: #D89020;
                  border-color: #D89020;
                  a{
                    color: #fff;
                  }
                }
                &.router-link-active{
                  background-color: #D89020;
                  border-color: #D89020;
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
            margin-left: 145px;
            padding: 0 15px 0 15px;
          }
        }
      }
    }
  }
</style>
