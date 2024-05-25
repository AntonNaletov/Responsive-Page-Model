<template>
  <div :class="['t-header__item', {'t-header__item_grow-1': grow}]" :style="{ width: width }">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "THeaderItem",
  props: {
    width: {
      type: String,
      default: ""
    },
    grow: {
      type: Boolean,
      default: false
    },
    placeholderCols: {
      type: Number,
      default: 4
    }
  }
}
</script>

<style lang="scss" scoped>
.t-header__item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 15px;
}

.t-header__item_grow-1 {
  flex-grow: 1;
}

.t-header__item:not(:last-child) {
  margin-right: 10px;
}

.t-header.t-header_placeholders .t-header__item > * > * {
  opacity: 0;
}

.t-header.t-header_placeholders .t-header__item > * {
  position: relative;
  overflow: hidden !important;
  background: #e4e4e4;
  border-radius: 5px;
  border: none;
}

.t-header.t-header_placeholders .t-header__item > *:after {
  position: absolute;
  content: " ";
  height: 100%;
  width: 30%;
  transform: skewX(-45deg);
  left: -150%;
  background: linear-gradient(90deg, rgba(242, 242, 242, .1) 1%, rgba(255, 255, 255, 0.4) 50%, rgba(242, 242, 242, .1) 99%);
  animation: flareAnimation 1.5s infinite linear;
  z-index: 3;
}

@keyframes flareAnimation {
  0% { left: -50% }
  100% { left: 110% }
}

.t-header.t-header_placeholders .t-header__item > *:before {
  position: absolute;
  content: " ";
  height: 100%;
  width: 100%;
  background: #e4e4e4;
  z-index: 2;
}
</style>
