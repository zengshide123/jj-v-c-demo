<template>
  <div>
    <p>sub:{{ par.count }}</p>
  </div>
</template>

<script>
export default {
  name: "subDemo2",
  inject: ["par"]
};
</script>

<style lang="less" scoped></style>
