<template>
  <Row :gutter="20" class="detail">
    <Col span="17" class="page-main">
      <div class="banner">
        <div class="banner-content">
          <h1 class="title">Java编写自己的区块链应用</h1>
          <div class="time-views-info">
            <div class="info-item time">
              <Icon type="ios-time-outline" />
              发表于：2021-03-08 21:16:37
            </div>
            <div class="info-item views">
              <Icon type="ios-eye-outline" />
              阅读量：123
            </div>
          </div>
          <div class="cate-tags-info">
            <div class="info-item cate">
              分类栏目：<router-link to="/article/category/1"
                ><Tag color="blue">Java</Tag></router-link
              >
            </div>
            <div class="info-item tags">
              文章标签：<router-link to="/article/tag/1"
                ><Tag color="blue">Java</Tag></router-link
              >&emsp;
              <router-link to="/article/tag/3"
                ><Tag color="blue">区块链</Tag></router-link
              >
            </div>
          </div>
          <div class="donate" @click="isShowDonate = !isShowDonate">
            <span>赏</span>
            <ul class="donate-inner" v-show="isShowDonate">
              <li class="wxpay">
                <img src="/images/wxpay.png" />
                <p>微信</p>
              </li>
              <li class="alipay">
                <img src="/images/alipay.png" />
                <p>支付宝</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <MarkdownPreview
        :initialValue="content"
        theme="oneDark"
        class="content"
        @on-copy="onCopyed"
      ></MarkdownPreview>
      <div class="open-message">
        <p>
          版权声明：本文由Fblog博客版权所有，遵循<a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            >CC 4.0 BY-SA</a
          >版权协议，转载请附上原文出处链接及本声明。
        </p>
        <p>
          原文链接：
          <a :href="articleUrl" target="_blank">{{ articleUrl }}</a>
        </p>
      </div>
    </Col>
    <Col span="7" class="page-aside">
      <Aside></Aside>
    </Col>
  </Row>
</template>

<script>
import Aside from "../components/Aside";
import { addCopyRight } from "../mixins/util";
import { MarkdownPreview } from "vue-meditor";

document.oncopy = addCopyRight;

export default {
  name: "Detail",
  components: {
    Aside,
    MarkdownPreview,
  },
  data() {
    return {
      isShowDonate: false,
      articleUrl: document.location.href,
      content: `
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201223130257514.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI1ODc1Njg=,size_16,color_FFFFFF,t_70)

关于区块链技术，网络上有很多入门、科普的文章，如果大家对于区块链感兴趣，应该已经通过网络了解区块链的基本概念了，这里就不再赘述基本概念了。

相信阅读本文章的朋友们应该都和我一样对于区块链技术感到新奇，都想知道区块链在代码上怎么实现的，所以本文是实战为主，理论为辅的，毕竟大家应该都看过不少的理论文章了，但是对于区块链具体实现还不是很清楚，本文就是用Java语言来实现一个简易的区块链。

# 准备工作
使用Java语言编写区块链程序，需要掌握基本的JavaSE以及JavaWeb开发，能够使用Java开发简单的项目，并且对于HTTP协议有一定的了解。

相信大家都听说过区块链的记录构成是不可变、有序的链结构，记录可以是交易、文件或任何你想要的数据，重要的是它们是通过哈希值（Hash）连接起来的。

如果你还不知道什么是哈希，可以查看 [这篇文章](https://baike.baidu.com/item/Hash/390310?fr=aladdin) 。

# 开发环境
* JDK 1.8
* Tomcat 9.0
* Maven 3.6
* IntelliJ IDEA 2018及以上版本
* Springboot 2.3.7.RELEASE
* alibaba fastjson 1.2.47
* Postman

pom.xml文件配置内容：

\`\`\`xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
        <exclusions>
            <exclusion>
                <groupId>org.junit.vintage</groupId>
                <artifactId>junit-vintage-engine</artifactId>
            </exclusion>
        </exclusions>
    </dependency>
    <dependency>
        <groupId>com.alibaba</groupId>
        <artifactId>fastjson</artifactId>
        <version>1.2.47</version>
    </dependency>
</dependencies>
\`\`\`
      `,
    };
  },
  methods: {
    onCopyed() {
      this.$Message.success("复制成功");
    },
  },
};
</script>

<style lang="scss" scoped>
.page-main {
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%);

  .banner {
    height: 280px;
    margin-left: -10px;
    margin-right: -10px;
    background: url(/images/banner.jpg);
    background-size: cover;
    border-radius: 4px 4px 0 0;

    .banner-content {
      width: 100%;
      height: 280px;
      padding: 20px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.6);
      position: relative;
      border-radius: 4px 4px 0 0;

      .title {
        font-size: 26px;
        font-weight: 500;
        margin: 20px 0;
      }

      .time-views-info,
      .cate-tags-info {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        padding: 20px 0;
        margin: 20px 0;

        .info-item {
          float: left;
          margin: 0 15px 0 0;
        }
      }

      .donate {
        position: absolute;
        top: 60px;
        right: 40px;
        width: 36px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border: 1px solid #fff;
        border-radius: 100%;
        cursor: pointer;

        .donate-inner {
          width: 222px;
          margin: 0;
          list-style: none;
          position: absolute;
          left: -160px;
          top: 50px;
          background: #fff;
          padding: 10px;
          border: 1px solid #ddd;
          box-shadow: 0 2px 6px rgb(0 0 0 / 8%);
          border-radius: 3px;

          li {
            float: left;
          }

          img {
            width: 100px;
          }

          p {
            text-align: center;
            font-size: 15px;
            color: #9a9a9a;
            line-height: 1rem;
          }
        }

        .donate-inner.show {
          display: block;
        }

        .donate-inner:before {
          border-bottom-color: #ddd;
        }

        .donate-inner:before,
        .donate-inner:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          bottom: 100%;
          border: 10px solid transparent;
          right: 35px;
          border-bottom: 10px solid #fff;
        }
      }

      .donate:hover {
        border-color: #42b983;
      }

      .donate:hover,
      .donate:hover span {
        color: #42b983;
      }
    }
  }

  .content {
    border-bottom: 1px solid #efeaea;
  }

  .open-message {
    margin: 50px 0;
    position: relative;
    background: #2b2b2b;
    padding: 10px 30px;
    border-radius: 3px;
    font-size: 14px;
    color: #fff;

    a {
      color: #42b983;
      padding: 0 5px;
    }
  }

  .open-message:after {
    content: "";
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #2b2b2b;
    position: absolute;
    top: -8px;
    left: 48%;
  }
}
</style>

<style lang="scss">
.code-block pre {
  position: relative;
  text-align: left;
  padding: 7px 2px 7px 40px;
  margin-bottom: 20px;

  code {
    display: block;
    margin: 0 35px !important;
  }

  .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 20px;
    bottom: 20px;
    left: 0;
    font-size: 100%;
    width: 40px;
    text-align: center;
    letter-spacing: -1px;
    border-right: 1px solid rgba(0, 0, 0, 0.66);
    user-select: none;
    counter-reset: linenumber;
    span {
      pointer-events: none;
      display: block;
      counter-increment: linenumber;
      &:before {
        content: counter(linenumber);
        color: #999;
        display: block;
        text-align: center;
      }
    }
  }
}
</style>