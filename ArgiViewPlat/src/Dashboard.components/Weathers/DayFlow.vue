<template>
   <iframe id="weekly" :srcdoc="result" @load="setupButtonListener"></iframe>
</template>

<script>
export default {
  data() {
    return {
      startDate: '',
      endDate: '',
      unit: 'day',
      result: '',
      showResult: false
    };
  },
  methods: {
    redirectToDayview() {
      this.$router.push({ name: 'Dayview' });
    },
    fetchData() {
      const data = {
        start_date: this.startDate,
        end_date: this.endDate,
        unit: this.unit
      };

      fetch("http://127.0.0.1:5001/get_days", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => response.text())
      .then(data => {
        this.result = data;
        this.showResult = true;
        console.log("Data successfully sent to backend:", data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
    setupButtonListener() {
      const iframe = document.getElementById('weekly');
      const iframeWindow = iframe.contentWindow || iframe.contentDocument;
      if (iframeWindow.document) {
        const button = iframeWindow.document.createElement('button');
        button.textContent = 'Go to Dayview';
        button.style.position = 'fixed';
        button.style.bottom = '10px';  // Adjusted position to the bottom
        button.style.right = '10px';   // Adjusted position to the right
        button.addEventListener('click', this.redirectToDayview);
        iframeWindow.document.body.appendChild(button);
      }
    }
  },
  mounted() {
    const currentDate = new Date();
    const defaultStartDate = new Date(currentDate);
    defaultStartDate.setDate(currentDate.getDate() - 7);

    this.startDate = defaultStartDate.toISOString().split('T')[0];
    this.endDate = currentDate.toISOString().split('T')[0];

    this.fetchData();

    setInterval(this.fetchData, 60000);
  }
};
</script>

<style>
body,html {
  overflow: hidden; /* 隐藏页面的滚动条 */
  background-color: white;
}
#weekly{
  height:100%;
  width: 100%; /* 设置 iframe 宽度为100% */
  overflow: hidden; /* 隐藏滚动条 */ 
background-color: white;
}
</style>