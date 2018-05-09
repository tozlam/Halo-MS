<template>
  <div class="dashboard">
    <div class="calenderCard">
      <v-calender></v-calender>
    </div>
    <el-row>
      <el-col>
        <el-card shadow="hover" class="ls">
          {{meg}}
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  import vCalender from './calendar.vue';

  export default {
    data: () => ({meg: 'dash'}),
    components:{
      vCalender
    },
  }
</script>
<style>
  .calenderCard{
    overflow: hidden;
  }
  .ls{
    width: 30%;
  }
</style>

