<template lang="pug">
  nav.pagination
    ul(v-if="pages")
      li
        router-link(:to="prefix + '/page/1'").button &laquo;
      li(v-for="page in pages")
        router-link(:to="prefix + '/page/' + page" v-if="Number(current) !== page").button {{ page }}
        a.disabled.button(v-else) {{ page }}
      li
        router-link(:to="prefix + '/page/' + max").button &raquo;
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    current: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    prefix: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      pages: [],
    };
  },
  watch: {
    max () {
      this.init();
    },
    current () {
      this.init();
    }
  },
  created () {
    this.init();
  },
  methods: {
    init () {
      let current = parseInt(this.current);
      let left = Math.max(1, current - Math.floor(Number(this.length) / 2));
      this.pages = new Array(parseInt(this.length)).fill(0).map((dummy, index) => index + left).filter(i => i <= Number(this.max));
    }
  },
};
</script>

<style lang="scss">
@import '../style/global.scss';
nav.pagination {
  $size: 28px;
  position: relative;
  margin: 0;
  padding: 20px;
  height: $size;
  ul {
    display: inline-block;
    list-style: none;
    padding: 0;
    margin-left: 85px;
    position: absolute;
    right: 10px;
    margin: 0;
  }
  li {
    display: inline-block;
    min-width: $size;
    min-height: $size;
    font-size: 14px;
    line-height: $size;
    text-align: center;
    margin-left: 0.3em;
    cursor: pointer;
    a:not(.disabled) {
      background-color: rgb(245, 245, 245);
      color: black;
      box-shadow: none;
    }
    a {
      display: inline-block;
      padding: 0 0.75em 0 0.75em;
    }
    a.disabled {
      cursor: initial;
    }
    a:hover {
      border: none;
    }
  }
}
</style>
