<template>
  <Card>
    <h2 class="i-md-content">文章管理</h2>
    <Tabs v-model="formData.status" @on-click="search">
      <TabPane label="全部" name="all"></TabPane>
      <TabPane label="草稿箱" name="draft"></TabPane>
      <TabPane label="回收站" name="trash"></TabPane>
    </Tabs>
    <Form ref="formSearch" :model="formData" inline>
      <FormItem prop="daterange">
        <DatePicker
          clearable
          type="daterange"
          placeholder="请选择日期"
          v-model="formData.daterange"
        ></DatePicker>
      </FormItem>
      <FormItem prop="keyword">
        <Input
          clearable
          type="text"
          placeholder="请输入关键词"
          v-model="formData.keyword"
        ></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="search">搜索</Button>
      </FormItem>
    </Form>
    <div class="article-list">
      <div
        class="article-item"
        v-for="(article, index) in articles.articles"
        :key="index"
      >
        <div class="entry">
          <h1 class="title">
            <router-link :to="`/article/detail/${article.id}`" target="_blank">
              <span class="is-top" v-if="article.top">[置顶]</span>
              <span class="is-draft" v-if="article.status === 0">[草稿]</span>
              {{ article.title }}
            </router-link>
          </h1>
          <p class="description">{{ article.desc }}</p>
          <div class="footer">
            <div class="footer-item time">
              <Icon type="ios-time-outline" />
              {{ article.created_at }}
            </div>
            <div class="footer-item views">
              <Icon type="ios-eye-outline" />
              {{ article.views }}
            </div>
            <div class="footer-item-group right">
              <div class="footer-item">
                <router-link :to="`/admin/article/update/${article.id}`"
                  >编辑</router-link
                >
              </div>
              <div class="footer-item">
                <router-link
                  :to="`/article/detail/${article.id}`"
                  target="_blank"
                  >浏览</router-link
                >
              </div>
              <div class="footer-item">
                <a
                  href="javascript:;"
                  @click="setTop(article.id, article.top)"
                  >{{ article.top ? "取消置顶" : "置顶" }}</a
                >
              </div>
              <div class="footer-item">
                <a
                  href="javascript:;"
                  style="color: #ff6d6d"
                  @click="
                    article.status === -1
                      ? recover(article.id)
                      : remove(article.id)
                  "
                  >{{ article.status === -1 ? "恢复" : "删除" }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="article-item empty-data" v-if="articles.total === 0">
        <Icon type="ios-book-outline"></Icon>
        <div style="color: #999aaa">空空如也</div>
      </div>
    </div>
    <Page
      v-if="articles.total > 0"
      :current="formData.page"
      :total="articles.total"
      :style="{ textAlign: 'center', marginTop: '20px' }"
    />
    <Button type="primary" @click="create" class="create-new-btn">新建</Button>
  </Card>
</template>

<script>
export default {
  name: "AdminArticlegory",
  data() {
    return {
      formData: {
        daterange: [],
        keyword: "",
        status: "all",
        page: 1,
      },
    };
  },
  created() {
    this.$store.dispatch("loadAdminArticles", this.formData);
  },
  computed: {
    articlesLoadStatus() {
      let status = this.$store.getters.getAdminArticlesLoadStatus;
      this.beforeSubmit(status);
      return status;
    },
    articles() {
      let res = this.$store.getters.getAdminArticles;
      if (res.length > 0 && res.errcode !== 0) {
        this.$Message.error(res.message);
      }
      return res.data || [];
    },
    articleDeleteStatus() {
      return this.$store.getters.getAdminArticleDeleteStatus;
    },
    articleDeleteResult() {
      return this.$store.getters.getAdminArticleDeleteResult;
    },
    articleSetTopStatus() {
      return this.$store.getters.getAdminArticleSetTopStatus;
    },
    articleSetTopResult() {
      return this.$store.getters.getAdminArticleSetTopResult;
    },
    articleRecoverStatus() {
      return this.$store.getters.getAdminArticleRecoverStatus;
    },
    articleRecoverResult() {
      return this.$store.getters.getAdminArticleRecoverResult;
    },
  },
  watch: {
    articleDeleteStatus(status) {
      this.beforeSubmit(status);
    },
    articleDeleteResult(res) {
      this.afterSubmit(res);
    },
    articleSetTopStatus(status) {
      this.beforeSubmit(status);
    },
    articleSetTopResult(res) {
      this.afterSubmit(res);
    },
    articleRecoverStatus(status) {
      this.beforeSubmit(status);
    },
    articleRecoverResult(res) {
      this.afterSubmit(res);
    },
  },
  methods: {
    search() {
      this.$store.dispatch("loadAdminArticles", this.formData);
    },
    remove(id) {
      this.$Modal.confirm({
        title: "确定删除本篇文章吗？",
        onOk: () => {
          this.$store.dispatch("deleteAdminArticle", { id });
        },
      });
    },
    recover(id) {
      this.$Modal.confirm({
        title: "确定恢复本篇文章吗？",
        onOk: () => {
          this.$store.dispatch("recoverAdminArticle", { id });
        },
      });
    },
    setTop(id, top) {
      this.$Modal.confirm({
        title: `确定${top === 0 ? "置顶" : "取消置顶"}本篇文章吗？`,
        onOk: () => {
          this.$store.dispatch("setTopAdminArticle", { id, top });
        },
      });
    },
    create() {
      this.$router.push({ name: "AdminArticleCreate" });
    },
    beforeSubmit(status) {
      if (status === 1) {
        this.$Loading.start();
      } else if (status === 2) {
        this.$Loading.finish();
      } else if (status === 3) {
        this.$Loading.error();
      }
    },
    afterSubmit(res) {
      if (res.errcode !== 0) {
        this.$Message.error(res.message);
      } else {
        this.$Message.success(res.message);
        this.$store.dispatch("loadAdminArticles", this.formData);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ivu-form-item {
  margin-bottom: 0;
}
.article-item {
  width: 100%;
  border-bottom: 1px dotted #ddd;
  padding: 1rem 0 1rem 0;
  color: #999;
  font-size: 14px;

  .entry {
    .title {
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
      position: relative;
      z-index: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      color: #555666;
      margin-bottom: 16px;

      a {
        color: #737373;
      }

      a:hover {
        color: #2d8cf0;
      }

      .is-top {
        color: #ff6d6d;
        font-weight: 600;
      }

      .is-draft {
        color: #969696;
        font-weight: 600;
      }
    }

    .description {
      width: 100%;
      line-height: 22px;
      margin-bottom: 10px;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .footer {
      width: 100%;
      height: 30px;
      font-size: 14px;

      .footer-item {
        float: left;
        margin: 0 15px 0 0;
      }

      .footer-item-group.right {
        float: right;
      }
    }
  }
}
.article-item.empty-data {
  text-align: center;
  height: 400px;
  border: none;

  .ivu-icon {
    font-size: 50px;
    line-height: 80px;
    margin-top: 100px;
  }
}
</style>