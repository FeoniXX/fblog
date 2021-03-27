<template>
  <div class="login">
    <Form
      class="login-form"
      ref="loginForm"
      :model="formData"
      :rules="loginRules"
      @keyup.native.enter.prevent="onSubmit('loginForm')"
    >
      <div class="form-title">
        <h3 class="title">管理员登录</h3>
      </div>
      <FormItem prop="username">
        <Input
          prefix="ios-person-outline"
          type="text"
          placeholder="用户名"
          v-model="formData.username"
        >
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input
          prefix="ios-lock-outline"
          :type="passwdInptType"
          placeholder="密码"
          v-model="formData.password"
        >
          <Icon
            :type="passwdInptType === 'password' ? 'md-eye-off' : 'md-eye'"
            slot="suffix"
            @click="
              passwdInptType =
                passwdInptType === 'password' ? 'text' : 'password'
            "
          />
        </Input>
      </FormItem>
      <FormItem>
        <Button class="login-btn" type="primary" @click="onSubmit('loginForm')"
          >登录</Button
        >
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "AdminLogin",
  data() {
    return {
      passwdInptType: "password",
      loginRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "密码长度不能低于6位字符",
            trigger: "blur",
          },
        ],
      },
      formData: {
        username: "",
        password: "",
      },
    };
  },
  mounted() {
    let token = localStorage.getItem("token");
    if (token) {
      this.$router.push({ name: "AdminHome" });
    }
  },
  methods: {
    onSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success({
            content: "登录成功~",
            duration: 3,
            onClose: () => {
              localStorage.setItem("token", this.formData.username);
              this.$router.push({ name: "AdminHome" });
            },
          });
        } else {
          this.$Message.error("登录失败！");
        }
      });
    },
  },
};
</script>

<style lang="scss">
.login {
  width: 100vw;
  min-height: 100vh;
  background-color: #2d3a4b;
  overflow: hidden;

  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 520px;
    max-width: 100%;
    padding: 60px 35px;
    margin: -200px auto auto -260px;
    overflow: hidden;
    border: 1px solid #eee;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
    background-color: #ffffff;

    .form-title {
      position: relative;

      .title {
        font-size: 26px;
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: 700;
      }
    }

    .ivu-form-item {
      .ivu-input {
        height: 47px;
      }
    }

    .ivu-input-prefix i,
    .ivu-input-suffix i {
      line-height: 47px;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>