<template>
  <div id="app">
    <Tab :source="tabList" />
  </div>
</template>

<script>
import Tab from "./components/Tab";
import Demo1 from "./components/Demo1";
import Demo2 from "./components/Demo2";
import Demo3 from "./components/Demo3";
export default {
  name: "App",
  data() {
    return {
      tabList: [
        {
          title: "demo1",
          component: Demo1
        },
        {
          title: "demo2",
          component: Demo2
        },
        {
          title: "demo3",
          component: Demo3
        }
      ]
    };
  },
  components: {
    Tab
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
