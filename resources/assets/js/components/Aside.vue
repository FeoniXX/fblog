<template>
  <div>
    <Card>
      <p slot="title">分类栏目</p>
      <div class="aside-content">
        <ul>
          <li v-for="cate in categories" :key="cate.id">
            <router-link :to="`/article/category/${cate.id}`">
              <span class="title">{{ cate.title }}</span>
              <span class="count pull-right">{{ cate.count }}篇</span>
            </router-link>
          </li>
        </ul>
      </div>
    </Card>
    <Card>
      <p slot="title">文章标签</p>
      <div class="aside-content">
        <div class="tag-list">
          <router-link
            v-for="tag in tags"
            :key="tag.id"
            :to="`/article/tag/${tag.id}`"
          >
            <Tag color="blue">{{ tag.title }}</Tag>
          </router-link>
        </div>
      </div>
    </Card>
    <Card>
      <p slot="title">最新文章</p>
      <div class="aside-content">
        <ul>
          <li v-for="art in articles" :key="art.id">
            <router-link :to="`/article/detail/${art.id}`">
              <span class="title">{{ art.title }}</span>
              <span class="count pull-right">
                <Icon type="ios-eye-outline" />{{ art.views }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      categories: [
        {
          id: 1,
          title: "Java",
          count: 10,
        },
        {
          id: 2,
          title: "PHP",
          count: 12,
        },
      ],
      tags: [
        {
          id: 1,
          title: "Java",
        },
        {
          id: 2,
          title: "PHP",
        },
        {
          id: 3,
          title: "区块链",
        },
        {
          id: 4,
          title: "JavaScript",
        },
      ],
      articles: [
        {
          id: 1,
          title: "Java编写自己的区块链应用",
          views: 123,
        },
        {
          id: 2,
          title: "PHP是世界上最好的语言",
          views: 1024,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.ivu-card:not(:last-child) {
  margin-bottom: 20px;
}

.aside-content {
  padding: 0;
  overflow: hidden;

  * {
    word-wrap: break-word;
  }

  a {
    display: flex;
    line-height: 28px;
    color: #6f6f6f;

    .title {
      max-width: 238px;
      font-size: 14px;
      display: block;
      float: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      flex: 1;
    }
  }

  a:hover {
    .title {
      color: #2d8cf0;
    }
  }

  .count {
    max-width: 50px;
    font-size: 12px;

    i {
      font-size: 12px;
    }
  }

  .tag-list {
    a {
      display: inline-block;
      margin: 5px;
    }

    code {
      display: block;
      text-align: center;
      line-height: 25px;
      border: 1px solid #42b983;
      background-color: #42b98360;
      color: #009451;
      border-radius: 4px;
      padding: 0 5px;
      font-size: 14px;
    }
  }
}

ul li a {
  line-height: 28px;
}

ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.pull-right {
  float: right;
}
</style>