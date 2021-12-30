<template>
  <div id="dataBlock">
    <h1>Data Charts</h1>
    <div id="visualsWrapper" >
      <!-- bar chart: temperature per month -->
      <bar-chart />
      <!-- line chart: 2 datasets with Tmax in Aug and Tmin in Jan - evolution over the years -->
      <line-chart />
      <!-- table with num of raining days for each month for 2020 and 2021 -->
      <table-data />
      <!-- stacked bar chart: amount of rain for each season for different years -->
      <stacked-bar-chart />
    </div>
  </div>
</template>

<script lang="ts">
import BarChart from '@/components/Visuals/BarChart.vue'
import LineChart from '@/components/Visuals/LineChart.vue'
import StackedBarChart from '@/components/Visuals/StackedBarChart.vue'
import TableData from '@/components/Visuals/TableData.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DataVisualization',
  components: {
    LineChart,
    TableData,
    StackedBarChart,
    BarChart,
  }
})
</script>

<style lang="scss" scoped>
  #dataBlock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: max-content;
    margin: 100px auto 200px auto;
    #visualsWrapper {
      display: grid;
      width: 60vw;
      grid-template-columns: repeat( auto-fit, minmax(400px, 1fr) );
      /* gap: 10px; */
      border: 1px solid black;
    }
  }
</style>