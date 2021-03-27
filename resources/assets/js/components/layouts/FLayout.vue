<template>
  <Layout>
    <FHeader></FHeader>
    <FBody></FBody>
    <FFooter></FFooter>
  </Layout>
</template>

<script>
import FHeader from "./FHeader";
import FBody from "./FBody";
import FFooter from "./FFooter";

export default {
  name: "FLayout",
  components: {
    FHeader,
    FFooter,
    FBody,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>