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
  setup() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "My First Dataset",
            data: [40, 20, 20, 30, 40, 20, 30, 20, 20, 40, 30, 40],
            backgroundColor: 'red',
            borderColor: 'red'
          },
          {
            label: "My Second Dataset",
            data: [20, 10, 10, 20, 10, 20, 20, 10, 10, 30, 20, 10],
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