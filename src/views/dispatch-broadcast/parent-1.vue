<template>
  <div>
    <h3>
      <span>This is parent1</span>
    </h3>
    <p>
      <Child1 />
    </p>
  </div>
</template>

<script>
import Child1 from "./child-1-1";
import dispathBroadcast from "../../mixins/dispath-broadcast";
export default {
  name: "Parent1",
  components: {
    Child1
  },
  mixins: [dispathBroadcast]
};
</script>

<style lang="less" scoped></style>
