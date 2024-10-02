<template>
  <div>
    <Navbar :white="true"/>
    <NavigationMenu v-if="nav_menu_status"/>
    <div id="page" data-scroll>
      <div
          class="flex flex-col at-least-full"
      >
        <div id="hero" class="ternary-background pt-20 lg:pt-32 px-10 lg:pb-12 pb-8" style="border-bottom: 2px solid #c9c9c9;">
          <section class="flex items-center gap-4">
            <div class="image max-w-12 lg:max-w-20">
              <slot name="image"/>
            </div>
            <div class="flex flex-col">
              <h1 class="text-accent text-3xl lg:text-5xl font-bold mx-0 my-0">
                <slot name="title"/>
              </h1>
              <h2 v-if="$slots.subtitle" class="font-normal my-4 text-2xl">
                <slot name="subtitle"/>
              </h2>
              <h4 v-if="$slots.hint" class="text-ternary text-lg">
                <slot name="hint"/>
              </h4>
            </div>
          </section>
        </div>
        <div class="content" id="content">
          <slot name="content"/>
        </div>
      </div>
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
const dark_mode = ref(true);
const nav_menu_status = ref(false);
provide('navigation-menu', nav_menu_status);
provide('dark-mode', dark_mode);
watch(nav_menu_status, (status) => {
  document.body.style.overflow = status ? "hidden" : "auto";
})
onMounted(() => {
  document.body.style.overflow = "auto";
});
</script>