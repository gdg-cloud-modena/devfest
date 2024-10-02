<template>
    <div class="flexbox column w-full">
        <div class="flexbox wrap pad-24 gap-4 lg:gap-8">
            <div class="text-lg"><RouterLink to="/faq">FAQ</RouterLink></div>
            <div class="text-lg"><RouterLink to="/location">Location</RouterLink></div>
            <div class="text-lg"><RouterLink to="/sponsors">Sponsor</RouterLink></div>
            <div class="text-lg"><RouterLink to="/team">Team</RouterLink></div>
            <div class="text-lg"><RouterLink to="/communities">Communities</RouterLink></div>
            <div class="text-lg"><RouterLink to="/contact-us">Contacts</RouterLink></div>
            <div class="text-lg"><RouterLink to="/code-of-conduct">Codice di condotta</RouterLink></div>
            <div class="text-lg"><RouterLink to="/program">Programma</RouterLink></div>
        </div>
        <div class="flexbox wrap pad-24 gap-4 lg:gap-8">
            <RouterLink to="/privacy">Privacy Policy</RouterLink>
            <RouterLink to="/legal">Note legali</RouterLink>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>