<template>
  <div>
    <Header class="article-header">
      <router-link class="go-back-link" to="/admin/article">
        <Icon
          :style="{ margin: '0 5px 0 20px' }"
          type="ios-arrow-back"
          size="24"
        ></Icon
        >文章管理
      </router-link>
      <div class="article-title-input-box">
        <input
          class="article-title-input"
          :placeholder="titlePlaceHolder"
          v-model="formData.title"
          @keydown="calcTitleLen"
        />
        <span class="article-title-number"
          ><span>{{ titleLen }}</span
          >/100</span
        >
      </div>
      <div class="custom-content-con">
        <Button
          type="primary"
          shape="circle"
          ghost
          :style="{ marginRight: '10px' }"
          @click="
            formData.action = 'save';
            saveArticle();
          "
          v-if="article.status !== 1 && article.status !== -1"
          >保存草稿</Button
        >
        <Button
          type="primary"
          shape="circle"
          :style="{ marginRight: '10px' }"
          @click="publishArticle"
          >发布文章</Button
        >
        <Dropdown>
          <Avatar icon="ios-person" src="/images/avatar.png" />
          <DropdownMenu slot="list">
            <DropdownItem>文章管理 </DropdownItem>
            <DropdownItem>退出登录</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Header>
    <MarkdownPro
      theme="oneDark"
      v-model="formData.content"
      :style="{ height: 'calc(100vh - 64px)' }"
      :bordered="false"
    />
    <Modal
      title="发布文章"
      v-model="showModal"
      ok-text="发布"
      width="606"
      :mask-closable="false"
      class="publish-modal"
      @on-ok="
        formData.status = 1;
        saveArticle();
      "
    >
      <Form :label-width="100" :model="formData">
        <FormItem label="文章标签：">
          <Select filterable multiple v-model="formData.tags">
            <Option v-for="tag in tags" :value="tag.id" :key="tag.id">{{
              tag.name
            }}</Option>
          </Select>
        </FormItem>
        <FormItem label="分类栏目：">
          <div class="selected-cate-list">
            <Tag
              v-for="(cate, index) in selectedCates"
              :key="index"
              color="primary"
              @on-close="unselectCate(index)"
              type="border"
              closable
              >{{ cate.name }}</Tag
            >
            <div
              class="empty-selected-cate-list"
              v-show="formData.cates.length === 0"
            >
              请选择分类栏目
            </div>
          </div>
          <div class="cate-list-box">
            <div class="cate-list-title">最多选择3个分类栏目</div>
            <div class="cate-list">
              <CheckboxGroup v-model="formData.cates">
                <Checkbox
                  v-for="cate in cates"
                  :key="cate.id"
                  :label="cate.id"
                  >{{ cate.name }}</Checkbox
                >
              </CheckboxGroup>
            </div>
            <Spin fix v-if="formData.cates.length >= 3">
              <Icon
                type="ios-remove-circle-outline"
                size="20"
                color="#e33e33"
              ></Icon>
              <div style="color: #999aaa">最多选择3个分类栏目哦~</div>
            </Spin>
          </div>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import { MarkdownPro } from "vue-meditor";
import { formatDate } from "../../mixins/util";

export default {
  name: "AdminArticleCreate",
  components: {
    MarkdownPro,
  },
  data() {
    return {
      titleLen: 0,
      showModal: false,
      formData: {
        id: 0,
        title: "",
        desc: "",
        content: "",
        cates: [],
        tags: [],
        status: 0,
      },
      selectedCates: [],
      loadStatus: 0,
    };
  },
  created() {
    this.$store.dispatch("loadAdminCates");
    this.$store.dispatch("loadAdminTags");
    this.$route.name === "AdminArticleUpdate" &&
      this.$store.dispatch("loadAdminArticle", {
        id: this.$route.params.id,
      });
    this.$Loading.start();
  },
  computed: {
    titlePlaceHolder() {
      let { year, month, day } = formatDate();
      return `${year}-${month}-${day}`;
    },
    articleLoadStatus() {
      if (this.$route.name === "AdminArticleUpdate") {
        this.formData = this.article;
        this.calcTitleLen();
        return this.$store.getters.getAdminArticleLoadStatus;
      }
      this.loadStatus++;
      return 2;
    },
    article() {
      if (this.$route.name === "AdminArticleUpdate") {
        let res = this.$store.getters.getAdminArticle;
        if (res.length > 0 && res.errcode !== 0) {
          this.$Message.error(res.message);
        }
        return res.data || this.formData;
      }
      return this.formData;
    },
    catesLoadStatus() {
      return this.$store.getters.getAdminCatesLoadStatus;
    },
    cates() {
      let res = this.$store.getters.getAdminCates;
      if (res.length > 0 && res.errcode !== 0) {
        this.$Message.error(res.message);
      }
      return res.data || [];
    },
    tagsLoadStatus() {
      return this.$store.getters.getAdminTagsLoadStatus;
    },
    tags() {
      let res = this.$store.getters.getAdminTags;
      if (res.length > 0 && res.errcode !== 0) {
        this.$Message.error(res.message);
      }
      return res.data || [];
    },
    articleCreateStatus() {
      return this.$store.getters.getAdminArticleCreateStatus;
    },
    articleCreateResult() {
      return this.$store.getters.getAdminArticleCreateResult;
    },
    articleUpdateStatus() {
      return this.$store.getters.getAdminArticleUpdateStatus;
    },
    articleUpdateResult() {
      return this.$store.getters.getAdminArticleUpdateResult;
    },
  },
  watch: {
    loadStatus(val) {
      if (val === 3) {
        this.$Loading.finish();
      }
    },
    articleLoadStatus(status) {
      if (status === 2) {
        this.loadStatus++;
      }
    },
    catesLoadStatus(status) {
      if (status === 2) {
        this.loadStatus++;
      }
    },
    tagsLoadStatus(status) {
      if (status === 2) {
        this.loadStatus++;
      }
    },
    "formData.cates": {
      handler(val) {
        this.selectedCates = [];
        for (let i in val) {
          for (let j in this.cates) {
            if (this.cates[j].id === val[i]) {
              this.selectedCates.push(this.cates[j]);
              break;
            }
          }
        }
      },
    },
    "formData.content": {
      handler() {
        setTimeout(() => {
          let content = document.getElementsByClassName("markdown-preview")[0]
            .innerText;
          this.$set(
            this.formData,
            "desc",
            content.replace(/\n/g, "").substring(0, 200)
          );
        });
      },
    },
    articleUpdateStatus(status) {
      this.beforeSubmit(status);
    },
    articleUpdateResult(res) {
      this.afterSubmit(res);
    },
    articleCreateStatus(status) {
      this.beforeSubmit(status);
    },
    articleCreateResult(res) {
      this.afterSubmit(res);
    },
  },
  methods: {
    saveArticle() {
      if (this.formData.id > 0) {
        this.$store.dispatch("updateAdminArticle", this.formData);
      } else {
        this.$store.dispatch("createAdminArticle", this.formData);
      }
    },
    publishArticle() {
      this.showModal = true;
      this.formData.action = "publish";
    },
    calcTitleLen() {
      this.titleLen = this.article.title.length;
      if (this.titleLen >= 100) {
        this.titleLen = 100;
        this.article.title = this.article.title.slice(0, 100);
      }
    },
    unselectCate(index) {
      this.article.cates.splice(index, 1);
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
        if (this.formData.action === "save") {
          this.$Message.success(res.message);
          this.formData.id = res.data.id;
        } else {
          this.$Message.success({
            content: res.message,
            onClose: () => {
              this.$router.push({ name: "AdminArticle" });
            },
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.article-header {
  display: flex;
  background: #f3f3f3;
  border-bottom: 1px solid #d9d9d9;
  padding: 0;

  .go-back-link {
    display: flex;
    width: 200px;
    line-height: 64px;
    font-size: 18px;
    color: #6d6d6d;

    i {
      line-height: 64px;
    }
  }

  .article-title-input-box {
    display: flex;
    width: 100%;
    margin: 8px 16px 8px 8px;
    border: 1px solid #ccc;
    border-radius: 21px;
    background-color: #fff;

    .article-title-input {
      width: 100%;
      margin-left: 4px;
      border-radius: 18px;
      padding: 8px;
      font-size: 18px;
      line-height: 24px;
      background-color: #fff;
      background-image: none;
      border: 0;
      outline: none;
    }

    .article-title-number {
      float: right;
      line-height: 46px;
      font-size: 20px;
      margin-right: 8px;
    }
  }

  .custom-content-con {
    display: flex;
    align-items: center;
    float: right;
    height: auto;
    padding-right: 40px;
    line-height: 64px;
  }
}
.publish-modal {
  .selected-cate-list {
    min-height: 35px;
  }
  .cate-list-box {
    position: relative;
    width: 99%;
    height: 160px;
    margin-top: 8px;
    border-radius: 4px;
    border: 1px solid #e8e8ee;
    padding: 0 16px;

    .cate-list-title {
      height: 36px;
      line-height: 36px;
      border-bottom: 1px solid #e8e8ee;
    }
  }
}
</style>