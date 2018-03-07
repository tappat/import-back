<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links {{ itsMessage }}</h2>
    <h2 contenteditable="true">{{ $t('hello') }}</h2>
    <button
      v-if="showButton"
      @click="tryShowHtml">Click</button>
    <button @click="tryShowHtml">Click</button>
    <select
      v-model="lang"
      @change="langChange">
      <option value="en-US">en-US</option>
      <option value="se-SV">se-SV</option>
      <option value="no">no</option>
    </select>
    <select
      v-model="numbers">
      <option value="plain">plain</option>
      <option value="noDecimals">noDecimals</option>
      <option value="decimal">decimal</option>
    </select>
    <p><input @input="(e) => setGlobalName(e.target.value)"></p>
    <p>{{ itsNumber }}</p>
    <h4>{{ $d(new Date(), 'long') }}</h4>
    <h3>{{ lang }}</h3>
    <h3>{{ globalName }}</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import app from '../main';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App45',
      lang: 'se-SV',
      numbers: 'decimal',
      showButton: false,
    };
  },
  computed: {
    ...mapGetters({
      globalName: 'lubumb',
    }),
    itsNumber() {
      return this.$n(1000.3444, this.numbers);
    },
    itsMessage() {
      return this.$store.getters.lubumb;
    },
  },
  methods: {
    ...mapActions({
      setGlobalName: 'setGlobalName',
    }),
    tryShowHtml() {
      this.showButton = !this.showButton;
      console.log(this.$el);
    },
    langChange(e) {
      app.$i18n.locale = e.target.value;
    },
    printMsg() {
      return 'message';
    },
  },
};
</script>

<style lang="scss">
  body{
    background: $color
  }
</style>
