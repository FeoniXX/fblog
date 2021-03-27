<template>
  <Card>
    <h2 class="i-md-content">
      {{ $route.name === "AdminLinkUpdate" ? "编辑友链" : "添加友链" }}
    </h2>
    <Form
      ref="linkForm"
      :label-width="80"
      :rules="rules"
      :model="formData"
      :style="{ width: '50%' }"
    >
      <FormItem label="站点名称" prop="name">
        <Input v-model="formData.name" placeholder="请输入站点名称"></Input>
      </FormItem>
      <FormItem label="站点描述" prop="desc">
        <Input
          type="textarea"
          v-model="formData.desc"
          :autosize="{ minRows: 2, maxRows: 5 }"
          placeholder="请输入站点描述内容..."
        ></Input>
      </FormItem>
      <FormItem label="站点链接" prop="link">
        <Input v-model="formData.link" placeholder="请输入站点链接"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="onSubmit('linkForm')">提交</Button>
      </FormItem>
    </Form>
    <Spin size="large" fix v-if="linkLoadStatus === 1"></Spin>
  </Card>
</template>

<script>
export default {
  name: "AdminLinkCreate",
  data() {
    return {
      rules: {
        name: [{ required: true, message: "请输入友链名称", trigger: "blur" }],
        desc: [
          { required: true, message: "请输入站点描述内容", trigger: "blur" },
        ],
        link: [{ required: true, message: "请输入站点链接", trigger: "blur" }],
      },
      submitting: false,
      formData: {
        id: 0,
        name: "",
        desc: "",
        link: "",
      },
    };
  },
  created() {
    this.$route.name === "AdminLinkUpdate" &&
      this.$store.dispatch("loadAdminLink", {
        id: this.$route.params.id,
      });
  },
  computed: {
    linkLoadStatus() {
      if (this.$route.name === "AdminLinkUpdate") {
        let status = this.$store.getters.getAdminLinkLoadStatus;
        this.beforeSubmit(status);
        this.formData = this.link;
        return status;
      }
      this.$Loading.start();
      this.$Loading.finish();
      return 2;
    },
    link() {
      if (this.$route.name === "AdminLinkUpdate") {
        let res = this.$store.getters.getAdminLink;
        if (res.length > 0 && res.errcode !== 0) {
          this.$Message.error(res.message);
        }
        return res.data || this.formData;
      }
      return this.formData;
    },
    linkCreateStatus() {
      return this.$store.getters.getAdminLinkCreateStatus;
    },
    linkCreateResult() {
      return this.$store.getters.getAdminLinkCreateResult;
    },
    linkUpdateStatus() {
      return this.$store.getters.getAdminLinkUpdateStatus;
    },
    linkUpdateResult() {
      return this.$store.getters.getAdminLinkUpdateResult;
    },
  },
  watch: {
    linkCreateStatus(status) {
      this.beforeSubmit(status);
    },
    linkCreateResult(res) {
      this.afterSubmit(res);
    },
    linkUpdateStatus(status) {
      this.beforeSubmit(status);
    },
    linkUpdateResult(res) {
      this.afterSubmit(res);
    },
  },
  methods: {
    onSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.submitting = true;
          if (this.$route.name === "AdminLinkCreate") {
            this.$store.dispatch("createAdminLink", this.formData);
          } else {
            this.$store.dispatch("updateAdminLink", this.formData);
          }
        }
      });
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
        this.$Message.success({
          content: res.message,
          onClose: () => {
            this.$router.push({ name: "AdminLink" });
          },
        });
      }
    },
  },
};
</script>
