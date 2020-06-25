<template>
  <div>
    <h3>
      <span>This is parent2</span>
    </h3>
    <p>
      <Child2 />
    </p>
  </div>
</template>

<script>
import Child2 from "./child-2-1";
import dispathBroadcast from "../../mixins/dispath-broadcast";
export default {
  name: "Parent2",
  components: {
    Child2
  },
  mixins: [dispathBroadcast]
};
</script>

<style lang="less" scoped></style>
