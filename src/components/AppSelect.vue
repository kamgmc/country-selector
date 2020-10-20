<template>
  <div
    class="select has-text-weight-medium"
    :tabindex="tabindex"
    @blur="isActive = false">
    <div class="selected" @click="isActive = !isActive">
      {{ selected ? selected : placeholder }}
    </div>
    <div
      class="options"
      :class="{ 'is-hidden': !isActive }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="onSelect(option)">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSelect',
  props: {
    options: {
      type: Array,
      required: true
    },
    default: {
      type: String,
      required: false,
      default: null
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      selected: this.default
        ? this.default
        : null,
      isActive: false
    }
  },
  methods: {
    onSelect (option) {
      this.selected = option
      this.isActive = false
      this.$emit('input', option)
    }
  },
  mounted () {
    this.$emit('input', this.selected)
  }
}
</script>

<style lang="scss">
.select {
  position: relative;
  max-width: 184px;
  width: 100%;
  text-align: left;
  outline: none;
  font-size: 14px;

  .selected {
    padding: 1rem 1.25rem;
    background-color: var(--element-color);
    box-shadow: 0 0.2em .5em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
    border-radius: 6px;
    color: var(--font-color);
    cursor: pointer;
    user-select: none;

    &:after {
      font-family: "Font Awesome 5 Pro", sans-serif;
      font-weight: 900;
      position: absolute;
      content: "\f078";
      right: 1.25em;
    }
  }

  .options {
    position: absolute;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 0.2em .5em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
    background-color: var(--element-color);
    color: var(--font-color);
    margin-top: 4px;
    left: 0;
    right: 0;
    z-index: 1;

    div {
      cursor: pointer;
      user-select: none;
      padding: 4px 1.25rem;

      &:hover {
        background-color: whitesmoke;
      }
    }
  }
}

.dark {
  .select {
    .options {
      div:hover {
        background-color: rgba(255, 255, 255, .1);
      }
    }
  }
}
</style>
