<template>
  <div>
    <h3>This is Ancestors</h3>
    <p>
      <Parent1 />
    </p>
    <p>
      <Parent2 />
    </p>
  </div>
</template>

<script>
import Parent1 from "./parent-1";
import Parent2 from "./parent-2";
export default {
  name: "Ancestors",
  components: {
    Parent1,
    Parent2
  }
};
</script>

<style lang="less" scoped></style>
