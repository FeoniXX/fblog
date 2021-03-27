<template>
  <Header class="layout-header">
    <Menu mode="horizontal" theme="light" :active-name="activeName">
      <div class="layout-logo">
        <router-link to="/"> FBLOG </router-link>
      </div>
      <div class="layout-nav">
        <div class="header-search">
          <Icon type="md-search" @click="showSearchBox" />
          <input
            type="text"
            ref="searchbox"
            :class="{ show: isShowSearchBox }"
            @blur="isShowSearchBox = false"
            @keyup.enter="search"
          />
        </div>
        <MenuItem name="Home" to="/"> 首页 </MenuItem>
        <MenuItem name="ArticleList" to="/article/list"> 文章 </MenuItem>
        <MenuItem name="Link" to="/link"> 友链 </MenuItem>
        <MenuItem name="About" to="/about"> 关于 </MenuItem>
      </div>
    </Menu>
  </Header>
</template>

<script>
export default {
  name: "FHeader",
  data() {
    return {
      isShowSearchBox: false,
      activeName: "Home",
    };
  },
  methods: {
    showSearchBox() {
      this.isShowSearchBox = true;
      this.$refs.searchbox.focus();
    },
    search() {
      let keyword = this.$refs.searchbox.value;
      if (keyword) {
        this.$router.push({
          name: "SearchArticle",
          params: { keyword: keyword },
        });
      } else {
        this.$router.push({ name: "ArticleList" });
      }
    },
  },
  watch: {
    $route(to) {
      this.activeName = to.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-header {
  position: fixed;
  top: 0;
  z-index: 111;
  width: 100%;
  padding: 0 80px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%);
}

.layout-logo {
  width: 100px;
  height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;

  a {
    display: block;
    width: 100%;
    line-height: 30px;
    font-size: 15px;
    font-weight: 700;
    color: #6f6f6f;
  }
}

.layout-nav {
  margin: 0 auto;
  margin-right: 20px;
  float: right;
}

.layout-footer-center {
  text-align: center;
}

.ivu-menu-horizontal.ivu-menu-light:after {
  background: #ffffff;
}

.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
  color: #6f6f6f;
  font-size: 16px;
  font-weight: 500;
}

.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
  color: #2d8cf0;
}

.header-search {
  margin: 0 20px;
  float: left;

  i {
    font-size: 20px;
    line-height: 60px;
  }

  input {
    border: none;
    outline: none;
    overflow: hidden;
    background: transparent;
    height: 30px;
    width: 0;
    transition: all 0.2s;
  }

  input:focus {
    border-bottom: 1px solid #2d8cf0;
  }

  input.show {
    width: 200px;
    margin-left: 10px;
  }
}
</style>