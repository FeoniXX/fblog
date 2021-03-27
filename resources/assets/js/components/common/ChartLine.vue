<template>
  <div :id="name"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "ChartLine",
  props: {
    name: {
      type: String,
      default: "lineDom",
    },
    title: {
      type: String,
      default: "",
    },
    xAxisData: {
      type: Array,
      default: () => [],
    },
    yAxisData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    setTimeout(() => {
      let chartDom = document.getElementById(this.name);
      this.chart = echarts.init(chartDom);
      this.initChart();
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        this.chart.resize();
      });
    });
  },
  methods: {
    initChart() {
      let option = {
        title: {
          text: this.title,
          left: "center",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: this.xAxisData,
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            type: "line",
            smooth: true,
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.yAxisData,
          },
        ],
      };
      option && this.chart.setOption(option);
    },
  },
  watch: {
    xAxisData() {
      this.initChart();
    },
  },
};
</script>