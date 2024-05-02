<template>
  <div  class="Main">
    <div class="Gauge">
      <div>
        <LandTemp />
        <LandPH class="ph" />
        <AbsoluteHumidity />
        <RelativeHumidity />
      </div>
    </div>
    <div class="PercentageOfPlantWrapper">
      <div style="width: 840px; height: 640px; ">
        <PercentageOfPlant class="YourClassHere" style="width: 860px; height: 690px; " />
      </div>
    </div>
  </div>
</template>

<script>
import LandTemp from '/src/Dashboard.components/Agris/LandTemp.vue'
import LandPH from '/src/Dashboard.components/Agris/LandPH.vue'
import AbsoluteHumidity from '/src/Dashboard.components/Agris/AbsoluteHumidity.vue'
import RelativeHumidity from '/src/Dashboard.components/Agris/RelativeHumidity.vue'
import PercentageOfPlant from '/src/Dashboard.components/Agris/PercentageOfPlant.vue'

export default {
  components: {
    LandTemp,
    LandPH,
    AbsoluteHumidity,
    RelativeHumidity,
    PercentageOfPlant
  }
}
</script>

<style scoped>
.PercentageOfPlantWrapper {
  margin-top: 10px; /* 添加上边距以与仪表盘保持距离 */
  
}



.Gauge {
  display: flex;
  width: 840px;
  height: 640px;
   /* 根据需要进行调整，可以是 'auto' 或 'scroll' */
}
.Main{
  overflow: hidden !important;
}
</style>