<template>
  <div>
    <div id="hamburger" @click="navigation_menu = !navigation_menu">
      <div id="bars" v-if="navigation_menu === false">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div id="bars-45" v-else-if="navigation_menu === true">
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const navigation_menu = inject('navigation-menu');
</script>