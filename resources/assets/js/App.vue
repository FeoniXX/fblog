<template>
  <div id="app">
    <FLayout v-if="layoutType === 1"></FLayout>
    <FLayoutAdmin
      :active-name="activeSideMenuName"
      v-if="layoutType === 2"
    ></FLayoutAdmin>
    <router-view v-if="layoutType === 0" />
  </div>
</template>

<script>
import FLayout from "./components/layouts/FLayout";
import FLayoutAdmin from "./components/layouts/FLayoutAdmin";

export default {
  components: {
    FLayout,
    FLayoutAdmin,
  },
  data() {
    return {
      layoutType: 1,
      activeSideMenuName: "/admin",
    };
  },
  watch: {
    $route(to) {
      this.layoutType = to.meta.layout;
      this.activeSideMenuName = to.path;
    },
  },
};
</script>
