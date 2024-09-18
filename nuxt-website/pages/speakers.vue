<template>
    <Title>
        DevFest Modena 2024 &mdash; Speakers
    </Title>
    <div>
        <NuxtLayout name="page">
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title>
                Gli speakers
            </template>
            <template #content>
                <div class="flexbox wrap justify-center align-top" style="gap: 48px; flex: 1 1 400px;">
                    <div class="white-card max-width-450">
                        <div class="image riccardo-carlesso"></div>
                        <h4>Riccardo Carlesso</h4>
                        <p class="text-label">English/Italiano</p>
                    </div>
                </div>
            </template>
            <template #under-content>
                <FreeTicket />
                <SocialLinks />
            </template>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: false,
    });
</script>