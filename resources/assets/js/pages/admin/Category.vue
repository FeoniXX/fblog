<template>
  <Card>
    <h2 class="i-md-content">分类管理</h2>
    <Table :columns="columns" :data="cates">
      <template slot-scope="{ row }" slot="status">
        <Tag :color="row.status ? 'green' : 'default'">{{
          row.status ? "显示" : "不显示"
        }}</Tag>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="edit(row.id)"
          >编辑</Button
        >
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </template>
    </Table>
    <Spin size="large" fix v-if="catesLoadStatus === 1"></Spin>
    <Button type="primary" @click="create" class="create-new-btn">新建</Button>
  </Card>
</template>

<script>
export default {
  name: "AdminCategory",
  data() {
    return {
      columns: [
        {
          type: "index",
          width: 60,
          align: "center",
        },
        {
          title: "分类名称",
          key: "name",
          width: 150,
        },
        {
          title: "分类简介",
          key: "desc",
        },
        {
          title: "前台是否显示",
          slot: "status",
          width: 150,
          align: "center",
        },
        {
          title: "文章数",
          key: "count",
          width: 100,
        },
        {
          title: "操作",
          slot: "action",
          align: "center",
          width: 150,
        },
      ],
    };
  },
  created() {
    this.$store.dispatch("loadAdminCates");
  },
  computed: {
    catesLoadStatus() {
      let status = this.$store.getters.getAdminCatesLoadStatus;
      this.beforeSubmit(status);
      return status;
    },
    cates() {
      let res = this.$store.getters.getAdminCates;
      if (res.length > 0 && res.errcode !== 0) {
        this.$Message.error(res.message);
      }
      return res.data || [];
    },
    cateDeleteStatus() {
      return this.$store.getters.getAdminCateDeleteStatus;
    },
    cateDeleteResult() {
      return this.$store.getters.getAdminCateDeleteResult;
    },
  },
  watch: {
    cateDeleteStatus(status) {
      this.beforeSubmit(status);
    },
    cateDeleteResult(res) {
      this.afterSubmit(res);
    },
  },
  methods: {
    edit(id) {
      this.$router.push({
        name: "AdminCategoryUpdate",
        params: { id },
      });
    },
    remove(index) {
      let id = this.cates[index].id;
      this.$Modal.confirm({
        title: "确定删除本条分类吗？",
        onOk: () => {
          this.$store.dispatch("deleteAdminCate", { id });
        },
      });
    },
    create() {
      this.$router.push({ name: "AdminCategoryCreate" });
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
        let id = res.data.id;
        for (let i in this.cates) {
          if (this.cates[i].id == id) {
            this.cates.splice(i, 1);
            break;
          }
        }
        this.$forceUpdate();
      }
    },
  },
};
</script>
