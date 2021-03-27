<template>
  <div class="link">
    <div class="site-main">
      <div class="link-info">
        <h1 class="section-title"><span>❤</span>友链</h1>
        <div class="section-content">
          <p>
            首先需要接入本博客站点，然后给我<router-link to="/about"
              >留言</router-link
            >提供您站点的如下信息：
          </p>
          <div class="quote">
            <p>站点名称：Fblog</p>
            <p>站点链接：https://blog.feonix.cn</p>
            <p>简短描述：学无止境，技术无巅峰，努力探索，开拓创新</p>
          </div>
          <p>接入成功后将会以邮件的方式通知。</p>
        </div>
        <hr />
        <div class="link-list">
          <div class="link-item">
            <a href="https://www.fengziy.cn" target="_blank">
              <div class="site-name">FZY</div>
              <div class="site-desc">一个It技术的探索者.</div>
            </a>
          </div>
          <div class="link-item">
            <a href="https://www.myong.top" target="_blank">
              <div class="site-name">Mr.Yong</div>
              <div class="site-desc">
                学无止境，个人日记，常用工具，在线留言，友情链接以及关于博客
              </div>
            </a>
          </div>
          <div class="link-item">
            <a href="https://codelin.site" target="_blank">
              <div class="site-name">追梦者博客</div>
              <div class="site-desc">不畏将来，不念过往。</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Link",
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.link {
  display: flex;
  justify-content: space-around;
}

.site-main {
  padding: 0 10px;
  width: 800px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 4px;

  .link-info {
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

      .quote {
        border-left: 3px solid #2d8cf0;
        background-color: #fbfbfb;
        padding: 15px 20px;
        border-radius: 3px;

        p {
          margin: 0;
        }
      }
    }

    span {
      color: #2d8cf0;
      margin-right: 10px;
    }

    hr {
      margin: 0 0 40px 0;
      border: 0;
      height: 1px;
      background-image: linear-gradient(
        90deg,
        transparent,
        rgba(46, 140, 240, 0.75),
        transparent
      );
    }

    .link-list {
      width: 100%;
      padding: 0 20px;

      .link-item {
        display: inline-block;
        width: 30%;
        margin: 0 4% 20px 0;
        padding: 10px 30px;
        border: 1px solid #ececec;
        border-radius: 3px;

        .site-name {
          color: #2d8cf0;
          border-bottom: 1px dotted #ececec;
        }

        .site-desc {
          font-size: 13px;
          padding-top: 10px;
          color: #515a6e;
        }

        .site-name,
        .site-desc {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-bottom: 10px;
          line-height: 1.5rem;
        }
      }

      .link-item:nth-of-type(3n) {
        margin-right: 0;
      }

      .link-item:hover {
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%);
      }
    }
  }
}
</style>
