<style>
.tops {
  margin-top: 40px;
}
.head {
  text-align: center;
  font-size: 80px;
}
.TTT {
  text-align: center;
  font-size: 20px;
}
.bt {
  margin-left: 20px;
}
</style>

<template>
  <div>
    <a-row type="flex" justify="center">
      <a-col :span="24" class="tops">
        <h1 class="head">Graphical Method</h1>
      </a-col>
      <a-col :span="1" class="TTT"> X : </a-col>
      <a-col :span="7">
        <a-input v-model="x" placeholder="Input : X" />
      </a-col>
      <a-col :span="1" class="TTT"> Y : </a-col>
      <a-col :span="7">
        <a-input v-model="y" placeholder="Input : Y" @keyup.enter="submit" />
      </a-col>
      <a-col :span="2" class="bt">
        <a-button @click="submit" type="primary">
          <a-icon type="check" />
          OK
        </a-button>
      </a-col>
      <a-col :span="10" class="tops">
        <apexchart
          width="500"
          type="line"
          :options="options"
          :series="series"
        ></apexchart>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      x: '',
      y: '',
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: 'series-1',
          data: [],
        }
      ]
    }
  },

  methods: {
    async submit() {
      console.log(this.x, this.y);
      var dataXY = {
        x: parseFloat(this.x),
        y: parseFloat(this.y)
      }
      var dataA = await this.axios.post('http://localhost:3000/testgraphical', dataXY)
      this.series = [{ data: dataA.data.data }]
    }
  }
}
</script>