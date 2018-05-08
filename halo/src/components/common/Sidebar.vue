<template>
  <div class="sidebar">
<el-menu class="sidebar-menu"  background-color="#324157" :collapse="collapse" :default-active="onRoutes"
         text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
<template v-for="item in items">
  <template v-if="item.subs">
    <el-submenu :index="item.index" :key="item.index">
      <template slot="title">
        <i :class="item.icon"></i><span slot="title" v-text="item.title"></span>
      </template>
     <el-menu-item v-for="(subItem,subIndex) in item.subs" :key="subIndex" :index="subIndex.index">
       {{subItem.title}}
     </el-menu-item>
    </el-submenu>
  </template>
  <template v-else>
    <el-menu-item :index="item.index" :key="item.index">
      <i :class="item.icon"></i><span slot="title" v-text="item.title"></span>
    </el-menu-item>
  </template>
</template>

  <div class="collapse-btn" @click="collapseChange">
  <el-tooltip :content="collapse?`展开`:`收起`" placement="right">
    <i class="el-icon-menu"></i>
  </el-tooltip>
</div>
</el-menu>



  </div>
</template>
<script>
  import bus from '../common/bus';
  export default {
    data() {
      return {
        collapse:false,
        items: [
          {
            icon: 'el-icon-setting',
            index: 'dashboard',
            title: '系统首页'
          },
          {
            icon: 'el-icon-tickets',
            index: 'ordermanage',
            title: '订单管理'
          },
          {
            icon: 'el-icon-message',
            index: 'tabs',
            title: 'tab选项卡'
          },
          {
            icon: 'el-icon-date',
            index: '3',
            title: '表单相关',
            subs: [
              {
                index: 'form',
                title: '基本表单'
              },
              {
                index: 'editor',
                title: '富文本编辑器'
              },
              {
                index: 'markdown',
                title: 'markdown编辑器'
              },
              {
                index: 'upload',
                title: '文件上传'
              }
            ]
          },
          {
            icon: 'el-icon-star-on',
            index: 'charts',
            title: 'schart图表'
          },
          {
            icon: 'el-icon-rank',
            index: 'drag',
            title: '拖拽列表'
          },
          {
            icon: 'el-icon-warning',
            index: 'permission',
            title: '权限测试'
          },
          {
            icon: 'el-icon-error',
            index: '404',
            title: '404页面'
          }
        ]
      }
    },
    methods:{
      collapseChange(){
        this.collapse=!this.collapse;
        bus.$emit('collapse',this.collapse);
      }
    },
    computed:{
      onRoutes(){
        return this.$route.path.replace('/','');
      }
    },
  }
</script>
<style>
  .sidebar{
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom:0;
  }
  .sidebar-menu:not(.el-menu--collapse){
    width: 250px;
  }
  .sidebar > ul {
    height:100%;
  }
  .collapse-btn{
    color: white;
    cursor: pointer;
    font-size: 20px;
    position: fixed;
    left: 20px;
    bottom: 20px;
  }
</style>
