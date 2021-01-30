<style>
.tops{
  margin-top: 40px;
}
.head{
  text-align: center;
  font-size: 100px;
}
.TTT{
  text-align: center;
  font-size: 20px;
}
.bt{
  margin-left: 20px;
}
</style>

<template>
<div>
<a-row type="flex" justify="center" >
      <a-col :span="24" class="tops">
         <h1 class="head">Bisection</h1>
      </a-col>
      <a-col :span="1"  class="TTT">
        X :
      </a-col>
      <a-col :span="7" >
        <a-input v-model="xl" placeholder="Input : X" />
      </a-col>
      <a-col :span="1" class="TTT">
        Y :
      </a-col>
      <a-col :span="7" >
        <a-input v-model="xr" placeholder="Input : Y" />
      </a-col>
      <a-col :span="2" class="bt" >
        <a-button @click="Go" type="primary">
          <a-icon type="check" />
        OK
      </a-button>
      </a-col>
      <a-col :span="18" class="tops" v-if="dataTable.length !== 0">
          <a-table :columns="columns" :data-source="dataTable" bordered>
          </a-table>
      </a-col>
      <a-col :span="18" class="tops" v-else>
          ไม่สามารถหาค่าได้
      </a-col>
</a-row>

</div>

</template>

<script>
export default {
  data () {
    return {
      name: 'ppppppp',
      xl: '',
      xr: '',
      columns: [
        {
          title: 'n',
          dataIndex: 'n'
        },
        {
          title: 'XL',
          dataIndex: 'xl_start',
          scopedSlots: { customRender: 'name' }
        },
        {
          title: 'XR',
          dataIndex: 'xr_start'
        },
        {
          title: 'Xm',
          dataIndex: 'xm'
        },
        {
          title: 'F(Xm)',
          dataIndex: 'fxm'
        },
        {
          title: 'ES',
          dataIndex: 'ESs'
        }
      ],
      dataTable: []
    }
  },
  methods: {
    async Go () {
      var dataXY = {
        x: parseFloat(this.xl),
        y: parseFloat(this.xr)
      }
      // console.log(parseInt(this.xl))
      // console.log(parseInt(this.xr))
      var dataA = await this.axios.post('http://192.168.0.100:3000/testpost', dataXY)
      console.log('data', dataA.data)
      if (dataA.data.data === 'Fail') {
        this.dataTable = []
      } else {
        this.dataTable = dataA.data.data
        this.dataTable.pop()
        this.dataTable.pop()
      }
    }
  }
}
</script>
