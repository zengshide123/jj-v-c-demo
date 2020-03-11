<template>
  <div class="demo1-wrap">
    <p>
      <Icon class="fa-address-book"></Icon>
    </p>
    <p>
      <Button
        type="primary"
        round
        size="large"
        icon="exclamation-circle"
        @click="handleClick"
        >真的</Button
      >
    </p>
  </div>
</template>

<script>
import Icon from "./packages/Icon";
import Button from "./packages/Button";
export default {
  name: "Demo1",
  data() {
    return {
      count: 1
    };
  },
  components: {
    Icon,
    Button
  },
  methods: {
    handleClick() {
      this.$bus.$emit("test1");
      this.$bus.$emit("test");
    },
    test() {
      console.log(this);
      console.log(this.$bus._events);
    }
  },
  mounted() {
    this.$bus_autoOff("test", this.test);
    this.$bus_autoOff("test", this.test);
    console.log(this.$bus._events);
  }
};
</script>

<style lang="less" scoped></style>
