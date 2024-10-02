<template>
  <div>
    <Navbar :white="true"/>
    <NavigationMenu v-if="nav_menu_status"/>
    <div id="speaker-page" data-scroll>
      <div
          class="flexbox column at-least-full"
      >
        <div id="hero" class="ternary-background pt-20 lg:pt-32 px-8 lg:px-16 lg:pb-12 pb-8" style="border-bottom: 2px solid #c9c9c9;">
          <section class="flex items-center gap-4">
            <div class="image max-w-10 lg:max-w-20">
              <slot name="image"/>
            </div>
            <div class="flex flex-col">
              <h1 class="text-accent text-2xl lg:text-4xl font-bold mx-0 my-0">
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
        <section class="content at-least-full flexbox wrap" id="content">
          <section class="flexbox column align-center py-14 gap-4" id="sider"
          >
            <slot name="speaker-image">
              <div :class="['circle', 'radius-300', speakerImage]"></div>
            </slot>
            <slot name="speaker-info"/>
          </section>
          <section id="description" class="py-14">
            <div id="separator" style="gap: 12px;">
              <slot name="talk"/>
            </div>
            <div id="bio" class="text-justify">
              <slot name="description"/>
            </div>
          </section>
        </section>
      </div>
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
const props = defineProps(['speakerUrl', 'speakerImage']);
const {
  speakerUrl,
  speakerImage,
} = toRefs(props);
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

<style lang="scss">
#sider {
  flex: 1;
  border-right: 2px solid #cecece;
}

#description {
  padding-left: 24px;
  padding-right: 24px;
  gap: 24px;
  text-align: justify;
  flex: 1 1 800px;

  h2 {
    font-weight: bolder;
    font-size: 1.25rem;
  }
}

#separator {
  border-bottom: 2px solid #cecece;
  padding-bottom: 24px;
}

#bio {
  padding-top: 24px;
}
</style>