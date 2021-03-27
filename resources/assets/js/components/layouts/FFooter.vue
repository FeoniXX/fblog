<template>
  <Footer class="layout-footer">
    <Row>
      <Col span="14" class="footer-main">
        <div class="footer-item">
          <div>
            <a
              href="https://wpa.qq.com/msgrd?v=3&uin=871472983&site=qq&menu=yes"
              target="_blank"
              class="out-link"
            >
              <i class="iconfont iconqq"></i> QQ
            </a>
          </div>
          <div>
            <a href="https://gitee.com/demo." target="_blank" class="out-link">
              <i class="iconfont icongitee"></i> Gitee
            </a>
          </div>
          <div>
            <a
              href="https://github.com/FeoniXX"
              target="_blank"
              class="out-link"
            >
              <i class="iconfont icongithub"></i> Github
            </a>
          </div>
          <div>
            <a
              href="https://feonix.blog.csdn.net"
              target="_blank"
              class="out-link"
            >
              <i class="iconfont iconcsdn"></i> CSDN
            </a>
          </div>
        </div>
        <div class="footer-item">
          <div style="font-size: 17px; font-weight: bold">资源</div>
          <div>
            <a
              target="_blank"
              href="https://segmentfault.com/weekly?utm_source=sf-footer"
              class="out-link"
              >每周精选</a
            >
          </div>
          <div>
            <a target="_blank" href="https://www.jmjc.tech/" class="out-link"
              >简明教程</a
            >
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.liaoxuefeng.com/"
              class="out-link"
              >廖雪峰的官方网站</a
            >
          </div>
        </div>
        <div class="footer-item">
          <div>本站已苟活 {{ aliveTime }}</div>
          <div>
            <a href="/admin/" target="_blank" class="out-link">☞管理后台</a>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col span="24" class="footer-copyright">
        Copyright &copy; 2021 by
        <a href="/" target="_blank">FEONIX.CN</a>. All
        rights reserved. |
        <a
          href="http://beian.miit.gov.cn/publish/query/indexFirst.action"
          target="_blank"
          >苏ICP备15016730号-2</a
        >
      </Col>
    </Row>
  </Footer>
</template>

<script>
import { formatTimeStamp } from "../../mixins/util";

export default {
  name: "FFooter",
  data() {
    return {
      startTime: new Date("2021-03-09 00:00:00"),
      aliveTime: "",
    };
  },
  mounted() {
    this.calcAliveTime();
  },
  methods: {
    calcAliveTime() {
      let now = null;
      let mss = 0;
      setInterval(() => {
        now = new Date();
        mss = now - this.startTime;
        let { sec, min, hour, day } = formatTimeStamp(mss);
        this.aliveTime = `${day} 天 ${hour} 小时 ${min} 分 ${sec} 秒`;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-footer {
  padding: 2%;
  font-size: 13px;
  color: #dddddd;
  background-color: #555555;

  .footer-main {
    max-width: 800px;
    margin: 0 auto 20px auto;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    .footer-item {
      flex: 1;

      > div:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  .footer-copyright {
    text-align: center;
  }

  a {
    color: #dddddd;
  }

  a:hover {
    color: #2d8cf0;
  }
}
</style>