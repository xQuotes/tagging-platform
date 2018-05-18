<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
            <div class="sidebar">
              <ul class="sidebar-menu">
                <router-link to="/home">
                  <li :class="{active:linkTo('/home')}">
                      首页
                  </li>
                </router-link>
                <router-link to="/pagesplit">
                  <li :class="{active:linkTo('/pagesplit')}">
                      页切分标注
                  </li>
                </router-link>
                <li :class="{active:linkTo('/columnsplit')}">
                  <router-link to="/columnsplit">
                    列切分标注
                  </router-link>
                </li>
                <!--<li>字框切分标注</li>-->
                <router-link to="/fontsplit">
                  <li :class="{active:linkTo('/fontsplit')}">
                      字框切分标注
                  </li>
                </router-link>
                <!--<li>文本识别标注</li>-->
                <router-link to="/textsplit">
                  <li :class="{active:linkTo('/textsplit')}">
                    文本识别标注
                  </li>
                </router-link>
              </ul>
            </div>
          </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    linkTo(path) {
      var route_link = this.$route.path;
      if (path === route_link) {
        return true;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sidebar-wrapper {
  .sidebar {
    width: 150px;
    float: left;
    position: relative;
    margin-right: -100%;
    .sidebar-menu {
      border-left: 1px solid #ccc;
      li {
        padding: 0 10px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border: 1px solid #ccc;
        border-left: 0 none;
        margin-bottom: 10px;
        font-size: 14px;
        &.active {
          background-color: #d89020;
          border-color: #d89020;
          a {
            color: #fff;
          }
        }
        &.router-link-active {
          background-color: #d89020;
          border-color: #d89020;
          color: #fff;
          a {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
