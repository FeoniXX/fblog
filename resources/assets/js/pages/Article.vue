<template>
  <Row :gutter="20" class="home">
    <Col span="17" class="page-main">
      <Notify
        :type="type"
        :category="category"
        :tag="tag"
        :keyword="keyword"
      ></Notify>
      <ArticleItem></ArticleItem>
      <ArticleItem></ArticleItem>
      <ArticleItem></ArticleItem>
      <ArticleItem></ArticleItem>
    </Col>
    <Col span="7" class="page-aside">
      <Aside ref="aside"></Aside>
    </Col>
  </Row>
</template>

<script>
import Aside from "../components/Aside";
import Notify from "../components/Notify";
import ArticleItem from "../components/ArticleItem";

export default {
  name: "Article",
  components: {
    Aside,
    Notify,
    ArticleItem,
  },
  data() {
    return {
      type: "all",
      category: "",
      tag: "",
      keyword: "",
      categories: [],
      tags: [],
    };
  },
  mounted() {
    this.categories = this.$refs.aside.categories;
    this.tags = this.$refs.aside.tags;
    let routeName = this.$route.name;

    if (routeName === "CategoryArticle") {
      this.type = "category";
      let categoryid = parseInt(this.$route.params.id || 0);
      let cateObj = null;
      this.categories.map((item) => {
        if (item.id === categoryid) {
          cateObj = item;
          return;
        }
      });
      if (cateObj) {
        this.category = cateObj.title;
      }
    } else if (routeName === "TagArticle") {
      this.type = "tag";
      let tagid = parseInt(this.$route.params.id || 0);
      let tagObj = null;
      this.tags.map((item) => {
        if (item.id === tagid) {
          tagObj = item;
          return;
        }
      });
      if (tagObj) {
        this.tag = tagObj.title;
      }
    } else if (routeName === "SearchArticle") {
      this.type = "keyword";
      let keyword = this.$route.params.keyword || "";
      this.keyword = keyword;
    } else {
      this.type = "all";
    }
  },
  watch: {
    $route(to) {
      let routeName = this.$route.name;

      if (routeName === "CategoryArticle") {
        this.type = "category";
        let categoryid = parseInt(to.params.id || 0);
        let cateObj = null;
        this.categories.map((item) => {
          if (item.id === categoryid) {
            cateObj = item;
            return;
          }
        });
        if (cateObj) {
          this.category = cateObj.title;
        }
      } else if (routeName === "TagArticle") {
        this.type = "tag";
        let tagid = parseInt(to.params.id || 0);
        let tagObj = null;
        this.tags.map((item) => {
          if (item.id === tagid) {
            tagObj = item;
            return;
          }
        });
        if (tagObj) {
          this.tag = tagObj.title;
        }
      } else if (routeName === "SearchArticle") {
        this.type = "keyword";
        let keyword = this.$route.params.keyword || "";
        this.keyword = keyword;
      } else {
        this.type = "all";
      }
    },
  },
};
</script>