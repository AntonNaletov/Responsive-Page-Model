<!-- Комопонент шапки раздела -->
<template>
  <div :class="['t-header', {'t-header_placeholders': showSpinners}]">
    <slot/>
  </div>
</template>

<script>

export default {
  name: "THeader",
  props: {
    showSpinners: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.t-header {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 20px 0 20px;
}
</style>
