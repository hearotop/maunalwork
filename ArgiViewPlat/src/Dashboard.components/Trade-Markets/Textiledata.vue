<template>
  <div class="market-data">
    <div class="crop-table">
      <h3>棉花</h3>
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
          <tr v-for="(monthData, index) in cottonData" :key="index">
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
      <h3>羊毛</h3>
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
          <tr v-for="(monthData, index) in woolData" :key="index">
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
      cottonData: [
        {
          month: "一月",
          price: "2.5元/公斤",
          transaction: "100吨",
          supply: "200吨",
          demand: "120吨",
          stock: "80吨",
          import: "50吨",
          export: "40吨"
        },
        {
          month: "二月",
          price: "2.6元/公斤",
          transaction: "110吨",
          supply: "210吨",
          demand: "125吨",
          stock: "85吨",
          import: "55吨",
          export: "45吨"
        },
        {
          month: "三月",
          price: "2.7元/公斤",
          transaction: "115吨",
          supply: "220吨",
          demand: "130吨",
          stock: "90吨",
          import: "60吨",
          export: "50吨"
        }
      ],
      woolData: [
        {
          month: "一月",
          price: "3.0元/公斤",
          transaction: "80吨",
          supply: "150吨",
          demand: "100吨",
          stock: "50吨",
          import: "40吨",
          export: "35吨"
        },
        {
          month: "二月",
          price: "3.1元/公斤",
          transaction: "85吨",
          supply: "160吨",
          demand: "105吨",
          stock: "55吨",
          import: "45吨",
          export: "40吨"
        },
        {
          month: "三月",
          price: "3.2元/公斤",
          transaction: "90吨",
          supply: "170吨",
          demand: "110吨",
          stock: "60吨",
          import: "50吨",
          export: "45吨"
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
  margin-bottom: 40px;
}

h2 {
  margin-bottom: 10px;
}

h3 {
  margin-top: 20px;
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
