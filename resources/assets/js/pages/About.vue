<template>
  <div class="about">
    <div class="site-main">
      <div class="about-info site-info">
        <h1 class="section-title"><span>❤</span>关于博客</h1>
        <div class="section-content">
          <p>
            博客开源
            <a href="" target="_blank" class="out-link">Gitee仓库</a> |
            <a href="" target="_blank" class="out-link">Github仓库</a
            >记得Star★哟~
          </p>
          <p>涉及技术包括Vue、Vue-Router、MarkdownIt、highlight.js</p>
          <p>
            学无止境，技术无巅峰，努力探索，开拓创新
          </p>
        </div>
      </div>
      <div class="about-info guest-me">
        <h1 class="section-title"><span>❤</span>给我留言</h1>
        <div class="section-content">
          <div class="form">
            <div class="form-item">
              <label for="mail">邮箱</label>
              <input type="email" id="mail" class="form-input" />
            </div>
            <div class="form-item">
              <label for="content">内容</label>
              <textarea id="content" class="form-input"></textarea>
            </div>
            <div class="form-item">
              <label for="mail">邮箱验证</label>
              <div class="form-item-inline">
                <input type="text" id="verify" class="form-input" />
                <button
                  :disabled="codeBtnDisabled"
                  class="code-btn"
                  :class="{ disabled: codeBtnDisabled }"
                >
                  获取验证码
                </button>
              </div>
            </div>
            <div class="form-item">
              <label></label>
              <button
                :disabled="submitBtnDisabled"
                :class="{ disabled: submitBtnDisabled }"
              >
                提交
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      submitBtnDisabled: true,
      codeBtnDisabled: true
    };
  }
};
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: space-around;
}
.site-main {
  padding: 0 10px;
  width: 800px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 4px;

  .about-info {
    margin: 30px 0;

    h1.section-title {
      color: #757575;
      font-size: 16px;
      font-weight: 400;
      padding-bottom: 15px;
      border-bottom: 1px dashed #ececec;
    }

    .section-content {
      min-height: 100px;
      padding: 20px;

      p {
        line-height: 1.7rem;
        margin-bottom: 10px;
      }
    }

    span {
      color: #2d8cf0;
      margin-right: 10px;
    }

    .form {
      width: 100%;
      padding: 20px;

      .form-item {
        align-items: center;
        display: flex;

        label {
          width: 100px;
        }

        .form-item-inline {
          width: 100%;
        }

        .form-input {
          min-height: 40px;
          line-height: 20px;
          border-radius: 3px;
          padding: 2px 10px;
          outline: none;
          border: 1px solid #58a3f3;
          width: 100%;
          resize: vertical;
        }

        button {
          width: 100px;
          height: 40px;
          border-radius: 3px;
          outline: 0;
          border-style: none;
          cursor: pointer;
          background-color: #409eff;
          color: #fff;
        }

        button.code-btn {
          margin-left: 8%;
        }

        button.disabled {
          opacity: 0.3;
        }

        #content {
          min-height: 70px;
          max-height: 100px;
          resize: none;
        }

        #verify {
          width: 60%;
        }
      }

      .form-item:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }

  .about-info:not(:last-child) {
    border-bottom: 1px solid #ececec;
  }
}
</style>
