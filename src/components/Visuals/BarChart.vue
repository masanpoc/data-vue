<template>
  <div style="height: 40vh; position:relative">
    <vue3-chart-js v-bind="{ ...config }" />
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";


export default {
  name: "BarChart",
  components: {
    Vue3ChartJs,
  },
  props: {
    chartData: {
      required: true
    }
  },
  mounted() {
    // console.log(this.chartData.map(record=>record.avg_tmp));
  },
  setup(props) {
    const data = {
        labels: props.chartData.map(record=>record.month.substring(0,3)),
        datasets: [
          {
            label: "My First Dataset",
            backgroundColor: "blue",
            data: props.chartData.map(record=>record.avg_tmp),
          },
        ],
    };

    const config = {
      type: "bar",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          title: {
              display: true,
              text: 'Average Temperature 2021' 
          }
        },
        layout: {
            padding: 20
        }, 
        scales: {
          y: {
            min: 0,
            max: 50,
            ticks: {
              callback: function (value) {
                return `${value}ºC`;
              },
            },
          },
        },
      },
    };

    return {
      config,
    };
  },
};
</script>