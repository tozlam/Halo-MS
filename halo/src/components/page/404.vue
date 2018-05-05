<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-box" >
      <v-tags></v-tags>
      <div class="content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
  import vHead from '../common/Header.vue';
  import vSidebar from '../common/Sidebar.vue';
  import vTags from '../common/Tags.vue';
  import bus from '../common/bus';

  export default {
    data:()=>({meg:'Home'}),
    components:{
      vHead, vSidebar, vTags
    },
  }
</script>
