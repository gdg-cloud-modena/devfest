<template>
    <div>
        <Navbar />
        <NavigationMenu v-if="nav_menu_status" />
        <div id="page" data-scroll>
            <section 
                class="flexbox column at-least-full"
                style="padding-top: 120px;"
            >   
                <section id="hero">
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
                <section id="content">
                    <slot name="content" />
                </section>
            </section>
            <slot />
        </div>
        <Footer />
    </div>
</template>
<script setup>
    const dark_mode = ref(false);
    const nav_menu_status = ref(false);
    provide('navigation-menu', nav_menu_status);
    provide('dark-mode', dark_mode);
    watch(nav_menu_status, (status) => {
        document.body.style.overflow = status ? "hidden" : "auto";
    })
</script>