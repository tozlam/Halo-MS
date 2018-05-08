<template>
  <div class="dashboard">
    <v-calender></v-calender>
    <el-row>
      <el-col :span="8">
        <el-card shadow="hover">
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

