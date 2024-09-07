<template>
    <div id="navbar" :class="{ 'dark': dark_mode }" data-navbar>
        <RouterLink to="/" style="text-decoration: none;">
            <div id="logo">
                <img src="@/assets/svg/devfest-logo.svg" /> Modena
            </div>
        </RouterLink>
        <div id="right-side" class="flexbox align-center" style="gap: 12px">
            <a href="mailto:sponsors@devfest.modena.it" class="button-like">
                Sponsorizza
            </a>
            <Hamburger />
        </div>
    </div>
</template>
<script setup>
    const dark_mode = inject('dark-mode');
    const nav_menu_status = inject('navigation-menu');
    const was_dark_mode = dark_mode.value;

    watch(nav_menu_status, (new_val) => {
        dark_mode.value = was_dark_mode ? true : new_val;
    });

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