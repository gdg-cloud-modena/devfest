<template>
  <div id="navbar" :class="{dark: !props.white}" data-navbar>
    <div class="px-6 py-2">
      <RouterLink to="/" style="text-decoration: none;">
        <div id="logo">
          <img src="@/assets/svg/devfest-logo.svg"/> <span id="logo-text" class="font-semibold">Modena</span>
        </div>
      </RouterLink>
      <div id="right-side" class="flexbox align-center" style="gap: 12px">
        <a class="button-like py-2 px-4 font-semibold" id="sponsor-button">
          <RouterLink to="/sponsor-us">Sponsorizza</RouterLink>
        </a>
        <Hamburger/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {RouterLink} from 'vue-router';

const props = defineProps(["white"])

// const dark_mode = inject('dark-mode');
// const nav_menu_status = inject('navigation-menu');
// const was_dark_mode = dark_mode.value;
//
// watch(nav_menu_status, (new_val) => {
//     dark_mode.value = was_dark_mode ? true : new_val;
// });
//
// const onIntersect = entries => {
//     entries.forEach(e => {
//         dark_mode.value = !e.isIntersecting;
//     })
// }
//
// onMounted(() => {
//     const navbar = document.querySelector('[data-navbar]');
//     const observer_options = {
//         threshold: 0,
//         rootMargin: `${navbar.offsetHeight * -1}px`,
//     };
//     const observer = new IntersectionObserver(onIntersect, observer_options);
//     [...document.querySelectorAll('[data-toggle]')]
//         .forEach(i => {
//             observer.observe(i);
//         })
// });
</script>

<style lang="scss">
@media screen and (max-width: 500px) {
  #navbar {
    #logo {
      #logo-text {
        display: none;
      }
    }

    #sponsor-button {
      display: none;
    }
  }
}
</style>