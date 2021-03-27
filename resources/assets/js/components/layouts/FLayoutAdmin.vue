<template>
  <Layout class="layout main" :style="{ height: '100%' }">
    <Sider
      ref="side1"
      hide-trigger
      collapsible
      :collapsed-width="64"
      v-model="isCollapsed"
    >
      <div class="side-menu-wrapper">
        <div class="layout-logo">
          <div class="logo-con">
            <img src="/images/logo.png" />
            <span v-show="!isCollapsed">FBLOG</span>
          </div>
        </div>
        <Menu
          ref="leftSideMenu"
          :active-name="activeName"
          :open-names="openNames"
          theme="dark"
          width="auto"
          :accordion="true"
          v-show="!isCollapsed"
        >
          <template v-for="menu in menus">
            <MenuItem
              v-if="menu.path"
              :name="menu.path"
              :to="menu.path"
              :key="menu.name"
            >
              <Icon :type="menu.icon"></Icon>
              <span>{{ menu.name }}</span>
            </MenuItem>
            <Submenu v-if="menu.children" :name="menu.name" :key="menu.name">
              <template slot="title">
                <Icon :type="menu.icon"></Icon>
                <span>{{ menu.name }}</span>
              </template>
              <MenuItem
                v-for="subMenu in menu.children"
                :name="subMenu.path"
                :to="subMenu.path"
                :key="subMenu.name"
                >{{ subMenu.name }}</MenuItem
              >
            </Submenu>
          </template>
        </Menu>
        <div class="menu-collapsed" v-show="isCollapsed">
          <template v-for="menu in menus">
            <Tooltip
              v-if="menu.path"
              :content="menu.name"
              :key="menu.name"
              placement="right"
            >
              <router-link :to="menu.path" class="drop-menu-a">
                <Icon :type="menu.icon"></Icon>
              </router-link>
            </Tooltip>
            <Dropdown
              v-if="menu.children"
              :name="menu.name"
              :key="menu.name"
              @on-click="dropDownMenuOnClick"
              placement="right"
            >
              <a class="drop-menu-a">
                <Icon :type="menu.icon"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem
                  v-for="subMenu in menu.children"
                  :name="subMenu.path"
                  :key="subMenu.name"
                  >{{ subMenu.name }}</DropdownItem
                >
              </DropdownMenu>
            </Dropdown>
          </template>
        </div>
      </div>
    </Sider>
    <Layout>
      <Header
        :style="{ width: '100%', padding: '0 20px', zIndex: 111 }"
        class="layout-header-bar"
      >
        <Icon
          @click.native="collapsedSider"
          :class="rotateIcon"
          type="md-menu"
          size="24"
        ></Icon>
        <div class="custom-content-con">
          <Dropdown @on-click="dropDownMenuCustomOnClick">
            <Badge dot>
              <Avatar icon="ios-person" src="/images/avatar.png" />
            </Badge>
            <Icon type="ios-arrow-down"></Icon>
            <DropdownMenu slot="list">
              <DropdownItem name="/admin/message"
                >消息中心
                <Badge :count="3" :style="{ marginLeft: '10px' }"></Badge>
              </DropdownItem>
              <DropdownItem name="/admin/logout">退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <Content class="content-wrapper">
            <div>
              <router-view />
            </div>
            <BackTop></BackTop>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
export default {
  props: {
    activeName: {
      type: [String, Number],
    },
  },
  data() {
    return {
      isCollapsed: false,
      menus: [
        {
          name: "首页",
          path: "/admin",
          icon: "md-home",
        },
        {
          name: "分类管理",
          icon: "ios-keypad",
          children: [
            {
              name: "分类列表",
              path: "/admin/category",
            },
            {
              name: "新建分类",
              path: "/admin/category/create",
            },
          ],
        },
        {
          name: "标签管理",
          path: "/admin/tag",
          icon: "md-pricetag",
        },
        {
          name: "文章管理",
          icon: "md-document",
          children: [
            {
              name: "文章列表",
              path: "/admin/article",
            },
            {
              name: "发布文章",
              path: "/admin/article/create",
            },
          ],
        },
        {
          name: "友链管理",
          icon: "ios-link",
          children: [
            {
              name: "友链列表",
              path: "/admin/link",
            },
            {
              name: "添加友链",
              path: "/admin/link/create",
            },
          ],
        },
      ],
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    openNames() {
      let openName = "";
      this.menus.map((item) => {
        if (item.children) {
          let subMenus = item.children;
          subMenus.map((subMenu) => {
            if (subMenu.path === this.activeName) {
              openName = item.name;
            }
          });
        }
      });
      return [openName];
    },
  },
  watch: {
    openNames() {
      this.$nextTick(() => {
        this.$refs.leftSideMenu.updateOpened();
      });
    },
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    dropDownMenuOnClick(name) {
      this.$router.push({ path: name });
    },
    dropDownMenuCustomOnClick(name) {
      if (name === "/admin/message") {
        this.$router.push({ path: name });
      } else if (name === "/admin/logout") {
        localStorage.removeItem("token");
        this.$router.push({ path: "/admin/login" });
      }
    },
  },
};
</script>

<style lang="scss">
.layout.main {
  height: 100vh;

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

    .custom-content-con {
      height: auto;
      padding-right: 20px;
      line-height: 64px;
      position: fixed;
      right: 20px;
      top: 0;

      .ivu-badge-dot {
        top: 16px;
      }
    }

    .menu-icon {
      transition: all 0.3s;
    }

    .rotate-icon {
      transform: rotate(-90deg);
    }
  }

  .ivu-layout-sider {
    background: #001529;
  }

  .side-menu-wrapper {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .layout-logo {
      height: 64px;
      padding: 10px;

      .logo-con {
        width: fit-content;
        margin: 0 auto;

        img {
          height: 44px;
          float: left;
        }

        span {
          display: inline-block;
          line-height: 44px;
          font-size: 25px;
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }

    .ivu-menu-dark {
      background: #001529;
    }

    .ivu-menu-dark.ivu-menu-vertical {
      .ivu-menu-item-active:not(.ivu-menu-submenu) {
        background: #000c17;
      }

      .ivu-menu-opened {
        background: #000c17;

        .ivu-menu-submenu-title {
          background: #001529;
        }
      }
    }

    a.drop-menu-a {
      display: inline-block;
      padding: 6px 15px;
      width: 100%;
      text-align: center;
      color: #495060;

      i.ivu-icon {
        font-size: 25px;
        color: #fff;
      }
    }

    .ivu-select-dropdown {
      width: auto;
    }

    .menu-collapsed {
      .ivu-dropdown,
      .ivu-dropdown .ivu-dropdown-rel a,
      .ivu-tooltip,
      .ivu-tooltip .ivu-tooltip-rel {
        width: 100%;
      }
    }
  }

  .main-content-con {
    height: calc(100vh - 64px);
    overflow: hidden;

    .main-layout-con {
      height: 100%;
      overflow: hidden;

      .content-wrapper {
        padding: 18px;
        height: calc(100% - 64px);
        overflow-x: hidden;
        overflow-y: auto;

        .i-md-content {
          margin: 1em 0;
          font-weight: 700;
        }

        .create-new-btn {
          position: absolute;
          top: 36px;
          right: 36px;
        }
      }
    }
  }
}
</style>
