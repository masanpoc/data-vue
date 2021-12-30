<template>
  <div style="max-width: 600px">
    <table>
      <caption>Monthly Raining Days for 2021 & 2020</caption>
      <tr>
        <th>Month</th>
        <th>2021</th>
        <th>2020</th>
      </tr>
      <tr v-for="(value, name) in tableData" :key="name">
        <td>{{name}}</td>
        <td>{{value[2021]}}</td>
        <td>{{value[2020]}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";


const myTable = {
  January: {
    2021: 12,
    2020: 14
  },
  February: {
    2021: 15,
    2020: 16
  },
  March: {
    2021: 14,
    2020: 21
  },
  April: {
    2021: 12,
    2020: 10
  },
  May: {
    2021: 4,
    2020: 8
  },
  June: {
    2021: 4,
    2020: 1
  },
  July: {
    2021: 2,
    2020: 4
  },
  August: {
    2021: 0,
    2020: 0
  },
  September: {
    2021: 6,
    2020: 8
  },
  October: {
    2021: 10,
    2020: 12
  },
  November: {
    2021: 8,
    2020: 10
  },
  December: {
    2021: 18,
    2020: 14
  },
};

export default defineComponent({
  name: "TableData",
  data() {
    return {
      tableData: myTable
    }
  }
});
</script>