<template>
  <div id="module">
    <el-container>
      <!-- 左侧导航 -->
      
      <Nav/>

      <el-container>
        <!-- 头部 -->
        <el-header>
          <el-button type="primary" class="exit" @click="goBack"
            >退出</el-button
          >
          <!-- 面包屑 -->
          <Breadcrumb />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from './Nav'
import Breadcrumb from './Breadcrumb'
export default {
  components:{
    Nav,
    Breadcrumb
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      sessionStorage.removeItem("username");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>