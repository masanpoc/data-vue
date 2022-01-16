<template>
  <div id="dataBlock">
    <h1>Data Charts</h1>
    <div id="visualsWrapper" v-if="loaded" >
      <!-- bar chart: temperature per month -->
      <bar-chart :chartData="barChartData" />
      <!-- line chart: 2 datasets with Tmax in Aug and Tmin in Jan - evolution over the years -->
      <line-chart :chartData="lineChartData" />
      <!-- table with num of raining days for each month for 2020 and 2021 -->
      <table-data :chartData="tableChartData" />
      <!-- stacked bar chart: amount of rain for each season for different years -->
      <stacked-bar-chart :chartData="stackedBarChartData" />
    </div>
  </div>
</template>

<script lang="ts">
import BarChart from '@/components/Visuals/BarChart.vue'
import LineChart from '@/components/Visuals/LineChart.vue'
import StackedBarChart from '@/components/Visuals/StackedBarChart.vue'
import TableData from '@/components/Visuals/TableData.vue'
import { defineComponent } from 'vue'

import {Avg_tmp_year, Tmax_tmin_year, Rain_days, Rain_volume} from '../components/Visuals/types'
import axios from 'axios';
import {fromMonthlyVolumeOfRainToSeasonalVolumeOfRain} from './functions/calculationFunctions';





export default defineComponent({
  name: 'DataVisualization',
  components: {
    LineChart,
    TableData,
    StackedBarChart,
    BarChart,
  },
  data() {
    return {
      loaded: false,
      barChartData: [{month: 'January', avg_tmp: 12 }, {month: 'February', avg_tmp: 15}] as Avg_tmp_year[],
      lineChartData: [{month: 'January', tmax: 22, tmin:  5}, {month: 'February', tmax: 23, tmin: 7 }] as Tmax_tmin_year[],
      tableChartData: [{month: 'January', rain_coruna: 22, rain_malaga: 30}, {month: 'February', rain_coruna: 21, rain_malaga: 32}] as Rain_days[],
      stackedBarChartData: [{season: 'autumn', color:'brown', vol_rain_lc_2020: 22, vol_rain_lc_2019: 24}, {season: 'winter', color: 'blue' , vol_rain_lc_2020: 12, vol_rain_lc_2019: 10}] as Rain_volume[],
    }
  },
  methods: {
    async getData() {
      try {

          const response = await axios.get('http://localhost:3000/weather-mysql/?key=3r-LeDurddEbPTpwqFwQr6yB6Ug2if84H0B4F');
          const results = response.data;
          this.barChartData = results.map((record:any)=>{
            return {
              month: record.month,
              avg_tmp: record.avg_tmp_coruna
            }
          });
          this.tableChartData=results.map((record:any)=> {
            return {
              month: record.month,
              rain_coruna: record.rain_days_coruna,
              rain_malaga: record.rain_days_malaga
            }
          });
          this.stackedBarChartData=fromMonthlyVolumeOfRainToSeasonalVolumeOfRain(results);
          this.loaded=true;
          console.log(results);
//         const newData2 = await axios.get('http://localhost:3000/weather-api/coruna/2020/?key=1z-LeDue4rEbPTpwqFwQr6yB6Ug2if84H0B6O');
        // console.log(newData);
//         console.log(newData2);
          // this.loaded=true;
      } catch(e) {
        console.error(e);
      }
    }
  },
  mounted() {
    this.getData();
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