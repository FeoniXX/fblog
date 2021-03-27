<template>
  <div class="article-item">
    <div class="entry">
      <h1 class="title">
        <router-link to="/article/detail/1">
          <span class="set-top">[置顶]</span> article title
        </router-link>
      </h1>
      <p class="description">description</p>
      <div class="footer">
        <div class="footer-item time">
          <Icon type="ios-time-outline" />
          2021-03-08 21:16:37
        </div>
        <div class="footer-item views">
          <Icon type="ios-eye-outline" />
          123
        </div>
        <!-- <div class="footer-item comment">
          <i class="iconfont iconcomment"></i>
          12
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
};
</script>

<style lang="scss" scoped>
.article-item {
  width: 100%;
  border: 1px solid #dcdee2;
  border-color: #e8eaec;
  border-radius: 4px;

  background-color: #ffffff;
  transition: all 0.2s ease-in-out;

  .title {
    font-size: 21px;
    font-weight: 600;
    line-height: 30px;
    padding: 0 20px;
    margin: 10px 0 0 0;
    position: relative;
    z-index: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;

    a {
      color: #737373;
    }

    a:hover {
      color: #2d8cf0;
    }

    .set-top {
      color: rgb(255, 109, 109);
      font-weight: 600;
    }
  }

  .description {
    width: 100%;
    line-height: 22px;
    padding: 0 20px;
    margin-bottom: 10px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .footer {
    width: 100%;
    height: 30px;
    border-top: 1px solid #eee;
    font-size: 14px;
    padding: 5px 20px;

    .footer-item {
      float: left;
      margin: 0 15px 0 0;
    }
  }
}

.article-item:not(:last-child) {
  margin-bottom: 20px;
}

.article-item:hover {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
}
</style>
