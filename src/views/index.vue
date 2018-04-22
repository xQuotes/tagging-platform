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
                <el-dropdown-item>
                    <el-a @click="dialogFormVisible = true">修改密码</el-a>
                </el-dropdown-item>
                <el-dropdown-item >
                   <el-a @click ="singdialog = true;dialogFormVisible=false">退出登录</el-a>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <!-- dialog 修改密码弹窗 -->
         <el-dialog title="修改密码 :" :visible.sync="dialogFormVisible" width="30%" >
            <el-form :model="form" :rules="rules" ref="form"  >
            <el-form-item label="原密码 :" prop="pass" :label-width="formLabelWidth">
            <el-input v-model="form.pass" type="password" auto-complete="off" value="" ></el-input>
            </el-form-item>
            <el-form-item label="新密码 :" prop="newpass" :label-width="formLabelWidth">
            <el-input v-model="form.newpass" type="password" auto-complete="off" value=""></el-input>
            </el-form-item>
            <el-form-item label="确认密码 :" prop="checkpass" :label-width="formLabelWidth" >
            <el-input v-model="form.checkpass" type="password" auto-complete="off" value=""></el-input>
            </el-form-item>
            
            </el-form>
            <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click.native="updatePwd('form');">确 定</el-button>
            </div>
        </el-dialog>

         <!-- 退出对话框登录 -->
         <el-dialog title="提示" :visible.sync="singdialog" width="30%"> 
           <p>您还没有完成标注任务提交,请完成标<br>
             注任务提交后再退出,或者将未完成的<br>
             文件保存至本地,否则您之前完成的标<br>
             注内客将不会被系统记录保存
           </p>
           <span slot="footer" class="dialog-footer">
           <el-button @click="singdialog = false">取 消</el-button>
           <el-button type="primary" @click="singdialog = false">确 定退出</el-button>
           </span>

         </el-dialog>
        
        
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
                <li :class="{active:linkTo('/fontsplit')}">
                  <router-link to="/fontsplit">
                    字框切分标注
                  </router-link>
                </li>
                <!--<li>文本识别标注</li>-->
                <li :class="{active:linkTo('/textsplit')}">
                <router-link to="/textsplit">
                   文本识别标注
                </router-link>
                </li>
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

    var validatePass = (rule, value, callback) => {
   
      if (value === "") {
          callback(new Error("请输入原密码"));
      } else {
        //   if (this.form.pass !== "") {
        //      this.$refs.ruleForm.validateField("newpass");
        //  }
           callback();
      }
    };
    var validateNewPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        // if (this.form.newpass !== "") {
        //   this.$refs.ruleForm.validateField("checkPass");
        // }
         callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入新密码"));
      } else if (value !== this.form.newpass) {
        callback(new Error("两次输入密码不一致!"));
      
      } else {
        callback();
      }
    };
    return {
      form: {
       pass: "",
       newpass: "",
       checkpass: ""
     },
   rules: {
    pass: [{ validator: validatePass, trigger: "blur" }],
    newpass: [{ validator: validateNewPass, trigger: "blur" }],
    checkpass: [{ validator: validatePass2, trigger: "blur" }],
     
   },
  dialogTableVisible: false,
  dialogFormVisible: false,
  formLabelWidth: "80px",
  centerDialogVisible: false,
  singdialog:false ,
  msg: ""
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
     },
     // 请求：修改密码
      updatePwd (from)  {
        this.$refs.form.validate((valid) => {
           if(valid){
             alert("修改成功")
           this.dialogFormVisible=false;
           }else{
             alert("信息不正确");
           }
        }
        )
       
      },
      
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 解决 dialog 抖动
   .index {
     overflow: hidden;
   }
  .index-in{
    .page-wrapper{
      position:relative;
      margin-top:50px;
      min-height:550px;
      background-color: #fff;
      .header{
        height:50px;
        line-height:50px;
        background-color: #D89020;
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
            width: 150px;
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
                margin-bottom:10px;
                font-size:14px;
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
            margin-left: 150px;
            padding: 0 15px 0 15px;
          }
        }
      }
    }
  }
</style>
