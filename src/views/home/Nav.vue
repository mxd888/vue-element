<template>
  <!-- 左侧导航 -->
  <el-aside width="200px" class="aside">
    <el-menu
      :default-active="$route.path" exact
      class="el-menu-vertical-demo"
       router
    >
      <el-menu-item index="index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-menu-item index="stats">
        <i class="el-icon-menu"></i>
        <span slot="title">数据统计</span>
      </el-menu-item>

      <el-submenu index="wms">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>信息管理</span>
        </template>
        <el-menu-item index="list">详细信息</el-menu-item>
        <el-menu-item index="user">其他</el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item index="list">医生管理</el-menu-item>
        <el-menu-item index="list">其他</el-menu-item>
      </el-submenu>



    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>