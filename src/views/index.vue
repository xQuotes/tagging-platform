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
            <el-form :model="form" :rules="rules" ref="ruleForm"  >
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
            <el-button type="primary" @click="updatePwd();dialogFormVisible = false;">确 定</el-button>
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
          // if (this.form.pass !== "") {
          //   this.$refs.ruleForm.validateField("newpass");
          // }
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
      updatePwd ()  {
        this.$refs.ruleForm.validate(function(result){
         if(result){
          
           alert("成功");
         } else if(result==""&&result==null){
           alert("请填写正确信息");
         }else{
           alert("请填写信息");
         }
        })
      },
      close(){
        alert("关闭");
      }
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
      margin-top:30px;
      min-height:550px;
      background-color: #fff;
      .header{
        height:50px;
        line-height:50px;
        background-color: #5C9ACF;
        padding:0 10px;
<<<<<<< HEAD
        border-top-left-radius:5px;
        border-top-right-radius:5px;
        box-shadow: 0 2px 15px 0 rgba(0,0,0,.1);
=======
>>>>>>> 1ed35cb3f68c54a983388e4a76052fab02fe83bf
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
<<<<<<< HEAD
        padding:20px 0 50px 0;
        min-height:520px;
        margin-bottom:150px;
        background:#fff;
        border-bottom-left-radius:5px;
        border-bottom-right-radius:5px;
        box-shadow: 0 2px 15px 0 rgba(0,0,0,.1);
=======
        margin-top:20px;
>>>>>>> 1ed35cb3f68c54a983388e4a76052fab02fe83bf
        .sidebar-wrapper{
          .sidebar{
            width: 180px;
            float: left;
            position: relative;
            margin-right: -100%;
            .sidebar-menu{
<<<<<<< HEAD
              border-left:1px solid #e6e6e6;
=======
              border-left:1px solid #ccc;
>>>>>>> 1ed35cb3f68c54a983388e4a76052fab02fe83bf
              li{
                padding:0 10px;
                height:36px;
                line-height:36px;
<<<<<<< HEAD
                /*text-align: center;*/
                border:1px solid #e6e6e6;
                border-left:0 none;
                margin-bottom:10px;
                font-size:14px;
                background:#f9f9f9;
                a{
                  display: block;
                }
=======
                text-align: center;
                border:1px solid #ccc;
                border-left:0 none;
                margin-bottom:15px;
>>>>>>> 1ed35cb3f68c54a983388e4a76052fab02fe83bf
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
            margin-left: 145px;
            padding: 0 15px 0 15px;
          }
        }
      }
    }
  }
</style>
