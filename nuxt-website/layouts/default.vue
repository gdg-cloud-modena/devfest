<template>
    <div>
        <Navbar />
        <NavigationMenu v-if="nav_menu_status" />
        <div id="page" data-scroll>
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