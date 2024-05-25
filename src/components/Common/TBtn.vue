<template>
  <button
      class="t-btn"
      :title="title"
      :class="{
      active: active,
      white: variant === 'white',
      red: variant === 'red',
      yellow: variant === 'yellow',
      green: variant === 'green',
      blue: variant === 'blue'
    }"
      :style="{ width: width }"
      @click="(e) => onClick(e)"
  >
    <span v-if="title" class="t-btn__text">
      <span v-html="title"/>
    </span>
    <slot name="icon">
      <span v-if="icon" class="t-btn__icon"><img :src="btnIcon" :alt="icon"></span>
    </slot>
  </button>
</template>

<script>

export default {
  name: "TBtn",
  props: {
    title: {
      type: [String, null],
      default: null
    },
    icon: {
      type: [String, null],
      default: null
    },
    // Отдельная иконка для активного состояния кнопки
    svg: {
      type: [String, null],
      default: null
    },
    width: {
      type: [String, null],
      default: null
    },
    // Допустимые значения 'red', 'blue', 'yellow', 'green'
    strokeColor: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: ""
    },
    event: {
      type: [String, Object],
      default: "click"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnIcon() {
      return require('../../assets/icons/' + this.icon + '.svg')
    }
  },
  methods: {
    onClick(e) {
      if (this.disabled) {
        return
      }
      this.$emit(this.event, e)
    }
  }
}
</script>

<style lang="scss" scoped>
.t-btn {
  display: flex;
  align-items: center;
  height: 38px;
  font-size: 16px;
  background-color: #f2f2f2;
  border: 1px solid rgba(0,0,0, .2);
  outline: none;
  padding: 0;
  box-sizing: border-box;
  transition: .2s;
  color: #212529;
  cursor: pointer;
  white-space: nowrap;
  z-index: 1;
  max-width: 100%;
  margin-right: 10px;
  border-radius: 4px;
}

.t-btn__icon {
  display: flex;
  align-items: center;
  height: inherit;
}

.t-btn__icon img,
.t-btn__icon svg, {
  display: block;
  box-sizing: border-box;
  position: relative;
}

.t-btn__icon:first-child img,
.t-btn__icon:last-child img,
.t-btn__icon:first-child svg,
.t-btn__icon:last-child svg {
  margin-left: 5px;
  margin-right: 5px;
}

.t-btn__icon:only-child,
.t-btn__text:only-child {
  width: inherit;
  justify-content: center;
  min-width: 38px;
  img, svg {
    margin: 0;
  }
}

.t-btn__text {
  position: relative;
  margin-left: 5px;
  margin-right: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.t-btn__text:first-child {
  margin-left: 10px;
}

.t-btn__text:last-child {
  margin-right: 10px;
}

.t-btn.red {
  color: white;
  background-color: red;
}

.t-btn.yellow {
  background-color: yellow;
}

.t-btn.green {
  color: white;
  background-color: green
}

.t-btn.blue {
  color: white;
  background-color: #1897F2;
}

.t-btn.blue-gd {
  color: white;
  background: linear-gradient(to right, #EF32AD, #8C02ED 37.98%, #483AFF 65.47%, #0099DF 94.93%);
}

.t-btn.purple {
  color: white;
  background-color: purple;
}

.t-btn.turquoise {
  color: white;
  background-color: turquoise;
}

.t-btn.white {
  background-color: white;
}

.t-btn.text-white {
  color: white;
}

.t-btn.orange {
  color: white;
  background-color: orange;
}

.t-btn.turquoise {
  color: white;
  background-color: turquoise;
}

.t-btn.disabled {
  cursor: default;
  pointer-events: none;
  opacity: .80;
}

.t-btn.disabled span {
  opacity: .50;
}

.block > .t-btn,
.t-btn.block {
  width: 100%;
  display: block;
  text-align: center;
}
</style>