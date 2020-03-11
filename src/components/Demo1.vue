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
    return {};
  },
  components: {
    Icon,
    Button
  },
  methods: {
    handleClick() {
      console.log("trigger click");
    }
  }
};
</script>

<style lang="less" scoped></style>
