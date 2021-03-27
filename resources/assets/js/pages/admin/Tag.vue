<template>
  <Card>
    <h2 class="i-md-content">分类管理</h2>
    <div class="tag-list">
      <Tag
        v-for="(tag, index) in tags"
        :key="tag.id"
        :color="setColor(index)"
        :name="tag.name"
        @on-close="deleteTag(index)"
        type="dot"
        closable
        >{{ tag.name }}</Tag
      >
      <div class="add-tag" @click="showAddTagInput">
        <Icon type="ios-add"></Icon>
        <input
          type="text"
          ref="addTagInput"
          class="add-tag-input"
          :class="{ show: isShowAddTagInput }"
          @keyup.enter="addTag"
          @blur="isShowAddTagInput = false"
        />
      </div>
    </div>
    <Spin size="large" fix v-if="tagsLoadStatus === 1"></Spin>
  </Card>
</template>

<script>
export default {
  name: "AdminTag",
  data() {
    return {
      isShowAddTagInput: false,
    };
  },
  created() {
    this.$store.dispatch("loadAdminTags");
  },
  computed: {
    tagsLoadStatus() {
      let status = this.$store.getters.getAdminTagsLoadStatus;
      this.beforeSubmit(status);
      return status;
    },
    tags() {
      let res = this.$store.getters.getAdminTags;
      if (res.length > 0 && res.errcode !== 0) {
        this.$Message.error(res.message);
      }
      return res.data || [];
    },
    tagCreateStatus() {
      return this.$store.getters.getAdminTagCreateStatus;
    },
    tagCreateResult() {
      return this.$store.getters.getAdminTagCreateResult;
    },
    tagDeleteStatus() {
      return this.$store.getters.getAdminTagDeleteStatus;
    },
    tagDeleteResult() {
      return this.$store.getters.getAdminTagDeleteResult;
    },
  },
  watch: {
    tagCreateStatus(status) {
      this.beforeSubmit(status);
    },
    tagCreateResult(res) {
      this.afterSubmit(res, "create");
    },
    tagDeleteStatus(status) {
      this.beforeSubmit(status);
    },
    tagDeleteResult(res) {
      this.afterSubmit(res, "delete");
    },
  },
  methods: {
    setColor(index) {
      if (index % 4 === 0) {
        return "primary";
      } else if (index % 3 === 0) {
        return "success";
      } else if (index % 2 === 0) {
        return "error";
      } else {
        return "warning";
      }
    },
    showAddTagInput() {
      this.isShowAddTagInput = true;
      this.$refs.addTagInput.focus();
    },
    deleteTag(index) {
      let id = this.tags[index].id;
      this.$Modal.confirm({
        title: "确定删除本条标签吗？",
        onOk: () => {
          this.$store.dispatch("deleteAdminTag", { id });
        },
      });
    },
    addTag() {
      let name = this.$refs.addTagInput.value.trim();
      if (!name) {
        return;
      }
      this.$store.dispatch("createAdminTag", { name });
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
    afterSubmit(res, action) {
      if (res.errcode !== 0) {
        this.$Message.error(res.message);
      } else {
        this.$Message.success(res.message);
        if (action === "delete") {
          let id = res.data.id;
          for (let i in this.tags) {
            if (this.tags[i].id == id) {
              this.tags.splice(i, 1);
              break;
            }
          }
        }
        if (action === "create") {
          this.tags.push(res.data);
          this.$refs.addTagInput.value = "";
          this.$refs.addTagInput.blur();
        }
        this.$forceUpdate();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.add-tag {
  display: inline-block;
  height: 32px;
  line-height: 32px;
  margin: 2px 4px 2px 0;
  padding: 0 8px;
  border: 1px dashed #e8eaec;
  border-radius: 3px;
  background: #fff;
  font-size: 16px;
  color: #515a6e;
  vertical-align: middle;
  overflow: hidden;

  .ivu-icon-ios-add {
    position: relative;
    top: -2px;
  }

  .add-tag-input {
    width: 0;
    height: 22px;
    border: 0;
    outline: none;
    font-size: 12px;
    color: #515a6e;
    position: relative;
    top: -3px;
    transition: all 0.2s;
  }
  .add-tag-input.show {
    width: 80px;
  }
}

.add-tag:focus-within,
.add-tag:hover,
.ivu-tag:hover {
  border-color: #2d8cf0 !important;
  color: #2d8cf0;
  cursor: pointer;
}
</style>