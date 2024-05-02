<template>
  <div class="market-data">
    <div class="crop-table">
      <h3>小麦</h3>
      <table>
        <thead>
          <tr>
            <th>月份</th>
            <th>价格</th>
            <th>成交量</th>
            <th>供应量</th>
            <th>需求量</th>
            <th>库存情况</th>
            <th>进口量</th>
            <th>出口量</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(monthData, index) in wheatData" :key="index">
            <td>{{ monthData.month }}</td>
            <td>{{ monthData.price }}</td>
            <td>{{ monthData.transaction }}</td>
            <td>{{ monthData.supply }}</td>
            <td>{{ monthData.demand }}</td>
            <td>{{ monthData.stock }}</td>
            <td>{{ monthData.import }}</td>
            <td>{{ monthData.export }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="crop-table">
      <h3>玉米</h3>
      <table>
        <thead>
          <tr>
            <th>月份</th>
            <th>价格</th>
            <th>成交量</th>
            <th>供应量</th>
            <th>需求量</th>
            <th>库存情况</th>
            <th>进口量</th>
            <th>出口量</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(monthData, index) in cornData" :key="index">
            <td>{{ monthData.month }}</td>
            <td>{{ monthData.price }}</td>
            <td>{{ monthData.transaction }}</td>
            <td>{{ monthData.supply }}</td>
            <td>{{ monthData.demand }}</td>
            <td>{{ monthData.stock }}</td>
            <td>{{ monthData.import }}</td>
            <td>{{ monthData.export }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="crop-table">
      <h3>大豆</h3>
      <table>
        <thead>
          <tr>
            <th>月份</th>
            <th>价格</th>
            <th>成交量</th>
            <th>供应量</th>
            <th>需求量</th>
            <th>库存情况</th>
            <th>进口量</th>
            <th>出口量</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(monthData, index) in soybeanData" :key="index">
            <td>{{ monthData.month }}</td>
            <td>{{ monthData.price }}</td>
            <td>{{ monthData.transaction }}</td>
            <td>{{ monthData.supply }}</td>
            <td>{{ monthData.demand }}</td>
            <td>{{ monthData.stock }}</td>
            <td>{{ monthData.import }}</td>
            <td>{{ monthData.export }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wheatData: [
        {
          month: "一月",
          price: "1.6元/公斤",
          transaction: "50吨",
          supply: "110吨",
          demand: "55吨",
          stock: "55吨",
          import: "30吨",
          export: "25吨"
        },
        {
          month: "二月",
          price: "1.7元/公斤",
          transaction: "55吨",
          supply: "120吨",
          demand: "60吨",
          stock: "60吨",
          import: "35吨",
          export: "30吨"
        },
        {
          month: "三月",
          price: "1.8元/公斤",
          transaction: "60吨",
          supply: "130吨",
          demand: "65吨",
          stock: "65吨",
          import: "40吨",
          export: "35吨"
        }
      ],
      cornData: [
        {
          month: "一月",
          price: "1.9元/公斤",
          transaction: "70吨",
          supply: "160吨",
          demand: "75吨",
          stock: "85吨",
          import: "40吨",
          export: "35吨"
        },
        {
          month: "二月",
          price: "2.0元/公斤",
          transaction: "75吨",
          supply: "170吨",
          demand: "80吨",
          stock: "95吨",
          import: "45吨",
          export: "40吨"
        },
        {
          month: "三月",
          price: "2.1元/公斤",
          transaction: "80吨",
          supply: "180吨",
          demand: "85吨",
          stock: "105吨",
          import: "50吨",
          export: "45吨"
        }
      ],
      soybeanData: [
        {
          month: "一月",
          price: "2.6元/公斤",
          transaction: "40吨",
          supply: "85吨",
          demand: "45吨",
          stock: "40吨",
          import: "25吨",
          export: "20吨"
        },
        {
          month: "二月",
          price: "2.7元/公斤",
          transaction: "45吨",
          supply: "90吨",
          demand: "50吨",
          stock: "45吨",
          import: "30吨",
          export: "25吨"
        },
        {
          month: "三月",
          price: "2.8元/公斤",
          transaction: "50吨",
          supply: "95吨",
          demand: "55吨",
          stock: "50吨",
          import: "35吨",
          export: "30吨"
        }
      ]
    };
  }
};
</script>

<style scoped>
.market-data {
  font-family: Arial, sans-serif;
}

.crop-table {
  margin-bottom: 0px;
}

h2 {
  margin-bottom: 0px;
}

h3 {
  margin-top: 0px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
