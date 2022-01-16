<template>
  <div style="max-width: 600px">
    <table>
      <caption>Average Monthly Raining Days for Coruña & Malaga</caption>
      <tr>
        <th>Month</th>
        <th>Coruña</th>
        <th>Málaga</th>
      </tr>
      <tr v-for="(record) in chartData" :key="record.month">
        <td>{{record.month}}</td>
        <td>{{record.rain_coruna}}</td>
        <td>{{record.rain_malaga}}</td>
      </tr>
    </table>
  </div>
</template> 

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import {PropType} from 'vue'
import {Rain_days} from './types';


export default defineComponent({
  name: "MyTableData",
  // data() {
  //   return {
  //     tableData: myTable
  //   }
  // },
  props: {
    chartData: {
      type: Object as PropType<Array<Rain_days>>,
      required: true
    }
  },
  mounted() {
    console.log(this.chartData, 'chartData')
  }
});
</script>