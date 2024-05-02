<template>
  <div class="grid-container">
    <div class="grid-item" v-for="(item, index) in tableData" :key="index">
      <div class="grid-label">{{ item.name }}</div>
      <!-- 使用方法动态显示数值，对于特定项添加特殊格式 -->
      <div class="grid-value">{{ displayValue(item) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { name: '环境质量指数', value: 85, animatedValue: 0 },
        { name: '植被健康指数', value: 95, animatedValue: 0 },
        { name: '垃圾清理效率', value: 90, animatedValue: 0, isPercent: true },
        { name: '设施利用率', value: 80, animatedValue: 0, isPercent: true },
        { name: '绿化覆盖率', value: 70, animatedValue: 0, isPercent: true },
        { name: '安全事故率', value: 0.5, animatedValue: 0, isPercent: true, isDecimal: true }
      ]
    };
  },
  methods: {
    animateValue(index, step, intervalTime) {
      const item = this.tableData[index];
      const interval = setInterval(() => {
        if (item.animatedValue < item.value) {
          item.animatedValue = parseFloat((item.animatedValue + step).toFixed(2));
          if (item.animatedValue > item.value) {
            item.animatedValue = item.value;
          }
        } else {
          clearInterval(interval);
        }
      }, intervalTime);
    },
   startAnimation() {
  this.tableData.forEach((item, index) => {
    const step = item.isDecimal ? 0.01 : 1;
    const intervalTime = item.isDecimal ? 20 : 10; // 调整此处的intervalTime值
    this.animateValue(index, step, intervalTime);
  });
},
    displayValue(item) {
      // 修改displayValue方法，根据isPercent和isDecimal来判断是否添加百分号和保留小数点
      let value = item.animatedValue;
      if (item.isPercent) {
        value = value.toFixed(item.isDecimal ? 1 : 0);
        return `${value}%`;
      }
      return item.isDecimal ? value.toFixed(1) : Math.floor(value);
    }
  },
  mounted() {
    this.startAnimation();
  }
};
</script>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 10px; /* 添加圆角属性 */
}
.grid-item {
  border: 1px solid #333;
  padding: 10px;
  border-radius: 10px; /* 添加圆角属性 */
}
.grid-label {
  font-weight: bold;
  font-size: 24px; /* Increased font size by 1.5 times */
  color: #333;
}
.grid-value {
  font-size: 27px; /* Increased font size by 1.5 times */
  color: #007bff;
}
</style>