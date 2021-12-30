<template>
  <div style="height: 40vh; position:relative">
    <vue3-chart-js v-bind="{ ...config }" />
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  name: "StackedBarChart",
  components: {
    Vue3ChartJs,
  },
  setup() {
    const data = {
        labels: ["2021", "2020"],
        datasets: [
          {
            label: "Spring",
            backgroundColor: 'green',
            data: [40, 60],
          },
          {
            label: "Summer",
            backgroundColor: 'yellow',
            data: [20, 10],
          },
          {
            label: "Autumn",
            backgroundColor: 'brown',
            data: [40, 50],
          },
          {
            label: "Winter",
            backgroundColor: 'blue',
            data: [100, 80],
          },
        ],
    };

    const config = {
      type: "bar",
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
              display: true,
              text: 'Rain Distribution for 2021 & 2020' 
          }
        },
        layout: {
            padding: 20
        }, 
        scales: {
          x: {
            stacked: true
          },
          y: {
            stacked: true,
            min: 0,
            max: 300,
            ticks: {
              callback: function (value) {
                return `${value}m3`;
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