<template>
<div>
  <div id="he-plugin-standard"></div>
 <div class="introduce" @click="redirectToRoute('Dayview')"><div class="he-container"> <Dates/></div> <Introduce/></div>
  </div>
<div class='Geo'> 
      <div class="geo-column"><GeoCountry/> </div> 
        <div class="geo-column2"> <GeoPro/> </div>
          <div class="geo-map"> <HeatMap/> </div>
         </div>  
<div class="geo-column1">
     <div class="video"> <Video/></div>
      <div class="weekline-wrapper">
    <Weekline/>
  </div>
    </div>
</template>
<script>
import GeoCountry from '../Dashboard.components/Weathers/GeoCountry.vue';
import GeoPro from '../Dashboard.components/Weathers/GeoPro.vue';
import Dates from '../Dashboard.components/Weathers/dates.vue';
import Introduce from '../Dashboard.components/Weathers/introduce.vue';
import Adivnce from '../Dashboard.components/Weathers/adivnce.vue';
import Weekline from '../Dashboard.components/Weathers/DayFlow.vue';
import Video from '../Dashboard.components/Weathers/Video.vue'
import HeatMap from '../MapPreview/HeatMap.vue';
export default {
  components: {
    GeoCountry,
    GeoPro,
    Dates,
    Introduce,
    Adivnce,
    Weekline,
    HeatMap,
    Video

  },
  mounted() {
    const script1 = document.createElement('script');
    script1.innerHTML = `WIDGET = {
      "CONFIG": {
        "layout": "1",
        "width": "450",
        "height": "230",
        "background": "1",
        "dataColor": "FFFFFF",
        "language": "zh",
        "key": "faf713dcfea84f588671ad69fdfd7829"
      }
    }`;
    document.head.appendChild(script1);
    const script2 = document.createElement('script');
    script2.src = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0';
    document.body.appendChild(script2);
  },
  
}
</script>
<style>
.he-container {
  display: flex;
  margin-top:0px;
  flex-direction: column;
}
.geo-column {
  flex: 1;
  width: 900px; /* 或者根据需要设置具体的宽度 */
  height: 900px; /* 或者根据需要设置具体的高度 */
  overflow:  hidden; /* 根据需要设置为 auto 或 scroll */
}
.geo-column2{
  flex: 1;
  width: 900px; /* 或者根据需要设置具体的宽度 */
  height: 900px; /* 或者根据需要设置具体的高度 */
  overflow:  hidden; /* 根据需要设置为 auto 或 scroll */
}
.geo-column1{
  flex: 1;
  width: 1280px; /* 或者根据需要设置具体的宽度 */
  height:1800px; /* 或者根据需要设置具体的高度 */
  overflow:  hidden; /* 根据需要设置为 auto 或 scroll */
 
}
.geo-map{
  flex: 1;
  width: 2000px; /* 或者根据需要设置具体的宽度 */
  height:1800px; /* 或者根据需要设置具体的高度 */
  overflow:  hidden!important; /* 根据需要设置为 auto 或 scroll */
  margin-top:-1800px;
  margin-left:900px;
 
}
 .introduce
   {
   left:0px;
    margin-top:0px;
    width:450px;
    height:305px;
   } 
.video{
    flex:1;
    display:flex;
  position: fixed;
  margin:-7px;
  width:1280px;
  height:735px;
}
.weekline-wrapper {
   overflow: hidden;
   width:1280px;
   margin-top:720px;
  height:1160px;
}
body {
  background-color:rgba(255,255,255,1); /* 将页面背景色设置为透明 */
}

</style>