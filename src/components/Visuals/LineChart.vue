<template>
  <div style="height: 40vh; position:relative">
    <vue3-chart-js v-bind="{ ...config }" />
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  name: "LineChart",
  components: {
    Vue3ChartJs,
  },
  props: {
    chartData: {
      required: true
    }
  },
  setup(props) {
    const data = {
        labels: props.chartData.map(record=>record.month.substring(0,3)),
        datasets: [
          {
            label: "My First Dataset",
            data: props.chartData.map(record=>record.tmax),
            backgroundColor: 'red',
            borderColor: 'red'
          },
          {
            label: "My Second Dataset",
            data:  props.chartData.map(record=>record.tmin),
            backgroundColor: 'blue',
            borderColor: 'blue'
          },
        ],
    };

    const config = {
      type: "line",
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
              display: true,
              text: 'Evolution of Max & Min Temperatures' 
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
      data: data
    };

    return {
      config,
    };
  },
};
</script>