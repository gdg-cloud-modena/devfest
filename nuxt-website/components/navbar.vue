<template>
    <div id="navbar" :class="{ 'dark': dark_mode }" data-navbar>
        <div id="logo">
            <img src="@/assets/svg/devfest-logo.svg" /> Modena
        </div>
        <div id="right-side" class="flexbox align-center" style="gap: 12px">
            <a href="mailto:sponsors@devfest.modena.it" class="button-like">
                Sponsorizza
            </a>
            <Hamburger />
        </div>
    </div>
</template>
<script setup>
    const navigation_menu = provide('navigation-menu', ref(false));
    const dark_mode = ref(false);

    const onIntersect = entries => {
        entries.forEach(e => {
            dark_mode.value = !e.isIntersecting;
        })
    }

    onMounted(() => {
        const navbar = document.querySelector('[data-navbar]');
        const observer_options = {
            threshold: 0,
            rootMargin: `${navbar.offsetHeight * -1}px`,
        };
        const observer = new IntersectionObserver(onIntersect, observer_options);
        [...document.querySelectorAll('[data-toggle]')]
            .forEach(i => {
                observer.observe(i);
            })
    });
</script>