<template>
  <div>
    <h1>人流查询</h1>
    <form @submit.prevent="fetchData">
      <label for="start_date">起始日期：</label>
      <input type="date" id="start_date" v-model="startDate"><br><br>

      <label for="end_date">结束日期：</label>
      <input type="date" id="end_date" v-model="endDate"><br><br>

      <label for="unit">时间单位：</label>
      <select id="unit" v-model="unit">
        <option value="day">日</option>
        <option value="week">周</option>
        <option value="month">月</option>
        <option value="year">年</option>
      </select><br><br>

      <input type="submit" value="查询">
    </form>

    <div v-if="showResult">
      <iframe style="width: 100%; height: 800px;" :src="resultSrc"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDate: '', // 起始日期
      endDate: '', // 结束日期
      unit: 'day', // 时间单位
      showResult: false // 是否显示结果
    };
  },
  computed: {
    resultSrc() {
      // 构建 iframe 的 src 属性
      return `http://127.0.0.1:5001/get_days?start_date=${this.startDate}&end_date=${this.endDate}&unit=${this.unit}`;
    }
  },
  methods: {
    fetchData() {
      // 发送 POST 请求的逻辑可以在这里实现，也可以使用 axios 或其他 HTTP 客户端库发送请求
      // 这里只是简单的演示如何更新显示结果的状态
      this.showResult = true;
    }
  },
  mounted() {
    // 获取系统当前时间
    const currentDate = new Date();
    const defaultStartDate = new Date(currentDate);
    defaultStartDate.setDate(currentDate.getDate() - 7); // 默认起始日期为当前时间减去7天

    // 将系统当前时间设置为默认起始日期
    this.startDate = defaultStartDate.toISOString().split('T')[0];
    this.endDate = currentDate.toISOString().split('T')[0];

    // 触发查询数据
    this.fetchData();

    // 每60秒刷新数据
    setInterval(this.fetchData, 60000);
  }
};
</script>