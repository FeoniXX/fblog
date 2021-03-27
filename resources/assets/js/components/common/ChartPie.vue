<template>
  <div :id="name"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "ChartPie",
  props: {
    name: {
      type: String,
      default: "pieDom",
    },
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    radius: {
      type: String,
      default: "50%",
    },
    data: {
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
          subtext: this.subTitle,
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            type: "pie",
            radius: this.radius,
            data: this.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      option && this.chart.setOption(option);
    },
  },
  watch: {
    data() {
      this.initChart();
    },
  },
};
</script>