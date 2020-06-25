<template>
  <div id="app">
    <h3>This is app</h3>
    <Index />
  </div>
</template>

<script>
import Index from "./views/dispatch-broadcast";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Index
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
h3 {
  color: #999;
  line-height: 1.3;
  padding-bottom: 10px;
  border-bottom: 1px solid lightsalmon;
  span:first-child {
    &::after {
      content: ":";
      display: inline;
      margin-left: 5px;
    }
  }
}
</style>
