<template>
  <div class="breadcumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="v.path" v-for="(v,i) in list" :key="i">
        {{v.meta.title}}
        </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[]
    };
  },
  created(){
    this.list = this.$route.matched
    
  },
  watch:{
    $route(to,from){
      let metached = to.matched
      this.list = metached
    }
  }
};
</script>

<style>

</style>