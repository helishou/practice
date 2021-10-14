<!--
 * @Author       : helishou
 * @Date         : 2021-10-15 00:31:58
 * @LastEditTime : 2021-10-15 00:33:59
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \Vue\019.单文件组件\School.vue
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
-->
<template>
  <div>
    <h1>学生名称:{{ name }}</h1>
    <h1>学生年龄:{{ age }}</h1>
  </div>
</template>

<script>
export default {
  name: "PracticeSchool",

  data() {
    return {
      name: "胡宏洋",
      age: "19",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped></style>
