<template>
  <div style="height: 40vh; position:relative">
    <vue3-chart-js v-bind="{ ...config }" />
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { toRefs } from 'vue'

export default {
  name: "StackedBarChart",
  components: {
    Vue3ChartJs,
  },
  props: {
    chartData: {
      required: true
    }
  },
  setup(props) {
    const {chartData} = toRefs(props);
    const data = {
        labels: [2020, 2019],
        datasets: chartData.value.map(record=> {
          return {
            label: record.season,
            backgroundColor: record.color,
            data: [record.vol_rain_lc_2020, record.vol_rain_lc_2019]
          }
        })
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
            // min: 0,
            // max: 300,
            ticks: {
              callback: function (value) {
                return `${value}mm`;
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