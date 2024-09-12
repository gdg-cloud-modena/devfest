<template>
    <div>
        <Navbar />
        <NavigationMenu v-if="nav_menu_status" />
        <div id="speaker-page" data-scroll>
            <section 
                class="flexbox column at-least-full"
            >   
                <section id="hero" class="ternary-background">
                    <div class="flexbox" style="gap: 24px;">
                        <div class="image">
                            <slot name="image" />
                        </div>
                        <div class="flexbox column" style="gap: 24px">
                            <h1 class="text-accent"><slot name="title" /></h1>
                            <h2 style="font-weight: normal;"><slot name="subtitle" /></h2>
                            <h4 class="text-ternary">
                                <slot name="hint" />
                            </h4>
                        </div>
                    </div>
                </section>
                <section class="content at-least-full flexbox wrap" id="content">
                    <div class="flexbox column align-center" id="sider"
                    >
                        <slot name="speaker-image">
                            <div :class="['circle', 'radius-300', speakerImage]"></div>
                        </slot>
                        <slot name="speaker-info" />
                        <div class="flexbox pad-24" style="width: 100%;">
                            <RouterLink :to="speakerUrl" class="cool-blue button-like flexbox justify-center align-center" style="flex: 1; gap: 12px;">
                            <div>Scopri il talk</div>
                            <img src="@/assets/svg/arrow.svg" style="height: 20px;" />
                        </RouterLink>
                        </div>
                    </div>
                    <div class="flexbox column" id="description">
                        <slot name="description" /> 
                    </div>
                </section>
                <section id="under-content" style="width: 100% !important;">
                    <slot name="under-content" />
                </section>
            </section>
            <slot />
        </div>
        <Footer />
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
    #sider{
        gap: 24px; 
        flex: 1; 
        padding-top: 24px;
        border-right: 2px solid #cecece;
    }
    #description{
        padding-top: 24px;
        padding-left: 24px;
        gap: 24px; 
        flex: 1 1 800px;
    }
    @media screen and (max-width: 1024px){
        #page{
            #hero, #content{
                padding: 48px;
            }
            #hero{
                .image{
                    display: none;
                }
            }
        }
    }
    @media screen and (max-width: 870px){
        #page{
            #hero, #content{
                padding: 24px;
            }
            #hero{
                .image{
                    display: none;
                }
            }
        }
    }
</style>