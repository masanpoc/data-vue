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
  setup() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "My First Dataset",
            backgroundColor: "blue",
            data: [40, 20, 20, 30, 40, 20, 30, 20, 20, 40, 10, 40],
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