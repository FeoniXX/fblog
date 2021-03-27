<template>
  <Card>
    <h2 class="i-md-content">友链管理</h2>
    <Table :columns="columns" :data="links">
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
    <Spin size="large" fix v-if="linksLoadStatus === 1"></Spin>
    <Button type="primary" @click="create" class="create-new-btn">新建</Button>
  </Card>
</template>

<script>
export default {
  name: "AdminLink",
  data() {
    return {
      columns: [
        {
          type: "index",
          width: 60,
          align: "center",
        },
        {
          title: "站点名称",
          key: "name",
          width: 150,
        },
        {
          title: "站点描述",
          key: "desc",
        },
        {
          title: "站点链接",
          key: "link",
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
    this.$store.dispatch("loadAdminLinks");
  },
  computed: {
    linksLoadStatus() {
      let status = this.$store.getters.getAdminLinksLoadStatus;
      this.beforeSubmit(status);
      return status;
    },
    links() {
      let res = this.$store.getters.getAdminLinks;
      if (res.length > 0 && res.errcode !== 0) {
        this.$Message.error(res.message);
      }
      return res.data || [];
    },
    linkDeleteStatus() {
      return this.$store.getters.getAdminLinkDeleteStatus;
    },
    linkDeleteResult() {
      return this.$store.getters.getAdminLinkDeleteResult;
    },
  },
  watch: {
    linkDeleteStatus(status) {
      this.beforeSubmit(status);
    },
    linkDeleteResult(res) {
      this.afterSubmit(res);
    },
  },
  methods: {
    edit(id) {
      this.$router.push({
        name: "AdminLinkUpdate",
        params: { id },
      });
    },
    remove(index) {
      let id = this.links[index].id;
      this.$Modal.confirm({
        title: "确定删除本条友链吗？",
        onOk: () => {
          this.$store.dispatch("deleteAdminLink", { id });
        },
      });
    },
    create() {
      this.$router.push({ name: "AdminLinkCreate" });
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
        for (let i in this.links) {
          if (this.links[i].id == id) {
            this.links.splice(i, 1);
            break;
          }
        }
        this.$forceUpdate();
      }
    },
  },
};
</script>
