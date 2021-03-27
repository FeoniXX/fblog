<template>
  <Card>
    <h2 class="i-md-content">
      {{ $route.name === "AdminCategoryUpdate" ? "编辑分类" : "新建分类" }}
    </h2>
    <Form
      ref="categoryForm"
      :label-width="80"
      :rules="rules"
      :model="formData"
      :style="{ width: '50%' }"
    >
      <FormItem label="分类名称" prop="name">
        <Input v-model="formData.name" placeholder="请输入分类名称"></Input>
      </FormItem>
      <FormItem label="分类简介" prop="desc">
        <Input
          type="textarea"
          v-model="formData.desc"
          :autosize="{ minRows: 2, maxRows: 5 }"
          placeholder="请输入关于分类的简单介绍内容..."
        ></Input>
      </FormItem>
      <FormItem label="前端显示">
        <RadioGroup v-model="formData.status">
          <Radio :label="1">显示</Radio>
          <Radio :label="0">不显示</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="onSubmit('categoryForm')">提交</Button>
      </FormItem>
    </Form>
    <Spin size="large" fix v-if="cateLoadStatus === 1"></Spin>
  </Card>
</template>

<script>
export default {
  name: "AdminCategoryCreate",
  data() {
    return {
      rules: {
        name: [{ required: true, message: "请输入分类名称", trigger: "blur" }],
      },
      submitting: false,
      formData: {
        id: 0,
        name: "",
        desc: "",
        status: 1,
      },
    };
  },
  created() {
    this.$route.name === "AdminCategoryUpdate" &&
      this.$store.dispatch("loadAdminCate", {
        id: this.$route.params.id,
      });
  },
  computed: {
    cateLoadStatus() {
      if (this.$route.name === "AdminCategoryUpdate") {
        let status = this.$store.getters.getAdminCateLoadStatus;
        this.beforeSubmit(status);
        this.formData = this.cate;
        return status;
      }
      this.$Loading.start();
      this.$Loading.finish();
      return 2;
    },
    cate() {
      if (this.$route.name === "AdminCategoryUpdate") {
        let res = this.$store.getters.getAdminCate;
        if (res.length > 0 && res.errcode !== 0) {
          this.$Message.error(res.message);
        }
        return res.data || this.formData;
      }
      return this.formData;
    },
    cateCreateStatus() {
      return this.$store.getters.getAdminCateCreateStatus;
    },
    cateCreateResult() {
      return this.$store.getters.getAdminCateCreateResult;
    },
    cateUpdateStatus() {
      return this.$store.getters.getAdminCateUpdateStatus;
    },
    cateUpdateResult() {
      return this.$store.getters.getAdminCateUpdateResult;
    },
  },
  watch: {
    cateCreateStatus(status) {
      this.beforeSubmit(status);
    },
    cateCreateResult(res) {
      this.afterSubmit(res);
    },
    cateUpdateStatus(status) {
      this.beforeSubmit(status);
    },
    cateUpdateResult(res) {
      this.afterSubmit(res);
    },
  },
  methods: {
    onSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.submitting = true;
          if (this.$route.name === "AdminCategoryCreate") {
            this.$store.dispatch("createAdminCate", this.formData);
          } else {
            this.$store.dispatch("updateAdminCate", this.formData);
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
            this.$router.push({ name: "AdminCategory" });
          },
        });
      }
    },
  },
};
</script>