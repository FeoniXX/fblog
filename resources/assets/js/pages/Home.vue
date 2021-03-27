<template>
  <Row :gutter="20" class="home">
    <Col span="17" class="page-main">
      <Notify type="recommend"></Notify>
      <ArticleItem></ArticleItem>
      <ArticleItem></ArticleItem>
      <ArticleItem></ArticleItem>
      <ArticleItem></ArticleItem>
    </Col>
    <Col span="7" class="page-aside">
      <Aside></Aside>
    </Col>
  </Row>
</template>

<script>
import Aside from "../components/Aside";
import Notify from "../components/Notify";
import ArticleItem from "../components/ArticleItem";

export default {
  name: "Home",
  components: {
    Aside,
    Notify,
    ArticleItem,
  },
};
</script>