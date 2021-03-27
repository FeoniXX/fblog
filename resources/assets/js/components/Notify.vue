<template>
  <Card class="notify" dis-hover>{{ types[type] }}</Card>
</template>

<script>
export default {
  name: "Notify",
  props: {
    type: String,
    category: String,
    tag: String,
    keyword: String,
  },
  data() {
    return {
      types: {
        recommend: "推荐文章",
        all: "所有文章",
        category: `分类 "${this.category}" 相关文章`,
        tag: `标签 "${this.tag}" 相关文章`,
        keyword: `搜索 "${this.keyword}" 相关文章`,
      },
    };
  },
  watch: {
    category(newVal) {
      this.$set(this.types, "category", `分类 "${newVal}" 相关文章`);
    },
    tag(newVal) {
      this.$set(this.types, "tag", `标签 "${newVal}" 相关文章`);
    },
    keyword(newVal) {
      this.$set(this.types, "keyword", `搜索 "${newVal}" 相关文章`);
    },
  },
};
</script>

<style lang="scss" scoped>
.notify {
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 26px;
  margin-bottom: 20px;
  color: #6f6f6f;
}
</style>