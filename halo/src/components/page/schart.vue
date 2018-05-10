<template>
  <div id="schart">
    <schart class="schart-wrapper" :canvasId="canvasId" :type="type" :data="data" :options="options"></schart>
  </div>
</template>
<script>
  import Schart from 'vue-schart';
  export default {
    data(){
      return{
        canvasId:'HaloSchart',
        type:'ring',
        data:[
          {name: '2014', value: 1342},
          {name: '2015', value: 2123},
        ],
        options:{
          bgColor:' #909399',
          radius: 50,
          innerRadius: 20
        }
      }
    },
    components:{
      Schart
    }
  }
</script>
<style>

  .schart-wrapper{
    width: 235px;
    height: 235px;
  }
</style>
