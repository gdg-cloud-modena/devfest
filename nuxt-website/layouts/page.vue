<template>
    <div>
        <Navbar />
        <NavigationMenu v-if="nav_menu_status" />
        <div id="page" data-scroll>
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
                <section class="content" id="content">
                    <slot name="content" />
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
    @media screen and (max-width: 1024px){
        #page{
            #hero, #content{
                padding-left: 48px;
                padding-right: 48px;
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
                padding-left: 24px;
                padding-right: 24px;
            }
            #hero{
                .image{
                    display: none;
                }
            }
        }
    }
    @media screen and (max-width: 500px){
        #hero{
            .image{
                display: none;
            }
        }
        #page{
            #content{
                padding: 0;
            }
            #hero{
                padding-left: 24px;
                padding-right: 24px;
            }
        }
    }
</style>