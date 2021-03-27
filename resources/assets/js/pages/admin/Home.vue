<template>
  <div>
    <Row :gutter="20">
      <Col
        :lg="6"
        :md="12"
        :sm="24"
        :xs="24"
        :style="{ height: '120px', paddingBottom: '10px' }"
      >
        <Card shadow class="info-card-wrapper">
          <div class="content-con">
            <div class="left-area" :style="{ background: 'rgb(45, 140, 240)' }">
              <Icon type="md-document" class="icon" />
            </div>
            <div class="right-area">
              <div>
                <div class="count-to-wrapper">
                  <p class="content-outer">
                    <span class="count-to-count-text count-style">657</span>
                    <i class="count-to-unit-text"></i>
                  </p>
                </div>
                <p>文章总数</p>
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col
        :lg="6"
        :md="12"
        :sm="24"
        :xs="24"
        :style="{ height: '120px', paddingBottom: '10px' }"
      >
        <Card shadow class="info-card-wrapper">
          <div class="content-con">
            <div class="left-area" :style="{ background: 'rgb(25, 190, 107)' }">
              <Icon type="md-map" class="icon" />
            </div>
            <div class="right-area">
              <div>
                <div class="count-to-wrapper">
                  <p class="content-outer">
                    <span class="count-to-count-text count-style">657</span>
                    <i class="count-to-unit-text"></i>
                  </p>
                </div>
                <p>栏目总数</p>
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col
        :lg="6"
        :md="12"
        :sm="24"
        :xs="24"
        :style="{ height: '120px', paddingBottom: '10px' }"
      >
        <Card shadow class="info-card-wrapper">
          <div class="content-con">
            <div class="left-area" :style="{ background: 'rgb(255, 153, 0)' }">
              <Icon type="md-locate" class="icon" />
            </div>
            <div class="right-area">
              <div>
                <div class="count-to-wrapper">
                  <p class="content-outer">
                    <span class="count-to-count-text count-style">657</span>
                    <i class="count-to-unit-text"></i>
                  </p>
                </div>
                <p>总阅读量</p>
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col
        :lg="6"
        :md="12"
        :sm="24"
        :xs="24"
        :style="{ height: '120px', paddingBottom: '10px' }"
      >
        <Card shadow class="info-card-wrapper">
          <div class="content-con">
            <div class="left-area" :style="{ background: 'rgb(237, 63, 20)' }">
              <Icon type="md-chatbubbles" class="icon" />
            </div>
            <div class="right-area">
              <div>
                <div class="count-to-wrapper">
                  <p class="content-outer">
                    <span class="count-to-count-text count-style">657</span>
                    <i class="count-to-unit-text"></i>
                  </p>
                </div>
                <p>留言总数</p>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
    <Row :gutter="20" :style="{ marginTop: '10px' }">
      <Col :lg="12" :md="24" :sm="24" :xs="24">
        <Card shadow>
          <ChartPie
            name="catePieDom"
            title="分类栏目文章数"
            :data="cateData"
            radius="60%"
            :style="{ height: '400px' }"
          />
        </Card>
      </Col>
      <Col :lg="12" :md="24" :sm="24" :xs="24">
        <Card shadow>
          <ChartPie
            name="tagPieDom"
            title="标签文章数"
            :data="tagData"
            radius="60%"
            :style="{ height: '400px' }"
          />
        </Card>
      </Col>
    </Row>
    <Row :style="{ marginTop: '20px' }">
      <Col span="24">
        <Card shadow>
          <Form ref="formInline" inline>
            <FormItem prop="keyword">
              <DatePicker
                clearable
                type="daterange"
                :options="dateRangeOptions"
                placeholder="请选择日期"
                @on-change="dateRangeChange"
              ></DatePicker>
            </FormItem>
            <FormItem>
              <Button type="primary">搜索</Button>
            </FormItem>
          </Form>
          <ChartLine
            title="阅读量趋势图"
            :x-axis-data="viewsXAxisData"
            :y-axis-data="viewsYAxisData"
            :style="{ height: '500px' }"
          />
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import ChartPie from "../../components/common/ChartPie";
import ChartLine from "../../components/common/ChartLine";

export default {
  name: "AdminHome",
  components: {
    ChartPie,
    ChartLine,
  },
  data() {
    return {
      cateData: [
        { name: "Java", value: 12 },
        { name: "PHP", value: 21 },
        { name: "JavaScript", value: 15 },
        { name: "Python", value: 3 },
      ],
      tagData: [
        { name: "Java", value: 12 },
        { name: "PHP", value: 21 },
        { name: "JavaScript", value: 15 },
        { name: "Python", value: 3 },
        { name: "区块链", value: 1 },
      ],
      viewsXAxisData: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      viewsYAxisData: [120, 132, 101, 134, 90, 230, 210],
      dateRangeOptions: {
        shortcuts: [
          {
            text: "近一周",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            },
          },
          {
            text: "近一个月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            },
          },
          {
            text: "近三个月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.$Loading.start();
    this.$Loading.finish();
  },
  methods: {
    dateRangeChange(date) {
      console.log(date);
    },
  },
};
</script>

<style lang="scss">
.info-card-wrapper,
.info-card-wrapper .ivu-card-body {
  padding: 0;
  width: 100%;
  height: 100%;
}

.info-card-wrapper {
  overflow: hidden;

  .content-con {
    width: 100%;
    height: 100%;
    position: relative;

    .left-area {
      float: left;
      width: 36%;
      height: 100%;
      display: table;
      text-align: center;

      > .icon {
        display: table-cell;
        vertical-align: middle;
        font-size: 36px;
        color: rgb(255, 255, 255);
      }
    }

    .right-area {
      float: left;
      width: 64%;
      height: 100%;
      display: table;
      text-align: center;

      > div {
        display: table-cell;
        vertical-align: middle;
      }

      .count-to-wrapper .content-outer {
        display: inline-block;

        .count-style {
          font-size: 50px;
        }

        .count-to-unit-text {
          font-style: normal;
        }
      }
    }
  }
}
</style>