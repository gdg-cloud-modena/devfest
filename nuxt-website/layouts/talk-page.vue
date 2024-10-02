<template>
  <div>
    <Navbar :white="true"/>
    <NavigationMenu v-if="nav_menu_status"/>
    <div id="speaker-page" data-scroll>
      <div
          class="flexbox column at-least-full"
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
        <div class="content at-least-full flexbox wrap" id="content">
          <section class="flexbox column align-center" id="sider"
          >
            <slot name="speaker-info"/>
          </section>
          <section class="flexbox column" id="description">
            <slot name="description"/>
          </section>
        </div>
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

<!--<style lang="scss">-->
<!--#sider {-->
<!--  gap: 24px;-->
<!--  flex: 1;-->
<!--  padding-top: 24px;-->
<!--  border-right: 2px solid #cecece;-->
<!--}-->

<!--#description {-->
<!--  padding-top: 24px;-->
<!--  padding-left: 24px;-->
<!--  gap: 24px;-->
<!--  flex: 1 1 800px;-->
<!--}-->

<!--@media screen and (max-width: 1024px) {-->
<!--  #page {-->
<!--    #hero, #content {-->
<!--      padding: 48px;-->
<!--    }-->

<!--    #hero {-->
<!--      .image {-->
<!--        display: none;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--  #sider {-->
<!--    border: none;-->
<!--  }-->
<!--}-->

<!--@media screen and (max-width: 870px) {-->
<!--  #page {-->
<!--    #hero, #content {-->
<!--      padding: 24px;-->
<!--    }-->

<!--    #hero {-->
<!--      .image {-->
<!--        display: none;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->

<!--@media screen and (max-width: 500px) {-->
<!--  #hero {-->
<!--    .image {-->
<!--      display: none;-->
<!--    }-->
<!--  }-->
<!--  #speaker-page {-->
<!--    #content {-->
<!--      padding: 0;-->
<!--    }-->

<!--    #hero {-->
<!--      padding-left: 24px;-->
<!--      padding-right: 24px;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->