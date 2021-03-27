<template>
  <Content class="layout-body">
    <Row>
      <Col span="17" class="container">
        <router-view></router-view>
        <BackTop>
          <div class="gotop">
            <Icon type="md-plane" />
            <span class="show-txt">返回<br />顶部</span>
          </div>
        </BackTop>
      </Col>
    </Row>
  </Content>
</template>

<script>
export default {
  name: "FBody",
};
</script>

<style lang="scss" scoped>
.layout-body {
  min-height: calc(100vh - 230px);
  width: 100%;
  margin-bottom: 30px;

  .container {
    margin: 90px auto 0 auto;

    .gotop {
      width: 45px;
      height: 45px;
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 4px;
      box-shadow: 0px 1px 20px 0px rgb(0 0 0 / 10%),
        inset 0px -1px 0px 0px rgb(0 0 0 / 10%);
      cursor: pointer;

      i {
        width: 45px;
        line-height: 45px;
        padding: 0;
        color: #515a6e;
      }

      .show-txt {
        display: none;
        width: 45px;
        height: 45px;
        line-height: 18px;
        font-size: 14px;
        text-align: center;
        padding: 5px;
        background-color: #fff;
        color: #515a6e;
        position: absolute;
        top: 0;
      }
    }

    .gotop:hover .show-txt {
      display: block;
    }
  }
}
</style>